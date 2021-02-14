import React from 'react';
import { useLocalization } from '../hooks';
import { Form, Input, TextArea, SubmitButton, ButtonContainer } from './ContactForm.styled';

export const ContactForm: React.FC = () => {
	const localization = useLocalization().hireMeSection;

	return (
		<Form>
			<Input
				placeholder={localization.namePlaceholder}
				aria-label={localization.namePlaceholder}
			/>
			<Input
				placeholder={localization.emailPlaceholder}
				aria-label={localization.emailPlaceholder}
			/>
			<TextArea
				placeholder={localization.descriptionPlaceholder}
				aria-label={localization.descriptionPlaceholder}
			/>
			<ButtonContainer>
				<SubmitButton>{localization.submitButtonText}</SubmitButton>
			</ButtonContainer>
		</Form>
	);
};
