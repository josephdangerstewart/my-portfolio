import styled from 'styled-components';

export const SectionRoot = styled.div`
	padding-bottom: 32px;
`;

export const Title = styled.h1`
	margin: 0;
`;

export const TitleContainer = styled.div`
	background-color: ${({ theme }) => theme.colors.accent};
	text-align: center;
	padding: 36px 0 64px;
	border-radius: 0 0 40% 40%;
	text-transform: uppercase;
	margin-bottom: 64px;
`;
