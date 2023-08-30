import { DataSheet, DataSheetRow } from './types';
import { columnNameToIndex, buildRow, getRange } from './sheetsUtil';
import { google } from 'googleapis';

export async function updateSheetData<T extends Record<string, string>>(
	sheet: DataSheet<T>,
	row: number,
	data: DataSheetRow<keyof T>
): Promise<void> {
	const sheetsClient = google.sheets({ version: 'v4' });

	const columns = Object.entries(sheet.columns).map(([keyName, columnName]) => ({
		keyName,
		index: columnNameToIndex(sheet, columnName),
	}));

	const rawRowData = buildRow(sheet, data, columns);

	await sheetsClient.spreadsheets.values.update({
		spreadsheetId: sheet.spreadsheetId,
		range: getRange(sheet, row, row),
		requestBody: {
			values: [rawRowData],
		},
		valueInputOption: 'USER_ENTERED',
	});
}
