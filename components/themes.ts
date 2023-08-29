import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
	colors: {
		primary: '#778585',
		accent: '#C50D07',
		background: '#1F1F1F',
		input: {
			background: '#CCCED1',
			backgroundActive: '#CCCED1',
		},
		button: {
			background: '#CCCED1',
			backgroundActive: '#B4B4BB',
			backgroundHover: '#DFDFE2',
			disabled: '#BFBFC5',
		},
		text: {
			header: '#EAEAEC',
			body: '#FFFFFF',
			linkHover: '#EBEBEB',
			button: '#1F1F1F',
			buttonDisabled: '#969595',
			input: '#1F1F1F',
			inputPlaceholder: '#778585',
			computer: '#00F54F',
		}
	},
	fonts: {
		header: '600 72px/70px \'Saira Condensed\'',
		subheader: '600 60px/60px \'Saira Condensed\'',
		body: '24px \'Saira Condensed\'',
		computer: '600 20px \'Source Code Pro\'',
	},
	mediaQueries: {
		desktopOnly: '@media (min-width: 840px)',
		touchDeviceOnly: '@media (hover: none)',
		mouseDeviceOnly: '@media (hover: hover)',
	}
};
