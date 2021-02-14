import metadataParser from 'markdown-yaml-metadata-parser';
import { ILocalizedProject } from './localization';

export function parseProject(project: string): ILocalizedProject {
	const parsedContent = metadataParser(project);
	return {
		title: parsedContent.metadata?.title as string ?? null,
		content: parsedContent.content ?? null,
		thumbnailUrl: '',
		url: parsedContent.metadata?.url as string ?? null,
	};
}
