import React from 'react';
import {
	BannerList,
	BannerListItem,
	SectionHeader,
	SectionRoot
} from '../common';
import { useLocalization } from '../hooks';
import { ListWrapper } from './ExperienceSection.styled';

export const ExperienceSection: React.FC = () => {
	const localization = useLocalization().experienceSection;

	return (
		<SectionRoot>
			<SectionHeader>{localization.title}</SectionHeader>
			<ListWrapper>
				<BannerList>
					{localization.experience.map(({ place, durationString, position }) => (
						<BannerListItem
							text={`${place} | ${durationString}`}
							hoverText={position}
							key={place}
						/>
					))}
				</BannerList>
			</ListWrapper>
		</SectionRoot>
	);
};
