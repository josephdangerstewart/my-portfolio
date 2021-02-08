import React from 'react';
import { ILocalizedProject } from '../../localization/localization';
import { Thumbnail, Title } from './Project.styled';

interface ProjectProps {
	project: ILocalizedProject;
}

export const Project: React.FC<ProjectProps> = ({ project }) => (
	<div>
		<Thumbnail />
		<Title>
			{project.title}
		</Title>
	</div>
);
