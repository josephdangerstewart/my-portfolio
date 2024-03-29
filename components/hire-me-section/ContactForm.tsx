import React, { useState } from "react";
import { useLocalization, useInputState } from "../hooks";
import {
	Form,
	Input,
	TextArea,
	SubmitButton,
	ButtonContainer,
} from "./ContactForm.styled";

export function ContactForm() {
	const localization = useLocalization().hireMeSection;
	const [name, setName] = useInputState();
	const [message, setMessage] = useInputState();
	const [submissionStatus] = useState<"idle" | "submitting" | "success">(
		"idle"
	);

	return (
		<Form
			key="contact-form"
			exit={{ opacity: 0, height: 0 }}
			initial={{ opacity: 1, height: "auto" }}
		>
			<Input
				placeholder={localization.namePlaceholder}
				aria-label={localization.namePlaceholder}
				value={name}
				autoComplete="name"
				onChange={setName}
			/>
			<TextArea
				placeholder={localization.descriptionPlaceholder}
				aria-label={localization.descriptionPlaceholder}
				value={message}
				onChange={setMessage}
			/>
			<ButtonContainer>
				<SubmitButton href={`mailto:josephlikescode@gmail.com?subject=${encodeURIComponent(localization.emailSubject.replace('%NAME%', name))}&body=${encodeURIComponent(message)}`}>
					{submissionStatus === "submitting"
						? localization.loadingButtonText
						: localization.submitButtonText}
				</SubmitButton>
			</ButtonContainer>
		</Form>
	);
}
