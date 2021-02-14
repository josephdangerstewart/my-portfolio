import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HoverTextContainer = styled(motion.div)`
	position: absolute;
	width: 8px;
	height: 100%;
	left: 0px;
	top: 0px;
	background-color: ${({ theme }) => theme.colors.primary};
	border-radius: 10px;
	overflow: hidden;
	display: flex;
	align-items: center;
`;

export const HoverText = styled(motion.p)`
	white-space: nowrap;
`;

export const ListItem = styled(motion.li)`
	position: relative;
	padding: 2px 0 2px 32px;
	margin: 36px 0;

	p {
		margin: 0;
		cursor: default;
	}

	${HoverText} {
		margin-left: 44px;
	}

	&:last-child {
		margin-bottom: 0;
	}
`;
