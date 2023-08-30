import React, { useCallback, useMemo, useState } from 'react';
import { useLocalization, useInputState, useRecaptcha } from '../hooks';
import { Form, Input, TextArea, SubmitButton, ButtonContainer, SuccessContainer, ContactFormContainer, SuccessTitle, SuccessMessage } from './ContactForm.styled';

export function ContactForm() {
	const { getToken } = useRecaptcha('submit_contact', false);

	const localization = useLocalization().hireMeSection;
	const [name, setName, clearName] = useInputState();
	const [email, setEmail, clearEmail] = useInputState();
	const [description, setDescription, clearDescription] = useInputState();
	const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'error' | 'success'>('idle');

	const submitForm = useCallback(async (event: React.MouseEvent) => {
		event.preventDefault();
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
		<ContactFormContainer>
			{submissionStatus === 'success' && (
				<SuccessContainer initial={{ opacity: 0, transform: 'translateY(-10px)' }} animate={{ opacity: 1 }}>
					<SuccessTitle>{localization.successMessage.title}</SuccessTitle>
					<SuccessMessage>{localization.successMessage.subtitle}</SuccessMessage>
				</SuccessContainer>
			)}
			<Form
				key="contact-form"
				exit={{ opacity: 0 }}
				animate={{ opacity: submissionStatus === 'success' ? 0 : 1 }}
				inactive={submissionStatus === 'success'}
				initial={{ opacity: 1 }}
			>
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
		</ContactFormContainer>
	);
};
