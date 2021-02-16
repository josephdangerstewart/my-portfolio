import React, { useState, useCallback, useMemo } from 'react';
import { ILocalizedProject } from '../../localization/localization';
import {
	Title,
	Description,
	ProjectContainer,
	ContentRoot,
	ContentBackground,
	ContentContainer,
	ThumbnailTitleContainer,
} from './Project.styled';
import { ProjectContent } from './ProjectContent';
import { ProjectThumbnail } from './ProjectThumbnail';
import { TargetAndTransition, AnimatePresence } from 'framer-motion';

interface ProjectProps {
	project: ILocalizedProject;
}

const initialContainerState = {
	height: 0,
};

export const Project: React.FC<ProjectProps> = ({ project }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleIsOpen = useCallback(() => {
		setIsOpen(prev => {
			const next = !prev;

			if (next) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = 'auto';
			}

			return next;
		});
	}, []);

	const containerAnimate = useMemo<TargetAndTransition>(() => {
		if (isOpen) {
			return {
				height: 'fit-content',
			};
		} else {
			return {
				height: 0,
			};
		}
	}, [isOpen]);

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
					{isOpen && (
						<AnimatePresence>
							<ProjectContent content={project.content} />
						</AnimatePresence>
					)}
				</ContentBackground>
			</ContentRoot>
			<Description>
				{project.shortDescription}
			</Description>
		</ProjectContainer>
	);
};
