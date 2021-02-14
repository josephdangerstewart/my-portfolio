import React, { useMemo } from 'react';
import { SectionRoot, SectionHeader, SectionKind, RotatingText } from '../common';
import { useLocalization } from '../hooks';
import { SectionBackground, Subtitle, TaglineContainer } from './HireMeSection.styled';
import { ContactForm } from './ContactForm';

export const HireMeSection: React.FC = () => {
	const localization = useLocalization().hireMeSection;

	const Tagline = useMemo(() => {
		const parts = localization.tagline.template.split('%ITEM%');

		return (
			<>
				<span>{parts[0]}</span>
				<RotatingText text={localization.tagline.items} width={130} delay={6} />
				<span>{parts[1]}</span>
			</>
		);
	}, [localization.tagline]);

	return (
		<SectionRoot kind={SectionKind.Footer}>
			<SectionBackground>
				<SectionHeader marginBottom={0}>{localization.title}</SectionHeader>
				<Subtitle>{localization.subtitle}</Subtitle>
				<TaglineContainer>
					{Tagline}
				</TaglineContainer>
				<ContactForm />
			</SectionBackground>
		</SectionRoot>
	);
};
