import { Portfolio } from '../components/Portfolio';
import type { ILocalizedResources } from '../localization';
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';

interface HomeProps {
	locale: ILocalizedResources;
}

const Home: React.FC<HomeProps> = ({ locale }) => {
	return (
		<Portfolio locale={locale} />
	);
};

export default Home;

export async function getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<HomeProps>> {
	const { locale } = context;

	let localizedResources;
	
	try {
		localizedResources = (await import(`../localization/${locale}`)).default;
	} catch {
		return { notFound: true };
	}

	return {
		props: {
			locale: localizedResources,
		},
	};
}
