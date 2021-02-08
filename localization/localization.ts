export interface ILocalizedProject {
	title: string;
	thumbnailUrl: string;
	content: string;
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
}
