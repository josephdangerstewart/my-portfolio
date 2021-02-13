import { ILocalizedResources } from '../localization';
import bio from './content/bio.txt';
import { parseProject } from '../parseMarkdown';

import campaignBuddy from './content/projects/campaignBuddy.md';
import landOfEmunah from './content/projects/landOfEmunah.md';
import hannahsPortfolio from './content/projects/hannahsPortfolio.md';

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
			parseProject(hannahsPortfolio),
		]
	},
	skillsSection: {
		title: 'Skills',
		skills: [
			{
				skill: 'C# - Asp.NET',
				proficiencyLevel: 3,
			},
			{
				skill: 'Javascript - ReactJS',
				proficiencyLevel: 5,
			},
			{
				skill: 'SQL',
				proficiencyLevel: 4,
			}
		]
	}
};

export default enUS;
