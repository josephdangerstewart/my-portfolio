import { NextApiRequest, NextApiResponse } from 'next';
import { DataSheet } from '../../api/sheetManipulation/types';
import { validateRecaptcha } from '../../api/validateRecaptcha';
import { addSheetData } from '../../api/sheetManipulation';
import { configureGoogleAuth } from '../../api/configureGoogleAuth';

interface ContactSubmission extends Record<string, string> {
	name: string;
	email: string;
	message: string;
	timestamp: string;
}

interface ContactSubmissionRequest extends ContactSubmission {
	captchaToken: string;
}

const contactSheet: DataSheet<ContactSubmission> = {
	spreadsheetId: '1k2UoE-lmwTImhJYoyr2mZa4OVTY9pPCggJCP6svwadA',
	name: 'Submissions',
	columns: {
		name: 'A',
		email: 'B',
		message: 'C',
		timestamp: 'D',
	},
	dataStartsAtRow: 2,
};

export default async function handler(
	request: NextApiRequest,
	response: NextApiResponse
) {
	if (request.method !== 'POST') {
		return response.status(404).end();
	}

	const { captchaToken, ...submission } = request.body as ContactSubmissionRequest;

	const captchaResponse = await validateRecaptcha(captchaToken);
	if (!captchaResponse.success) {
		return response.status(403).end();
	}

	try {
		configureGoogleAuth();
		await addSheetData(contactSheet, [{ ...submission, timestamp: new Date().toISOString() }]);
	} catch {
		return response.status(500).end();
	}
	
	return response.status(200).end();
}
