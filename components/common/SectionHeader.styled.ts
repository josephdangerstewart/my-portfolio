import styled from 'styled-components';

interface SectionHeaderProps {
	marginBottom?: number;
}

export const SectionHeader = styled.h1<SectionHeaderProps>`
	margin: 0 0 ${({ marginBottom }) => `${marginBottom ?? 48}px`};
	text-align: center;
	text-transform: uppercase;
`;
