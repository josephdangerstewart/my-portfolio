import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import {
	Thumbnail,
	ThumbnailContainer,
	ExternalLinkOverlay,
	ExternalLinkIconContainer,
	ExternalLinkText,
} from './ProjectThumbnail.styled';
import { useLocalization } from '../hooks';
import { Variants } from 'framer-motion';

interface ProjectThumbnailProps {
	thumbnailUrl: string;
	thumbnailAltText: string;
	url: string;
}

const externalLinkOverlayVariants: Variants = {
	rest: {
		opacity: 0,
	},
	hover: {
		opacity: 1,
	}
};

const externalLinkTextVariants: Variants = {
	restIcon: {
		width: 0,
	},
	hoverIcon: {
		width: 'fit-content',
	}
};

export const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({
	thumbnailUrl,
	thumbnailAltText,
	url,
}) => {
	const localization = useLocalization().projectsSection;

	return (
		<ThumbnailContainer layout initial="rest" animate="rest" whileHover="hover">
			<Thumbnail layout src={thumbnailUrl} alt={thumbnailAltText} />
			<ExternalLinkOverlay variants={externalLinkOverlayVariants}>
				<ExternalLinkIconContainer
					href={url}
					target="_blank"
					rel="noopener noreferrer"
					initial="restIcon"
					animate="restIcon"
					whileHover="hoverIcon"
					aria-label={localization.openExternalLinkAria}
				>
					<FontAwesomeIcon icon={faExternalLinkAlt} aria-hidden />
					<ExternalLinkText variants={externalLinkTextVariants} aria-hidden>{localization.openExternalLink}</ExternalLinkText>
				</ExternalLinkIconContainer>
			</ExternalLinkOverlay>
		</ThumbnailContainer>
	);
};
