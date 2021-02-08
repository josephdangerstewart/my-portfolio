import { ILocalizedResources } from '../localization';
import bio from './content/bio.txt';

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
	}
};

export default enUS;
