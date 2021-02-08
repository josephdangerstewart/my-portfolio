import React from 'react';
import { SectionRoot, SectionHeader } from '../common';
import { useLocalization } from '../hooks';

export const ProjectsSection: React.FC = () => {
	const localization = useLocalization().projectsSection;

	return (
		<SectionRoot>
			<SectionHeader>
				{localization.title}
			</SectionHeader>
		</SectionRoot>
	);
};
