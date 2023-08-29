import { useCallback, useState } from 'react';

export function useInputState<TElement extends HTMLInputElement | HTMLTextAreaElement>(defaultValue?: string) {
	const [state, setState] = useState(defaultValue);

	const onChange = useCallback((event: React.ChangeEvent<TElement>) => {
		setState(event.target.value);
	}, []);

	const clear = useCallback(() => {
		setState('');
	}, []);

	return [state, onChange, clear] as const;
}
