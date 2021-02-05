import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './themes';
import { HeaderSection } from './header-section';
import { PageBackground, GlobalStyle } from './Portfolio.styled';
import { LocalizationProvider } from './hooks';
import { AboutMeSection } from './about-section';

export const Portfolio: React.FC = () => (
	<ThemeProvider theme={defaultTheme}>
		<LocalizationProvider locale="enUS">
			<PageBackground>
				<GlobalStyle />
				<HeaderSection />
				<AboutMeSection />
			</PageBackground>
		</LocalizationProvider>
	</ThemeProvider>
);
