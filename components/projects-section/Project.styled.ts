import styled from 'styled-components';

export const Thumbnail = styled.div`
	background-color: ${({ theme }) => theme.colors.primary};
	border-radius: 4px;
	height: 225.5px;
	max-width: 365px;
	margin: 0 auto;
`;

export const Title = styled.h2`
	margin: 32px 0;
	text-align: center;
`;

export const Description = styled.p`
	max-width: 300px;
	margin: 0 auto;
	padding: 0 16px;
`;
