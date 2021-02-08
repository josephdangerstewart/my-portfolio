import { ILocalizedResources } from '../localization';
import bio from './content/bio.txt';
import { parseProject } from '../parseMarkdown';

import campaignBuddy from './content/projects/campaignBuddy.md';
import landOfEmunah from './content/projects/landOfEmunah.md';

const enUS: ILocalizedResources = {
	headerSection: {
		computerMessage: 'Hello world!',
	},
	aboutMeSection: {
		title: 'About Me',
		bio,
	},
	projectsSection: {
		title: 'Projects',
		projects: [
			parseProject(campaignBuddy),
			parseProject(landOfEmunah),
		]
	}
};

export default enUS;
