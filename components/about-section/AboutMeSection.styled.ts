import styled from 'styled-components';

export const SectionRoot = styled.section`
	background-color: ${({ theme }) => theme.colors.primary};
	padding: 16px 0;
`;

export const EmojiTextContainer = styled.div`
	max-width: 400px;
	padding: 0 24px;
	margin: 0 auto;
`;
