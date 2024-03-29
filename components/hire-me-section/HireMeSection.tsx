import React from 'react';
import { SectionRoot, SectionHeader, SectionKind } from '../common';
import { useLocalization } from '../hooks';
import { SectionBackground, Subtitle } from './HireMeSection.styled';
import { ContactForm } from './ContactForm';

export const HireMeSection: React.FC = () => {
	const localization = useLocalization().hireMeSection;

	return (
		<SectionRoot kind={SectionKind.Footer}>
			<SectionBackground>
				<SectionHeader marginBottom={0}>{localization.title}</SectionHeader>
				<Subtitle>{localization.subtitle}</Subtitle>
				<ContactForm />
			</SectionBackground>
		</SectionRoot>
	);
};
