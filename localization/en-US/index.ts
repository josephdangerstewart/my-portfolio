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
		closeModal: 'Close modal',
		readMore: 'Read more',
	},
	experienceSection: {
		title: 'Experience',
		experience: [
			{
				place: 'Faithlife',
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
				durationString: '2016 - 2019',
				position: 'Bachelors of Science',
			}
		]
	},
	skillsSection: {
		title: 'Skills',
		skillTemplate: '%YEARS% years',
		skills: [
			{
				skill: 'C# - Asp.NET',
				years: 5,
			},
			{
				skill: 'Javascript - ReactJS',
				years: 7,
			},
			{
				skill: 'SQL',
				years: 7,
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
		loadingButtonText: 'Submitting...',
		tagline: {
			template: 'Bring your %ITEM% to life',
			items: [
				'project',
				'portfolio',
				'idea',
				'website',
			]
		},
		successMessage: {
			title: 'Success!',
			subtitle: 'Thanks for reaching out!',
		},
		errorMessage: 'Something went wrong! Please try again later.',
		dismissError: 'Dismiss error',
	}
};

export default enUS;
