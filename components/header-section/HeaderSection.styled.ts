import styled from 'styled-components';

export const SectionRoot = styled.section`
	padding-bottom: 32px;
`;

export const Title = styled.h1`
	margin: 0;
`;

export const TitleContainer = styled.div`
	background-color: ${({ theme }) => theme.colors.accent};
	text-align: center;
	padding: 36px 0 64px;
	border-radius: 0 0 50px 50px;
	text-transform: uppercase;
	margin-bottom: 64px;
`;
