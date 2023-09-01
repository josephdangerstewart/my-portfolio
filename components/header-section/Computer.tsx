import React, { useState } from 'react';
import {
	ComputerContainer,
	ComputerImage,
	TextContainer,
	Text,
} from './Computer.styled';
import { useLocalization, useSlowType } from '../hooks';

export const Computer: React.FC = () => {
	const localization = useLocalization().headerSection;
	const [isComputerLoaded, setIsComputerLoaded] = useState(false);
	const currentText = useSlowType(localization.computerMessage, 7, '> ', 0.5, isComputerLoaded);
	
	return (
		<ComputerContainer
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: isComputerLoaded ? 1 : 0, y: isComputerLoaded ? 0 : -10 }}
		>
			<ComputerImage
				src="https://res.cloudinary.com/josephdangerstewart/image/upload/c_scale,q_auto:eco,w_500/v1613442346/joseph-likes-code/computer.png"
				alt={localization.computerMessage}
				width={500}
				height={373}
				onLoad={() => setIsComputerLoaded(true)}
			/>
			<TextContainer aria-hidden>
				<Text>{currentText}</Text>
			</TextContainer>
		</ComputerContainer>
	);
};
