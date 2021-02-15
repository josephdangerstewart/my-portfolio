import React from 'react';
import { ILocalizedProject } from '../../localization/localization';
import {
	Thumbnail,
	Title,
	Description,
	ProjectContainer,
	TitleLink,
} from './Project.styled';

interface ProjectProps {
	project: ILocalizedProject;
}

export const Project: React.FC<ProjectProps> = ({ project }) => (
	<ProjectContainer>
		<Thumbnail src={project.thumbnailUrl} alt={project.thumbnailAltText} />
		<Title>
			{project.url ? (
				<TitleLink href={project.url} target="_blank" rel="noopener noreferrer">
					{project.title}
				</TitleLink>
			) : project.title}
		</Title>
		<Description>
			{project.content}
		</Description>
	</ProjectContainer>
);
