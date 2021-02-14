import React from 'react';
import { SectionRoot, SectionHeader, SectionKind } from '../common';
import { useLocalization } from '../hooks';

export const HireMeSection: React.FC = () => {
	const localization = useLocalization().hireMeSection;
	return (
		<SectionRoot kind={SectionKind.Footer}>
			<SectionHeader>{localization.title}</SectionHeader>
		</SectionRoot>
	);
};
