import React from 'react';
import { ILocalizedProject } from '../../localization/localization';
import { Thumbnail, Title, Description } from './Project.styled';

interface ProjectProps {
	project: ILocalizedProject;
}

export const Project: React.FC<ProjectProps> = ({ project }) => (
	<div>
		<Thumbnail />
		<Title>
			{project.title}
		</Title>
		<Description>
			{project.content}
		</Description>
	</div>
);
