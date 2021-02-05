import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './themes';
import { HeaderSection } from './header-section';
import { PageBackground, GlobalStyle } from './Portfolio.styled';

export const Portfolio: React.FC = () => (
	<ThemeProvider theme={defaultTheme}>
		<PageBackground>
			<GlobalStyle />
			<HeaderSection />
		</PageBackground>
	</ThemeProvider>
);
