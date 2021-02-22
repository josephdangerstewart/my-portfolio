import React, { useState, useCallback, useMemo, useContext } from 'react';
import { useRouter } from 'next/router';
import { ThemeContext } from 'styled-components';
import { AnimatePresence, Variants } from 'framer-motion';
import { ILocalizedProject } from '../../localization/localization';
import {
	Title,
	Description,
	ProjectContainer,
	ContentRoot,
	ContentBackground,
	ThumbnailTitleContainer,
	TitleLink,
	ContentPlaceholder,
} from './Project.styled';
import { ProjectContent } from './ProjectContent';
import { ProjectThumbnail } from './ProjectThumbnail';

interface RGB {
	r: number;
	g: number;
	b: number;
}

export function hexToRgb(hex: string): RGB {
	const normalizedHex = hex.replace(
		/^#([a-f\d])([a-f\d])([a-f\d])$/ig,
		(m, r, g, b) => (`#${r + r + g + g + b + b}`),
	);

	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(normalizedHex);
	return result && {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16),
	};
}

export function hexToRgba(hex: string, alpha: number): string {
	const rgb = hexToRgb(hex);
	return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
}


interface ProjectProps {
	project: ILocalizedProject;
}

export const Project: React.FC<ProjectProps> = ({ project }) => {
	const router = useRouter();
	const { projectName } = router.query;
	const isInitiallyOpened = projectName?.[0] === project.id;
	const [isOpen, setIsOpen] = useState(isInitiallyOpened);
	const theme = useContext(ThemeContext);

	const toggleIsOpen = useCallback((event) => {
		event.preventDefault();
		setIsOpen(prev => {
			const next = !prev;

			if (next) {
				router.push(`/${project.id}`, undefined, { shallow: true });
			} else {
				router.push('/', undefined, { shallow: true });
			}

			return next;
		});
	}, [router]);

	const backgroundVariants = useMemo<Variants>(() => {
		return {
			initial: {
				backgroundColor: hexToRgba(theme.colors.background, 0),
			},
			open: {
				backgroundColor: hexToRgba(theme.colors.background, 1),
			}
		};
	}, [theme.colors.background]);

	return (
		<ProjectContainer>
			<ContentRoot isOpen={isOpen}>
				<ContentBackground layout variants={backgroundVariants} initial={isInitiallyOpened ? 'open' : 'initial'} animate={isOpen ? 'open' : 'initial'}>
					<ThumbnailTitleContainer layout>
						<ProjectThumbnail
							thumbnailUrl={project.thumbnailUrl}
							thumbnailAltText={project.thumbnailAltText}
							url={project.url}
							isOpen={isOpen}
							isInitiallyOpen={isInitiallyOpened}
						/>
						<Title layout>
							<TitleLink onClick={toggleIsOpen} href={`/${project.id}`}>
								{project.title}
							</TitleLink>
						</Title>
					</ThumbnailTitleContainer>
					<AnimatePresence>
						{isOpen && (
							<ProjectContent
								content={project.content}
								isInitiallyOpened={isInitiallyOpened}
							/>
						)}
					</AnimatePresence>
				</ContentBackground>
			</ContentRoot>
			{isOpen && (
				<ContentPlaceholder aria-hidden>
					<ContentBackground>
						<ThumbnailTitleContainer>
							<ProjectThumbnail
								thumbnailUrl={project.thumbnailUrl}
								thumbnailAltText={project.thumbnailAltText}
								url={project.url}
								isOpen={isOpen}
								isInitiallyOpen={isInitiallyOpened}
							/>
							<Title>
								<TitleLink>
									{project.title}
								</TitleLink>
							</Title>
						</ThumbnailTitleContainer>
					</ContentBackground>
				</ContentPlaceholder>
			)}
			<Description>
				{project.shortDescription}
			</Description>
		</ProjectContainer>
	);
};
