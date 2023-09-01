import { Saira_Condensed, Source_Code_Pro } from 'next/font/google';

const saira = Saira_Condensed({
	weight: ['400', '600'],
	variable: '--font-saira',
	subsets: ['latin'],
});

const sourceCode = Source_Code_Pro({
	weight: ['400', '600'],
	variable: '--font-source-code',
	subsets: ['latin'],
});

function MyApp({ Component, pageProps }) {
	return (
		<div className={`${saira.variable} ${sourceCode.variable}`}>
			<Component {...pageProps} />
		</div>
	);
};

export default MyApp;
