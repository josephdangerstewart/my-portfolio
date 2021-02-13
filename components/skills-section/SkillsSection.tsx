import React from 'react';
import {
	BannerList,
	BannerListItem,
	SectionHeader,
	SectionRoot
} from '../common';
import { useLocalization } from '../hooks';

export const SkillsSection: React.FC = () => {
	const localization = useLocalization().skillsSection;

	return (
		<SectionRoot>
			<SectionHeader>{localization.title}</SectionHeader>
			<BannerList>
				{localization.skills.map(({ skill, proficiencyLevel }) => (
					<BannerListItem
						text={skill}
						hoverText={`${proficiencyLevel}/5`}
						key={skill}
					/>
				))}
			</BannerList>
		</SectionRoot>
	);
};
