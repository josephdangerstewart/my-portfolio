import React from 'react';
import { useLocalization } from '../hooks';
import { SectionRoot, EmojiTextContainer } from './AboutMeSection.styled';
import { SectionHeader } from '../common';
import { EmojiTextBlock } from './EmojiTextBlock';

export const AboutMeSection: React.FC = () => {
	const localization = useLocalization().aboutMeSection;

	return (
		<SectionRoot>
			<SectionHeader>{localization.title}</SectionHeader>
			<EmojiTextContainer>
				<EmojiTextBlock text={localization.bio} />
			</EmojiTextContainer>
		</SectionRoot>
	);
};
