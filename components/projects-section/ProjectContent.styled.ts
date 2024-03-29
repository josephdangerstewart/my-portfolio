import styled from 'styled-components';

export const ContentRoot = styled.div`
	margin-top: 52px;
	padding: 0 32px;

	p, a, li {
		font-size: 28px;
	}

	img {
		display: block;
		width: 450px;
		height: 278.1px;
		margin: 52px auto;
		object-fit: cover;
		border-radius: 4px;
		max-width: 100%;
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

	h3 {
		font-size: 38px;
	}

	ul {
		list-style: none;
		padding: 0 0 0 80px;
	}

	li:before {
		content: "-";
		margin-right: 8px;
		color: ${({ theme }) => theme.colors.text.body};
		font-weight: bold;
		display: inline-block;
	}
`;
