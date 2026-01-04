'use client';

import React, { useCallback } from 'react';

export function useScroll(threshold: number) {
	const [scrolled, setScrolled] = React.useState(false);

	const onScroll = useCallback(() => {
		setScrolled(window.scrollY > threshold);
	}, [threshold]);

	React.useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, [onScroll]);

	// also check on first load
	React.useEffect(() => {
		onScroll();
	}, [onScroll]);

	return scrolled;
}


