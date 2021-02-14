import styled from 'styled-components';
import { motion } from 'framer-motion';

export const EmojiTextContainer = styled(motion.span)`
	display: inline-flex;
	position: relative;
`;

export const EmojiTextLabel = styled(motion.span)`
	font-weight: 800;
	cursor: default;
`;

export const EmojiTextEmoji = styled(motion.span)`
	position: absolute;
	left: 0;
	width: 100%;
	height: 100%;
	text-align: center;
	cursor: default;
`;
