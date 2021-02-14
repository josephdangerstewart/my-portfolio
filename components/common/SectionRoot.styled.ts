import styled from 'styled-components';

export enum SectionKind {
	Default = 0,
	Header = 1,
	Footer = 2,
}

interface SectionRootProps {
	kind?: SectionKind;
}

export const SectionRoot = styled.section<SectionRootProps>`
	padding: ${({ kind }) => kind === SectionKind.Header ? '0' : '48px'} 0 ${({ kind }) => kind === SectionKind.Footer ? '0' : '48px'};
`;
