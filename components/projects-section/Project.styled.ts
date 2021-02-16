import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const contentOpenStyles = css`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	z-index: 2;
	background-color: ${({ theme }) => theme.colors.background};
`;

export const ContentContainer = styled(motion.div)<{ isOpen: boolean }>`
	${({ isOpen }) => isOpen ? contentOpenStyles : ''}
`;

export const Title = styled.h2`
	margin: 32px 0;
	text-align: center;
	word-break: break-word;
`;

export const TitleLink = styled.a`
	color: ${({ theme }) => theme.colors.text.header};
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;

export const Description = styled.p`
	max-width: 300px;
	margin: 0 auto;
	padding: 0 16px;
`;

export const ProjectContainer = styled.div`
	margin: 40px 0;

	&:first-child {
		margin-top: 0;
	}

	&:last-child {
		margin-bottom: 0;
	}
`;
