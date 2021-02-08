import metadataParser from 'markdown-yaml-metadata-parser';
import { ILocalizedProject } from './localization';

export function parseProject(project: string): ILocalizedProject {
	const parsedContent = metadataParser(project);
	console.log(parsedContent);
	return {
		title: parsedContent.metadata?.title as string ?? null,
		shortDescription: '',
		thumbnailUrl: '',
	};
}