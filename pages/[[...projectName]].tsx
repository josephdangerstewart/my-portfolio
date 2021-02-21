import { Portfolio } from '../components/Portfolio';
import type { ILocalizedResources } from '../localization';
import { GetStaticPropsContext, GetStaticPropsResult, GetStaticPathsContext, GetStaticPathsResult } from 'next';

interface HomeProps {
	locale: ILocalizedResources;
}

const Home: React.FC<HomeProps> = ({ locale }) => {
	return (
		<Portfolio locale={locale} />
	);
};

export default Home;

async function getLocale(locale: string): Promise<ILocalizedResources> {
	try {
		return (await import(`../localization/${locale}`)).default as ILocalizedResources;
	} catch {
		return null;
	}
}

export async function getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<HomeProps>> {
	const { locale } = context;

	const localizedResources = await getLocale(locale);
	if (!localizedResources) {
		return { notFound: true };
	}

	return {
		props: {
			locale: localizedResources,
		},
	};
}

export async function getStaticPaths(context: GetStaticPathsContext): Promise<GetStaticPathsResult> {
	const { locales } = context;

	const paths = [];
	for (const locale of locales) {
		const resources = await getLocale(locale);
		const projects = resources.projectsSection.projects.map(x => x.id);

		paths.push(...projects.map(x => ({
			params: { projectName: [x] },
			locale,
		})));

		paths.push({
			params: { projectName: [] },
			locale,
		});
	}
	
	return {
		paths,
		fallback: false,
	};
}
