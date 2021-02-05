import React from 'react';
import {
	Title,
	TitleContainer,
	SectionRoot,
} from './HeaderSection.styled';
import { Computer } from './Computer';

export const HeaderSection: React.FC = () => {
	return (
		<SectionRoot>
			<TitleContainer>
				<Title>Joseph Stewart</Title>
			</TitleContainer>
			<Computer />
		</SectionRoot>
	);
};
