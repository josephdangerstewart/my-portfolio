import styled from 'styled-components';
import { SectionRoot as DefaultSectionRoot } from '../common';

export const SectionRoot = styled(DefaultSectionRoot)`
	background-color: ${({ theme }) => theme.colors.primary};
`;

export const EmojiTextContainer = styled.div`
	max-width: 400px;
	padding: 0 24px;
	margin: 0 auto;
`;
