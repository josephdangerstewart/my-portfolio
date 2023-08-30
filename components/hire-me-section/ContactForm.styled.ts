import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const ErrorMessageContainerOuter = styled(motion.div)`
	overflow: hidden;
	max-width: 400px;
	margin: 0 auto;
	padding: 0 24px;
`;

export const ErrorMessageContainerInner = styled.div`
	margin-bottom: 24px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const ErrorMessage = styled.p`
	margin: 0;
	font-size: 20px;
`;

export const DismissErrorButton = styled(motion.button)`
	border: none;
	background: none;
	cursor: pointer;
	font-size: 24px;
	z-index: 4;
	color: ${({ theme }) => theme.colors.text.body};
	visibility: visible;
	height: fit-content;

	&:hover {
		color: ${({ theme }) => theme.colors.text.linkHover};
	}
`;

export const ContactFormContainer = styled.div`
	display: grid;
`;

export const GridCell = styled.div`
	grid-area: 1 / 1 / 2 / 2;
`;

export const SuccessTitle = styled.h2`
	font-size: 48px;
	text-align: center;
	margin: 0;
`;

export const SuccessMessage = styled.p`
	font-size: 32px;
	text-align: center;
	margin: 0;
`;

export const SuccessContainer = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 4px;
	padding: 0 24px;
`;

export const Form = styled(motion.form)`
	display: flex;
	overflow: hidden;
	flex-direction: column;
	max-width: 400px;
	margin: 0 auto;
	padding: 0 24px;
`;

const inputCommon = css`
	font: ${({ theme }) => theme.fonts.body};
	color: ${({ theme }) => theme.colors.text.input};
	font-size: 20px;
	outline: none;
	padding: 8px;
	margin-bottom: 24px;
	background-color: ${({ theme }) => theme.colors.input.background};
	border: none;
	border-radius: 4px;

	&::placeholder {
		color: ${({ theme }) => theme.colors.text.inputPlaceholder};
	}
`;

export const Input = styled.input`
	${inputCommon}
`;

export const TextArea = styled.textarea`
	${inputCommon}

	resize: vertical;
	min-height: 100px;
`;

export const SubmitButton = styled.button`
	color: ${({ theme }) => theme.colors.text.button};
	border: none;
	font: ${({ theme }) => theme.fonts.body};
	font-size: 20px;
	padding: 4px 16px;
	cursor: pointer;
	background-color: ${({ theme }) => theme.colors.button.background};
	border-radius: 4px;

	&:hover {
		background-color: ${({ theme }) => theme.colors.button.backgroundHover};
	}

	&:active {
		background: ${({ theme }) => theme.colors.button.backgroundActive};
	}

	&:disabled {
		background-color: ${({ theme }) => theme.colors.button.disabled};
		color: ${({ theme }) => theme.colors.text.buttonDisabled};
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: flex-end;
`;
