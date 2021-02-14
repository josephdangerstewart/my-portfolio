import styled, { css } from 'styled-components';

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	max-width: 400px;
	margin: 0 auto;
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
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: flex-end;
`;
