import { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import fleet from '@public/seeder/fleet.json';
import FleetCollection from './FleetCollection';
import FleetTabs from './FleetTabs';
import styles from './styles.module.scss';

/**
 * Render the Fleet component.
 *
 * @return {Element} The Fleet component.
 */
const Fleet = ({ className, ...props }) => {
	const classNames = cx(styles.fleet, className);
	const [activeBrand, setActiveBrand] = useState(fleet?.brands[0]);
	const [fleetCars, setFleetCars] = useState(
		fleet?.cars?.filter((c) => c?.brand?.slug === fleet?.brands[0]?.slug)
	);

	/** Handles Brand Change. */
	const handleBrandChange = (brandSlug) => {
		const selectedBrand = fleet?.brands?.filter((b) => b?.slug === brandSlug)[0];
		const selectedBrandCars = fleet?.cars?.filter((c) => c?.brand?.slug === brandSlug);
		setActiveBrand(selectedBrand);
		setFleetCars(selectedBrandCars);
	};

	/** Fleet Tabs Config. */
	const fleetTabsConf = {
		brands: fleet?.brands,
		activeBrand: activeBrand,
		onChange: handleBrandChange,
	};

	return (
		<div className={classNames} {...props}>
			<FleetTabs {...fleetTabsConf} />
			<FleetCollection items={fleetCars} />
		</div>
	);
};

/**
 * Default Props.
 */
Fleet.defaultProps = {
	className: '',
};

/**
 * Prop Types.
 */
Fleet.propTypes = {
	className: PropTypes.string,
};

export default Fleet;
