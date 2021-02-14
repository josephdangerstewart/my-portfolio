import React from 'react';
import { SectionRoot, SectionKind } from '../common';
import {
	Title,
	TitleContainer,
} from './HeaderSection.styled';
import { Computer } from './Computer';

export const HeaderSection: React.FC = () => {
	return (
		<SectionRoot kind={SectionKind.Header}>
			<TitleContainer>
				<Title>Joseph Stewart</Title>
			</TitleContainer>
			<Computer />
		</SectionRoot>
	);
};
