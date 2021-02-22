import styled, { createGlobalStyle } from 'styled-components';

export const PageBackground = styled.main<{ isProjectOpened: boolean }>`
	${({ isProjectOpened }) => isProjectOpened ? 'visibility: hidden;' : ''}
`;

export const GlobalStyle = createGlobalStyle<{ isProjectOpened: boolean }>`
	body, html {
		padding: 0;
		margin: 0;
		height: 100%;
		${({ isProjectOpened }) => isProjectOpened ? 'overflow: hidden;' : ''}
		overflow-x: hidden;
	}

	body {
		background-color: ${({ theme }) => theme.colors.background};
	}

	h1, h2, h3, h4, h5, h6 {
		color: ${({ theme }) => theme.colors.text.header};
	}

	h1 {
		font: ${({ theme }) => theme.fonts.header};
	}

	h2 {
		font: ${({ theme }) => theme.fonts.subheader};
	}

	p {
		font: ${({ theme }) => theme.fonts.body};
		color: ${({ theme }) => theme.colors.text.body};
	}
`;
