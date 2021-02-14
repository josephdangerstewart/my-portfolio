import React from 'react';
import { SectionRoot, SectionHeader } from '../common';
import { useLocalization } from '../hooks';
import { Project } from './Project';
import { ProjectsContainer } from './ProjectsSection.styled';

export const ProjectsSection: React.FC = () => {
	const localization = useLocalization().projectsSection;

	return (
		<SectionRoot>
			<SectionHeader>
				{localization.title}
			</SectionHeader>
			<ProjectsContainer>
				{localization.projects.map(x => (
					<Project project={x} key={x.title} />
				))}
			</ProjectsContainer>
		</SectionRoot>
	);
};
