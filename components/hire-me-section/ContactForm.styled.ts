import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

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

export const SubmitButton = styled.a`
	color: ${({ theme }) => theme.colors.text.button};
	border: none;
	font: ${({ theme }) => theme.fonts.body};
	font-size: 20px;
	padding: 4px 16px;
	cursor: pointer;
	background-color: ${({ theme }) => theme.colors.button.background};
	border-radius: 4px;
	text-decoration: none;

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
