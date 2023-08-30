import { google } from 'googleapis';
import { DataSheet, DataSheetRow } from './types';
import { getRange, columnNameToIndex } from './sheetsUtil';

export async function getSheetData<T extends Record<string, string>>(
	sheet: DataSheet<T>,
	startRow: number,
	endRow?: number
): Promise<DataSheetRow<keyof T>[]> {
	const sheetsClient = google.sheets({ version: 'v4' });

	const response = await sheetsClient.spreadsheets.values.get({
		spreadsheetId: sheet.spreadsheetId,
		range: getRange(sheet, startRow, endRow),
	});

	const values = response.data.values?.map(row => {
		return Object
			.entries(sheet.columns)
			.map(([keyName, columnName]) => {
				return ({
					keyName,
					value: row[columnNameToIndex(sheet, columnName)],
				})
			})
			.reduce<Record<string, string>>((obj, cur) => {
				obj[cur.keyName] = cur.value;
				return obj;
			}, {});
	}) ?? [];

	return values as DataSheetRow<keyof T>[];
}
