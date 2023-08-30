import { google } from 'googleapis';

interface CaptchaResponse {
	success: boolean;
}

export async function validateRecaptcha(token): Promise<CaptchaResponse> {
	const result = await google.recaptchaenterprise("v1").projects.assessments.create({
		requestBody: {
			event: {
				siteKey: '6Lfcd-UnAAAAAPndSKXBeWYZoFLLIvcfNs06lO88',
				token,
			},
		},
		parent: 'projects/personal-projects-396500'
	});

	return {
		success: result?.data?.tokenProperties?.valid,
	};
}
