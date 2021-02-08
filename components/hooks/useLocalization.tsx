import { createContext, useContext } from 'react';
import type { ILocalizedResources } from '../../localization';

const Context = createContext<ILocalizedResources>(undefined);
const { Provider } = Context;

export function useLocalization(): ILocalizedResources {
	const localization = useContext(Context);

	if (!localization) {
		throw new Error('Localization is missing');
	}

	return localization;
}

interface LocalizationProviderProps {
	locale: ILocalizedResources;
}

export const LocalizationProvider: React.FC<LocalizationProviderProps> = ({
	locale,
	children,
}) => (
	<Provider value={locale}>
		{children}
	</Provider>
);
