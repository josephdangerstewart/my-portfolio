import { useEffect, useState, useRef, useCallback } from 'react';

export function useSlowType(message: string, lettersPerSecond: number, startingText = '', delay: number, enabled: boolean): string {
	const [value, setValue] = useState(startingText.split(''));
	const hasWaitedForDelay = useRef(false);
	const messageRef = useRef(message.split(''));
	const isMounted = useRef(true);

	const millisecondsBetweenLetters = (1 / lettersPerSecond) * 1000;

	const typeLetter = useCallback(() => {
		const nextLetter = messageRef.current.shift();
		setValue((value) => [...value, nextLetter]);
	}, []);

	useEffect(() => () => {
		isMounted.current = false;
	}, []);

	useEffect(() => {
		if (!enabled) {
			return;
		}

		let timeout: NodeJS.Timeout;
		const handleTimeout = () => {
			if (delay && !hasWaitedForDelay.current) {
				setTimeout(() => {
					hasWaitedForDelay.current = true;
					timeout = setTimeout(handleTimeout, millisecondsBetweenLetters);
				}, delay * 1000);
				return;
			}

			if (!isMounted.current || messageRef.current.length === 0) {
				return;
			}

			typeLetter();
			const nextTimeout = messageRef.current[0] === ' ' ? 50 : millisecondsBetweenLetters;
			timeout = setTimeout(handleTimeout, nextTimeout);
		};

		timeout = setTimeout(handleTimeout, millisecondsBetweenLetters);

		return () => timeout && clearTimeout(timeout);
	}, [typeLetter, millisecondsBetweenLetters, enabled]);

	return value.join('');
}
