export interface ITheme {
	colors: {
		primary: string;
		accent: string;
		background: string;
		text: {
			header: string;
			body: string;
			button: string;
			input: string;
			inputPlaceholder: string;
		}
	},
	fonts: {
		header: string;
		body: string;
		computer: string;
	}
}

export const defaultTheme: ITheme = {
	colors: {
		primary: '#778585',
		accent: '#F72D26',
		background: '#1F1F1F',
		text: {
			header: '#CCCED1',
			body: '#FFFFFF',
			button: '#1F1F1F',
			input: '#1F1F1F',
			inputPlaceholder: '#778585',
		}
	},
	fonts: {
		header: '',
		body: '',
		computer: '',
	}
}
