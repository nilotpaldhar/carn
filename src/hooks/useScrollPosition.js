import { useEffect, useState } from 'react';

/** Get window scrooll position. */
const useScrollPosition = () => {
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const updatePosition = () => {
			setScrollPosition(window.pageYOffset);
		};
		window.addEventListener('scroll', updatePosition);
		updatePosition();
		return () => window.removeEventListener('scroll', updatePosition);
	}, []);

	return scrollPosition;
};

export default useScrollPosition;
