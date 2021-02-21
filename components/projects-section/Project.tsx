import React, { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
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

interface ProjectProps {
	project: ILocalizedProject;
}

export const Project: React.FC<ProjectProps> = ({ project }) => {
	const router = useRouter();
	const { projectName } = router.query;
	const isInitiallyOpened = projectName?.[0] === project.id;
	const [isOpen, setIsOpen] = useState(isInitiallyOpened);

	const toggleIsOpen = useCallback(() => {
		setIsOpen(prev => {
			const next = !prev;

			if (next) {
				router.push(`/${project.id}`, undefined, { shallow: true });
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
								isInitiallyOpened={isInitiallyOpened}
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
