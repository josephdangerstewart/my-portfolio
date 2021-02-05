import { createContext, useContext } from 'react';
import { ILocalizedResources, enUS } from '../../localization';

const locales = {
	enUS,
};

const Context = createContext<ILocalizedResources>(enUS);
const { Provider } = Context;

export function useLocalization(): ILocalizedResources {
	return useContext(Context);
}

interface LocalizationProviderProps {
	locale: keyof typeof locales
}

export const LocalizationProvider: React.FC<LocalizationProviderProps> = ({
	locale,
	children,
}) => (
	<Provider value={locales[locale]}>
		{children}
	</Provider>
);
