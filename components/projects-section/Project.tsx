import React from 'react';
import { ILocalizedProject } from '../../localization/localization';
import {
	Thumbnail,
	ThumbnailContainer,
	ExternalLinkOverlay,
	ExternalLinkIconContainer,
	ExternalLinkText,
	Title,
	Description,
	ProjectContainer,
	TitleLink,
} from './Project.styled';
import { Variants } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { useLocalization } from '../hooks';

interface ProjectProps {
	project: ILocalizedProject;
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

export const Project: React.FC<ProjectProps> = ({ project }) => {
	const localization = useLocalization().projectsSection;

	return (
		<ProjectContainer>
			<ThumbnailContainer initial="rest" animate="rest" whileHover="hover">
				<Thumbnail src={project.thumbnailUrl} alt={project.thumbnailAltText} />
				<ExternalLinkOverlay variants={externalLinkOverlayVariants}>
					<ExternalLinkIconContainer
						href={project.url}
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
			<Title>
				{project.url ? (
					<TitleLink href={project.url} target="_blank" rel="noopener noreferrer">
						{project.title}
					</TitleLink>
				) : project.title}
			</Title>
			<Description>
				{project.content}
			</Description>
		</ProjectContainer>
	);
};
