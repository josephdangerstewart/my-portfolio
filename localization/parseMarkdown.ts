import metadataParser from 'markdown-yaml-metadata-parser';
import { ILocalizedProject } from './localization';

export function parseProject(project: string): ILocalizedProject {
	const parsedContent = metadataParser(project);
	return {
		title: parsedContent.metadata?.title as string ?? null,
		shortDescription: parsedContent.metadata?.shortDescription ?? null,
		thumbnailUrl: parsedContent.metadata?.thumbnailUrl ?? '',
		thumbnailAltText: parsedContent.metadata?.thumbnailAltText ?? '',
		url: parsedContent.metadata?.url as string ?? null,
		content: parsedContent.content,
		id: parsedContent.metadata?.id as string ?? null,
	};
}
