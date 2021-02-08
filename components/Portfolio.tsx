import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './themes';
import { HeaderSection } from './header-section';
import { PageBackground, GlobalStyle } from './Portfolio.styled';
import { LocalizationProvider } from './hooks';
import { AboutMeSection } from './about-section';
import { ProjectsSection } from './projects-section';
import type { ILocalizedResources } from '../localization';

interface PortfolioProps {
	locale: ILocalizedResources;
}

export const Portfolio: React.FC<PortfolioProps> = ({ locale }) => (
	<ThemeProvider theme={defaultTheme}>
		<LocalizationProvider locale={locale}>
			<PageBackground>
				<GlobalStyle />
				<HeaderSection />
				<AboutMeSection />
				<ProjectsSection />
			</PageBackground>
		</LocalizationProvider>
	</ThemeProvider>
);
