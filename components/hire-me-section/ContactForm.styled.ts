import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const ContactFormContainer = styled.div`
	position: relative;
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
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 4px;
	padding: 0 24px;
`;

export const Form = styled(motion.form)<{ inactive?: boolean }>`
	display: flex;
	flex-direction: column;
	max-width: 400px;
	margin: 0 auto;
	padding: 0 24px;
	${({ inactive }) => inactive && 'pointer-events: none;'}
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
