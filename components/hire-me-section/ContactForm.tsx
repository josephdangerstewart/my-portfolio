import React, { useCallback, useMemo, useState } from 'react';
import { useLocalization, useInputState, useRecaptcha } from '../hooks';
import { Form, Input, TextArea, SubmitButton, ButtonContainer } from './ContactForm.styled';

export const ContactForm: React.FC = () => {
	const { getToken } = useRecaptcha('submit_contact', false);

	const localization = useLocalization().hireMeSection;
	const [name, setName, clearName] = useInputState();
	const [email, setEmail, clearEmail] = useInputState();
	const [description, setDescription, clearDescription] = useInputState();
	const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'error' | 'success'>('idle');

	const submitForm = useCallback(async () => {
		setSubmissionStatus('submitting');

		try {
			const captchaToken = await getToken();
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify({
					name,
					email,
					description,
					captchaToken,
				})
			});

			if (response.status >= 200 && response.status < 300) {
				setSubmissionStatus('success');
				clearName();
				clearEmail();
				clearDescription();
			} else {
				setSubmissionStatus('error');
			}
		} catch {
			setSubmissionStatus('error');
		}
	}, [name, email, description]);

	const isFormValid = useMemo(() => Boolean(email && name), [email, name]);

	return (
		<Form>
			<Input
				placeholder={localization.namePlaceholder}
				aria-label={localization.namePlaceholder}
				value={name}
				autoComplete="name"
				onChange={setName}
			/>
			<Input
				placeholder={localization.emailPlaceholder}
				aria-label={localization.emailPlaceholder}
				value={email}
				autoComplete="email"
				onChange={setEmail}
			/>
			<TextArea
				placeholder={localization.descriptionPlaceholder}
				aria-label={localization.descriptionPlaceholder}
				value={description}
				onChange={setDescription}
			/>
			<ButtonContainer>
				<SubmitButton onClick={submitForm} disabled={submissionStatus === 'submitting' || !isFormValid}>
					{submissionStatus === 'submitting' ? localization.loadingButtonText : localization.submitButtonText}
				</SubmitButton>
			</ButtonContainer>
		</Form>
	);
};
