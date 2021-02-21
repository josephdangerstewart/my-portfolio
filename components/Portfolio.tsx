import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './themes';
import { LocalizationProvider } from './hooks';
import type { ILocalizedResources } from '../localization';
import { PageBackground, GlobalStyle } from './Portfolio.styled';

import { HeaderSection } from './header-section';
import { AboutMeSection } from './about-section';
import { ProjectsSection } from './projects-section';
import { ExperienceSection } from './experience-section';
import { SkillsSection } from './skills-section';
import { HireMeSection } from './hire-me-section';
import { useRouter } from 'next/router';

interface PortfolioProps {
	locale: ILocalizedResources;
}

export const Portfolio: React.FC<PortfolioProps> = ({ locale }) => {
	const router = useRouter();
	const isProjectOpened = router.query.projectName?.length > 0;
	return (
		<ThemeProvider theme={defaultTheme}>
			<LocalizationProvider locale={locale}>
				<PageBackground>
					<GlobalStyle isProjectOpened={isProjectOpened} />
					<HeaderSection />
					<AboutMeSection />
					<ProjectsSection />
					<ExperienceSection />
					<SkillsSection />
					<HireMeSection />
				</PageBackground>
			</LocalizationProvider>
		</ThemeProvider>
	);
};
