import React, { useState } from 'react';
import { ILocalizedProject } from '../../localization/localization';
import {
	Title,
	Description,
	ProjectContainer,
	ContentContainer,
} from './Project.styled';
import { ProjectContent } from './ProjectContent';
import { ProjectThumbnail } from './ProjectThumbnail';

interface ProjectProps {
	project: ILocalizedProject;
}

export const Project: React.FC<ProjectProps> = ({ project }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<ProjectContainer onClick={() => setIsOpen(prev => !prev)}>
			<ContentContainer isOpen={isOpen}>
				<ProjectThumbnail
					thumbnailUrl={project.thumbnailUrl}
					thumbnailAltText={project.thumbnailAltText}
					url={project.url}
				/>
				<Title>
					{project.title}
				</Title>
				{isOpen && (
					<ProjectContent content={project.content}  />
				)}
			</ContentContainer>
			<Description>
				{project.shortDescription}
			</Description>
		</ProjectContainer>
	);
};
