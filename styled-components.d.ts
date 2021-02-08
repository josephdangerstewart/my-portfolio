// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
	export interface DefaultTheme {
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
				computer: string;
			}
		},
		fonts: {
			header: string;
			subheader: string;
			body: string;
			computer: string;
		},
	}
}
