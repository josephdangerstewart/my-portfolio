import styled from 'styled-components';

export const ComputerContainer = styled.div`
	width: 90%;
	max-width: 500px;
	margin: 0 auto;
	position: relative;
`;

export const ComputerImage = styled.img`
	width: 100%;
	height: auto;
`;

export const TextContainer = styled.div`
	position: absolute;
	top: 7%;
	left: 16%;
`;

export const Text = styled.p`
	font: ${({ theme }) => theme.fonts.computer};
	color: ${({ theme }) => theme.colors.text.computer};
	margin: 0;
`;
