import React from 'react';
import { Title, TitleContainer } from './HeaderSection.styled';

export const HeaderSection: React.FC = () => {
	return (
		<div>
			<TitleContainer>
				<Title>Joseph Stewart</Title>
			</TitleContainer>
			<p>Here will be a fun little animation of a computer</p>
		</div>
	);
};
