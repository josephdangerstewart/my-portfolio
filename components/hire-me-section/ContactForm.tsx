import React, { useCallback, useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { useLocalization, useInputState, useRecaptcha } from '../hooks';
import { Form, Input, TextArea, SubmitButton, ButtonContainer, SuccessContainer, ContactFormContainer, SuccessTitle, SuccessMessage, ErrorMessage, ErrorMessageContainerOuter, DismissErrorButton, ErrorMessageContainerInner, GridCell } from './ContactForm.styled';
import { AnimatePresence } from 'framer-motion';

export function ContactForm() {
	const { getToken } = useRecaptcha('submit_contact', false);

	const localization = useLocalization().hireMeSection;
	const [showError, setShowError] = useState(false);
	const [name, setName, clearName] = useInputState();
	const [email, setEmail, clearEmail] = useInputState();
	const [message, setMessage, clearMessage] = useInputState();
	const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

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
					description: message,
					captchaToken,
				})
			});

			if (response.status >= 200 && response.status < 300) {
				setSubmissionStatus('success');
				clearName();
				clearEmail();
				clearMessage();
			} else {
				setSubmissionStatus('idle');
				setShowError(true);
			}
		} catch {
			setSubmissionStatus('idle');
			setShowError(true);
		}
	}, [name, email, message, showError]);

	const isFormValid = useMemo(() => Boolean(email && name), [email, name]);

	return (
		<ContactFormContainer>
			{submissionStatus === 'success' && (
				<GridCell>
					<SuccessContainer initial={{ opacity: 0, transform: 'translateY(-10px)' }} animate={{ opacity: 1 }}>
						<SuccessTitle>{localization.successMessage.title}</SuccessTitle>
						<SuccessMessage>{localization.successMessage.subtitle}</SuccessMessage>
					</SuccessContainer>
				</GridCell>
			)}
			<GridCell>
				<AnimatePresence>
					{showError && submissionStatus !== 'success' && (
						<ErrorMessageContainerOuter
							key="error-message"
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: 'auto', opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							transition={{ bounce: 0 }}
						>
							<ErrorMessageContainerInner>
								<ErrorMessage>{localization.errorMessage}</ErrorMessage>
								<DismissErrorButton
									onClick={() => setShowError(prev => !prev)}
									aria-label={localization.dismissError}
								>
									<FontAwesomeIcon icon={faTimesCircle} />
								</DismissErrorButton>
							</ErrorMessageContainerInner>
						</ErrorMessageContainerOuter>
					)}
					{submissionStatus !== 'success' && (
						<Form
							key="contact-form"
							exit={{ opacity: 0, height: 0 }}
							initial={{ opacity: 1, height: 'auto' }}
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
								value={message}
								onChange={setMessage}
							/>
							<ButtonContainer>
								<SubmitButton onClick={submitForm} disabled={submissionStatus === 'submitting' || !isFormValid}>
									{submissionStatus === 'submitting' ? localization.loadingButtonText : localization.submitButtonText}
								</SubmitButton>
							</ButtonContainer>
						</Form>
					)}
				</AnimatePresence>
			</GridCell>
		</ContactFormContainer>
	);
};
