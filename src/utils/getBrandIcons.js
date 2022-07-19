import { Audi, Ford, Honda, Nissan, Toyota } from '@icons';

/**
 * Retrive brand icons by name.
 *
 * @param {string} name Icon name.
 *
 * @return {Element} Icon element.
 */
const getBrandIcons = (name = '') => {
	const BrandIconsMap = {
		audi: Audi,
		ford: Ford,
		honda: Honda,
		nissan: Nissan,
		toyota: Toyota,
	};

	if (name in BrandIconsMap) {
		const IconComponent = BrandIconsMap[name];
		return IconComponent;
	}

	return null;
};

export default getBrandIcons;
