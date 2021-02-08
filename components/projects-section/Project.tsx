import React from 'react';
import { ILocalizedProject } from '../../localization/localization';
import { Thumbnail, Title, Description, ProjectContainer } from './Project.styled';

interface ProjectProps {
	project: ILocalizedProject;
}

export const Project: React.FC<ProjectProps> = ({ project }) => (
	<ProjectContainer>
		<Thumbnail />
		<Title>
			{project.title}
		</Title>
		<Description>
			{project.content}
		</Description>
	</ProjectContainer>
);
