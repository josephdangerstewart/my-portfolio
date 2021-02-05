import React from 'react';
import {
	ComputerContainer,
	ComputerImage,
	TextContainer,
	Text,
} from './Computer.styled';
import { useSlowType } from '../hooks/useSlowType';

export const Computer: React.FC = () => {
	const currentText = useSlowType('Hello world!', 7, '> ', 0.5);
	
	return (
		<ComputerContainer>
			<ComputerImage src="/computer.png" />
			<TextContainer>
				<Text>{currentText}</Text>
			</TextContainer>
		</ComputerContainer>
	);
};
