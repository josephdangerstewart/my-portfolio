import { ILocalizedResources } from '../localization';
import bio from './content/bio.txt';
import { parseProject } from '../parseMarkdown';

// Waiting on campaign buddy util I actually start hosting it again
// import campaignBuddy from './content/projects/campaignBuddy.md';
import weddingWebsite from './content/projects/weddingWebsite.md';
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
			// parseProject(campaignBuddy),
			parseProject(weddingWebsite),
			parseProject(landOfEmunah),
			parseProject(hannahsPortfolio),
		],
		openExternalLink: 'Take a look!',
		openExternalLinkAria: 'Open project in new tab',
	},
	experienceSection: {
		title: 'Experience',
		experience: [
			{
				place: 'FaithLife',
				durationString: '2019 - present',
				position: 'Web Developer',
			},
			{
				place: 'National School Project',
				durationString: '2017 - 2019',
				position: 'IT Intern',
			},
			{
				place: 'Biola University',
				durationString: '2016 - 2020',
				position: 'Bachelors of Science',
			}
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
	},
	hireMeSection: {
		title: 'Hire Me',
		subtitle: 'Or just say hi!',
		namePlaceholder: 'Name',
		emailPlaceholder: 'Email',
		descriptionPlaceholder: 'Your project idea here...',
		submitButtonText: 'Submit',
		tagline: {
			template: 'Bring your %ITEM% to life',
			items: [
				'project',
				'portfolio',
				'idea',
				'website',
			]
		}
	}
};

export default enUS;
