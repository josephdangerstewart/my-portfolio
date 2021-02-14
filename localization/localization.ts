export interface ILocalizedProject {
	title: string;
	thumbnailUrl: string;
	url: string;
	content: string;
}

export interface ILocalizedSkill {
	skill: string;
	proficiencyLevel: number;
}

export interface ILocalizedExperience {
	place: string;
	durationString: string;
	position: string;
}

export interface ILocalizedResources {
	headerSection: {
		computerMessage: string;
	},
	aboutMeSection: {
		title: string;
		bio: string;
	},
	projectsSection: {
		title: string;
		projects: ILocalizedProject[];
	},
	experienceSection: {
		title: string;
		experience: ILocalizedExperience[];
	},
	skillsSection: {
		title: string;
		skills: ILocalizedSkill[];
	}
}
