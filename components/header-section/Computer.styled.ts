import styled from 'styled-components';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const ComputerContainer = styled(motion.div)`
	width: 90%;
	max-width: 500px;
	margin: 0 auto;
	position: relative;
`;

export const ComputerImage = styled(Image)`
	max-width: 100%;
	height: auto;
`;

export const TextContainer = styled.div`
	position: absolute;
	top: 7%;
	left: 16%;
`;

export const Text = styled.p`
	font: ${({ theme }) => theme.fonts.computer};
	color: ${({ theme }) => theme.colors.text.computer};
	margin: 0;
`;
