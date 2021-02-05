import styled, { createGlobalStyle } from 'styled-components';

export const PageBackground = styled.main`
`;

export const GlobalStyle = createGlobalStyle`
	body, html {
		padding: 0;
		margin: 0;
		height: 100%;
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

	p {
		font: ${({ theme }) => theme.fonts.body};
		color: ${({ theme }) => theme.colors.text.body};
	}
`;
