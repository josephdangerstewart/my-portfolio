// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			primary: string;
			accent: string;
			background: string;
			input: {
				background: string;
				backgroundActive: string;
			}
			button: {
				background: string;
				backgroundActive: string;
				backgroundHover: string;
				disabled: string;
			}
			text: {
				header: string;
				body: string;
				linkHover: string;
				button: string;
				buttonDisabled: string;
				input: string;
				inputPlaceholder: string;
				computer: string;
			}
		},
		fonts: {
			header: string;
			subheader: string;
			subsubheader: string;
			body: string;
			computer: string;
		},
		mediaQueries: {
			desktopOnly: string;
			touchDeviceOnly: string;
			mouseDeviceOnly: string;
		}
	}
}
