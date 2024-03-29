import { ILocalizedResources } from '../localization';
import bio from './content/bio.txt';
import { parseProject } from '../parseMarkdown';

// Waiting on campaign buddy util I actually start hosting it again
// import campaignBuddy from './content/projects/campaignBuddy.md';
import weddingWebsite from './content/projects/weddingWebsite.md';
import landOfEmunah from './content/projects/landOfEmunah.md';
import hannahsPortfolio from './content/projects/hannahsPortfolio.md';

const skillCategory = {
	language: 'Languages',
	framework: 'Frameworks and libraries',
	tool: 'Tools',
};

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
			// Languages
			{
				skill: 'Javascript',
				category: skillCategory.language,
				icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/100px-JavaScript-logo.png',
			},
			{
				skill: 'Typescript',
				category: skillCategory.language,
				icon: '',
			},
			{
				skill: 'HTML',
				category: skillCategory.language,
				icon: '',
				also: 'PUG/Handlebars/Liquid'
			},
			{
				skill: 'CSS',
				category: skillCategory.language,
				icon: 'Less/Sass',
			},
			{
				skill: 'C#',
				category: skillCategory.language,
				icon: '',
			},
			{
				skill: 'SQL',
				category: skillCategory.language,
				icon: '',
			},
			{
				skill: 'Lua',
				category: skillCategory.language,
				icon: '',
			},
			{
				skill: 'Objective-C',
				category: skillCategory.language,
				icon: '',
			},
			{
				skill: 'Java',
				category: skillCategory.language,
				icon: '',
			},
			{
				skill: 'C++',
				category: skillCategory.language,
				icon: '',
			},

			// Frameworks
			{
				skill: 'React',
				category: skillCategory.framework,
				icon: '',
			},
			{
				skill: 'Redux',
				category: skillCategory.framework,
				icon: '',
			},
			{
				skill: 'react-query',
				category: skillCategory.framework,
				icon: '',
			},
			{
				skill: 'testing-library',
				category: skillCategory.framework,
				icon: '',
			},
			{
				skill: 'styled-components',
				category: skillCategory.framework,
				icon: '',
			},
			{
				skill: 'jest',
				category: skillCategory.framework,
				icon: '',
			},
			{
				skill: 'Playwright',
				category: skillCategory.framework,
				icon: '',
				also: 'Selenium',
			},
			{
				skill: 'NextJS',
				category: skillCategory.framework,
				icon: '',
			},
			{
				skill: 'ASP.NET',
				category: skillCategory.framework,
				icon: '',
			},
			{
				skill: 'NUnit',
				category: skillCategory.framework,
				icon: '',
			},
			{
				skill: 'NestJS',
				category: skillCategory.framework,
				icon: '',
			},

			// Tools
			{
				skill: 'Visual Studio',
				category: skillCategory.tool,
				icon: '',
			},
			{
				skill: 'Visual Studio Code',
				category: skillCategory.tool,
				icon: '',
			},
			{
				skill: 'XCode',
				category: skillCategory.tool,
				icon: '',
			},
			{
				skill: 'AWS',
				category: skillCategory.tool,
				icon: '',
				also: 'S3/Lambda/CloudFront'
			},
			{
				skill: 'GCP',
				category: skillCategory.tool,
				icon: '',
				also: 'Sheets API/reCAPTCHA',
			},
			{
				skill: 'Azure',
				category: skillCategory.tool,
				icon: '',
				also: 'Functions',
			},
			{
				skill: 'DigitalOcean',
				category: skillCategory.tool,
				icon: '',
			},
			{
				skill: 'Terraform',
				category: skillCategory.tool,
				icon: '',
			},
			{
				skill: 'Ansible',
				category: skillCategory.tool,
				icon: '',
			},
			{
				skill: 'Git',
				category: skillCategory.tool,
				icon: '',
			},
			{
				skill: 'Webpack',
				category: skillCategory.tool,
				icon: '',
			},
			{
				skill: 'Crowdin',
				category: skillCategory.tool,
				icon: '',
			},
			{
				skill: 'Docker',
				category: skillCategory.tool,
				icon: '',
			}
		]
	},
	hireMeSection: {
		title: 'Contact Me',
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
		emailSubject: 'Hello from %NAME%!',
	}
};

export default enUS;
