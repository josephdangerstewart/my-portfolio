import React from 'react';
import {
	ComputerContainer,
	ComputerImage,
	TextContainer,
	Text,
} from './Computer.styled';
import { useLocalization, useSlowType } from '../hooks';

export const Computer: React.FC = () => {
	const localization = useLocalization().headerSection;
	const currentText = useSlowType(localization.computerMessage, 7, '> ', 0.5);
	
	return (
		<ComputerContainer>
			<ComputerImage src="/computer.png" />
			<TextContainer>
				<Text>{currentText}</Text>
			</TextContainer>
		</ComputerContainer>
	);
};
