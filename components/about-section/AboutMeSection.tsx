import React from 'react';
import { useLocalization } from '../hooks';
import { SectionRoot } from './AboutMeSection.styled';
import { SectionHeader } from '../common';

export const AboutMeSection: React.FC = () => {
	const localization = useLocalization().aboutMeSection;

	return (
		<SectionRoot>
			<SectionHeader>{localization.aboutMeTitle}</SectionHeader>
		</SectionRoot>
	);
};
