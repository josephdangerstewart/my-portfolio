import styled from 'styled-components';

export const Thumbnail = styled.div`
	background-color: ${({ theme }) => theme.colors.primary};
	border-radius: 4px;
	height: 225.5px;
	max-width: 365px;
`;

export const Title = styled.h2`
	margin: 16px 0;
	text-align: center;
`;
