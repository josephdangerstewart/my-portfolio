import styled from 'styled-components';

export const ContentRoot = styled.div`
	margin-top: 52px;
	padding: 0 32px;

	img {
		display: block;
		width: 450px;
		height: 278.1px;
		margin: 52px auto;
		object-fit: cover;
		border-radius: 4px;
	}

	p {
		text-indent: 32px;
	}

	a {
		color: ${({ theme }) => theme.colors.text.body};
		transition: color .2s, background-color .2s, text-decoration .2s;
		
		&:hover {
			background-color: ${({ theme }) => theme.colors.text.body};
			color: ${({ theme }) => theme.colors.background};
		}
	}
`;
