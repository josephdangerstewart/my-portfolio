import styled from 'styled-components';

export const SectionBackground = styled.div`
	background-color: ${({ theme }) => theme.colors.accent};
	padding: 32px 0 42px;
	border-radius: 50px 50px 0 0;
`;

export const Subtitle = styled.h2`
	font-size: 32px;
	text-align: center;
	margin-top: 0;
`;

export const TaglineContainer = styled.h3`
	font: ${({ theme }) => theme.fonts.subheader};
	font-size: 32px;
	line-height: 36px;
	text-align: center;
	margin: 24px 0 48px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	& > * {
		margin-bottom: 16px;

		&:last-child {
			margin-bottom: 0;
		}
	}

	${({ theme }) => theme.mediaQueries.desktopOnly} {
		flex-direction: row;

		& > * {
			margin-bottom: 0;
		}
	}
`;
