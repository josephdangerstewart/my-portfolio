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
			<ComputerImage src="https://res.cloudinary.com/josephdangerstewart/image/upload/c_scale,q_auto:eco,w_500/v1613442346/joseph-likes-code/computer.png" alt={localization.computerMessage} />
			<TextContainer aria-hidden>
				<Text>{currentText}</Text>
			</TextContainer>
		</ComputerContainer>
	);
};
