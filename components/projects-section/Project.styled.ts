import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const ContentBackground = styled(motion.div)`
	background-color: ${({ theme }) => theme.colors.background};
`;

const contentOpenStyles = css`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 2;
	overflow-y: auto;
	overflow-x: hidden;

	${ContentBackground} {
		padding: 20px;
	}
`;

export const ContentRoot = styled(motion.div)<{ isOpen: boolean }>`
	${({ isOpen }) => isOpen ? contentOpenStyles : ''}
	visibility: visible;

	p:last-child {
		margin-bottom: 0;
	}
`;

export const ThumbnailTitleContainer = styled(motion.div)`
	background-color: ${({ theme }) => theme.colors.background};
`;

export const ContentPlaceholder = styled.div`
	visibility: hidden;
`;

export const CloseButton = styled(motion.a)`
	position: fixed;
	top: 20px;
	right: 40px;
	cursor: pointer;
	font-size: 24px;
	z-index: 4;
	color: ${({ theme }) => theme.colors.text.body};
	visibility: visible;

	&:hover {
		color: ${({ theme }) => theme.colors.text.linkHover};
	}
`;

export const ContentContainer = styled(motion.div)`
	overflow: hidden;
	width: 90vw;
	margin: 0 auto;
`;

export const Title = styled(motion.h2)`
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
