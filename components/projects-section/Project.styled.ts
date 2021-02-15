import styled from 'styled-components';

interface ThumbnailProps {
	src: string;
}

export const Thumbnail = styled.img<ThumbnailProps>`
	display: block;
	object-fit: cover;
	background-color: ${({ theme }) => theme.colors.primary};
	border-radius: 4px;
	height: 225.5px;
	max-width: 365px;
	margin: 0 auto;
`;

export const Title = styled.h2`
	margin: 32px 0;
	text-align: center;
	word-break: break-word;
`;

export const TitleLink = styled.a`
	color: ${({ theme }) => theme.colors.text.header};
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;

export const Description = styled.p`
	max-width: 300px;
	margin: 0 auto;
	padding: 0 16px;
`;

export const ProjectContainer = styled.div`
	margin: 40px 0;

	&:first-child {
		margin-top: 0;
	}

	&:last-child {
		margin-bottom: 0;
	}
`;
