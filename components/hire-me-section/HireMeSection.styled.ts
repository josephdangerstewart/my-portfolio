import styled from 'styled-components';

export const SectionBackground = styled.div`
	background-color: ${({ theme }) => theme.colors.accent};
	padding: 32px 0 42px;
	border-radius: 40% 40% 0 0;
`;

export const Subtitle = styled.h2`
	font-size: 32px;
	text-align: center;
	margin-top: 0;
`;
