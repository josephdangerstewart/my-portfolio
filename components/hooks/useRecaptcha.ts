import { useState, useCallback, useEffect } from 'react';

export interface UseCaptchaHook {
	token: string;
	getToken: () => Promise<string>;
}

declare const grecaptcha: any;

const SITE_KEY = '6Lfcd-UnAAAAAPndSKXBeWYZoFLLIvcfNs06lO88';

export function useRecaptcha(action: string, validateImmediately = true): UseCaptchaHook {
	const [token, setToken] = useState<string>(null);

	const getToken = useCallback(() => {
		return new Promise<string>((resolve, reject) => {
			if (typeof grecaptcha === 'undefined') {
				return reject();
			}

			grecaptcha.enterprise.ready(() => {
				grecaptcha.enterprise.execute(SITE_KEY, { action }).then(token => {
					resolve(token as string);
				});
			});
		});
	}, [action]);

	useEffect(() => {
		if (validateImmediately) {
			getToken().then(x => setToken(x));
		}
	}, [getToken, validateImmediately]);

	return { token, getToken };
};
