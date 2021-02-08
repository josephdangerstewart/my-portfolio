import metadataParser from 'markdown-yaml-metadata-parser';
import { ILocalizedProject } from './localization';

export function parseProject(project: string): ILocalizedProject {
	const parsedContent = metadataParser(project);
	return {
		title: parsedContent.title as string,
		shortDescription: '',
		thumbnailUrl: '',
	};
}
