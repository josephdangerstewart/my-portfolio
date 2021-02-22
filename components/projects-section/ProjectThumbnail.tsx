import React, { useMemo, useState, useCallback } from 'react';
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
	isInitiallyOpen?: boolean;
	isOpen?: boolean;
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

const thumbnailContainerVariants: Variants = {
	rest: {
		width: 365,
		height: 225.5,
	},
	open: {
		width: 450,
		height: 278.1,
	}
};

export const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({
	thumbnailUrl,
	thumbnailAltText,
	url,
	isInitiallyOpen,
	isOpen,
}) => {
	const localization = useLocalization().projectsSection;
	const [isLinkFocused, setIsLinkFocused] = useState(false);

	const onFocus = useCallback(() => setIsLinkFocused(true), []);
	const onBlur = useCallback(() => setIsLinkFocused(false), []);

	const {
		initial,
		animate,
		whileHover,
	} = useMemo(() => {
		const initial = ['rest'];
		const animate = [isLinkFocused ? 'hover' : 'rest'];
		const whileHover = ['hover'];

		if (isInitiallyOpen) {
			initial.push('open');
		}

		if (isOpen) {
			animate.push('open');
			whileHover.push('open');
		}

		return {
			initial,
			animate,
			whileHover,
		};
	}, [isInitiallyOpen, isOpen, isLinkFocused]);

	return (
		<ThumbnailContainer
			layout
			initial={initial}
			animate={animate}
			whileHover={whileHover}
			variants={thumbnailContainerVariants}
		>
			<Thumbnail layout src={thumbnailUrl} alt={thumbnailAltText} />
			<ExternalLinkOverlay variants={externalLinkOverlayVariants}>
				<ExternalLinkIconContainer
					href={url}
					target="_blank"
					rel="noopener noreferrer"
					initial="restIcon"
					animate={isLinkFocused ? 'hoverIcon' : 'restIcon'}
					whileHover="hoverIcon"
					aria-label={localization.openExternalLinkAria}
					onFocus={onFocus}
					onBlur={onBlur}
				>
					<FontAwesomeIcon icon={faExternalLinkAlt} aria-hidden />
					<ExternalLinkText variants={externalLinkTextVariants} aria-hidden>{localization.openExternalLink}</ExternalLinkText>
				</ExternalLinkIconContainer>
			</ExternalLinkOverlay>
		</ThumbnailContainer>
	);
};
