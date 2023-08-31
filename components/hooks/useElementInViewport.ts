import { useCallback, useMemo, useRef, useState } from 'react';

export function useElementInViewport<TElement extends HTMLElement>(): [React.Ref<TElement>, boolean] {
	const ref = useRef<TElement>();
	const [inViewport, setInViewport] = useState(false);

	const observer = useMemo(() => {
		if (typeof IntersectionObserver === 'undefined') {
			return undefined;
		}

		return new IntersectionObserver(([entry]) => setInViewport(entry.isIntersecting));
	}, []);

	const connectRef = useCallback((element: TElement | null) => {
		if (!observer) {
			ref.current = element;
			return;
		}

		if (ref.current) {
			observer.unobserve(ref.current);
		}

		ref.current = element;

		if (element) {
			observer.observe(element);
		}
	}, [observer]);

	return [connectRef, inViewport];
}
