import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ThumbnailProps {
	src: string;
}

export const ThumbnailContainer = styled(motion.div)`
	position: relative;
	width: 365px;
	height: 225.5px;
	max-width: 100%;
	margin: 0 auto;
`;

export const Thumbnail = styled(motion.img)<ThumbnailProps>`
	display: block;
	object-fit: cover;
	background-color: ${({ theme }) => theme.colors.primary};
	border-radius: 4px;
	width: 100%;
	height: 100%;
`;

export const DesktopExternalLinkOverlay = styled(motion.div)`
	position: absolute;
	top: 8px;
	right: 8px;

	${({ theme }) => theme.mediaQueries.touchDeviceOnly} {
		display: none;
	} 
`;

export const ExternalLinkIconContainer = styled(motion.a)`
	color: ${({ theme }) => theme.colors.background};
	display: inline-flex;
	align-items: center;
	text-decoration: none;
`;

export const ExternalLinkText = styled(motion.span)`
	display: inline-block;
	white-space: nowrap;
	overflow: hidden;
	font: ${({ theme }) => theme.fonts.body};
	font-size: 16px;
	margin-left: 4px;
`;