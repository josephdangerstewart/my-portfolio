export interface ILocalizedProject {
	title: string;
	thumbnailUrl: string;
	thumbnailAltText: string;
	url: string;
	content: string;
	shortDescription: string;
	id: string;
}

export interface ILocalizedSkill {
	skill: string;
	icon: string;
	category: string;
	also?: string;
}

export interface ILocalizedExperience {
	place: string;
	durationString: string;
	position: string;
}

export interface ILocalizedResources {
	headerSection: {
		computerMessage: string;
	}
	aboutMeSection: {
		title: string;
		bio: string;
	}
	projectsSection: {
		title: string;
		projects: ILocalizedProject[];
		openExternalLink: string;
		openExternalLinkAria: string;
		closeModal: string;
		readMore: string;
	}
	experienceSection: {
		title: string;
		experience: ILocalizedExperience[];
	}
	skillsSection: {
		title: string;
		skillTemplate: string;
		skills: ILocalizedSkill[];
	}
	hireMeSection: {
		title: string;
		subtitle: string;
		namePlaceholder: string;
		emailPlaceholder: string;
		descriptionPlaceholder: string;
		submitButtonText: string;
		loadingButtonText: string;
		successMessage: {
			title: string;
			subtitle: string;
		}
		errorMessage: string;
		dismissError: string;
		tagline: {
			template: string;
			items: string[];
		}
	}
}
