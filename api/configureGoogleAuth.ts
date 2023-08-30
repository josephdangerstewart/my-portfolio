import fs from 'fs';
import path from 'path';
import { google } from 'googleapis';

export function configureGoogleAuth() {
	const credentialsPath = path.join(path.resolve('./'), 'googleCreds.json');

	if (!fs.existsSync(credentialsPath)) {
		if (!process.env.GOOGLE_KEY) {
			throw new Error('Missing google credentials');
		}

		fs.writeFileSync(credentialsPath, process.env.GOOGLE_KEY, { encoding: 'utf-8' });
	}

	const auth = new google.auth.GoogleAuth({
		keyFile: credentialsPath,
		scopes: [
			'https://www.googleapis.com/auth/spreadsheets',
			'https://www.googleapis.com/auth/cloud-platform',
		],
	});

	google.options({ auth });
}
