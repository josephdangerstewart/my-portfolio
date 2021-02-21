import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ILocalizedProject } from '../../localization/localization';
import {
	Title,
	Description,
	ProjectContainer,
	ContentRoot,
	ContentBackground,
	ThumbnailTitleContainer,
} from './Project.styled';
import { ProjectContent } from './ProjectContent';
import { ProjectThumbnail } from './ProjectThumbnail';
import { AnimatePresence } from 'framer-motion';

interface ProjectProps {
	project: ILocalizedProject;
}

export const Project: React.FC<ProjectProps> = ({ project }) => {
	const router = useRouter();
	const { projectName } = router.query;
	const [isOpen, setIsOpen] = useState(project.title === projectName);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}, [isOpen]);

	const toggleIsOpen = useCallback(() => {
		setIsOpen(prev => {
			const next = !prev;

			if (next) {
				router.push(`/?projectName=${encodeURIComponent(project.title)}`, undefined, { shallow: true });
			} else {
				router.push('/', undefined, { shallow: true });
			}

			return next;
		});
	}, [router]);

	return (
		<ProjectContainer onClick={toggleIsOpen}>
			<ContentRoot isOpen={isOpen}>
				<ContentBackground layout>
					<ThumbnailTitleContainer layout>
						<ProjectThumbnail
							thumbnailUrl={project.thumbnailUrl}
							thumbnailAltText={project.thumbnailAltText}
							url={project.url}
						/>
						<Title layout>
							{project.title}
						</Title>
					</ThumbnailTitleContainer>
					<AnimatePresence>
						{isOpen && (
							<ProjectContent
								content={project.content}
								isInitiallyOpened={project.title === projectName}
							/>
						)}
					</AnimatePresence>
				</ContentBackground>
			</ContentRoot>
			<Description>
				{project.shortDescription}
			</Description>
		</ProjectContainer>
	);
};
