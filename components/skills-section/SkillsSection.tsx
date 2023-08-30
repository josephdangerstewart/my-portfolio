import React from 'react';
import {
	BannerList,
	BannerListItem,
	SectionHeader,
	SectionRoot
} from '../common';
import { useLocalization } from '../hooks';
import { ListWrapper } from './SkillsSection.styled';

export const SkillsSection: React.FC = () => {
	const localization = useLocalization().skillsSection;

	return (
		<SectionRoot>
			<SectionHeader>{localization.title}</SectionHeader>
			<ListWrapper>
				<BannerList>
					{localization.skills.map(({ skill, years }) => (
						<BannerListItem
							text={skill}
							hoverText={localization.skillTemplate.replace('%YEARS%', years.toString())}
							key={skill}
						/>
					))}
				</BannerList>
			</ListWrapper>
		</SectionRoot>
	);
};
