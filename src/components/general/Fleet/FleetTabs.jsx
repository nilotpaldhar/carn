import PropTypes from 'prop-types';
import { Button } from '@components/general';
import cx from 'classnames';
import { getBrandIcons } from '@utils';
import styles from './styles.module.scss';

/**
 * Render the FleetTabs component.
 *
 * @return {Element} The FleetTabs component.
 */
const FleetTabs = ({ brands, activeBrand, onChange, className, ...props }) => {
	const classNames = cx(styles.fleet_tabs, className);

	/** Handle Click. */
	const handleClick = (_evt) => {
		onChange(_evt?.currentTarget?.value);
	};

	return (
		<ul className={classNames} {...props}>
			{brands?.map((brand) => {
				const Icon = getBrandIcons(brand?.slug);
				const btnConf = {
					className: cx(styles.btn, {
						[styles.active]: brand?.id === activeBrand?.id,
					}),
					value: brand?.slug,
					icon: <Icon />,
					placeIcon: 'left',
					onClick: handleClick,
				};
				return (
					<li key={brand?.id}>
						<Button {...btnConf}>{brand?.name}</Button>
					</li>
				);
			})}
			<li>
				<Button icon={<span className={styles.icon_text}>20+</span>} className={styles.btn}>
					Explore
				</Button>
			</li>
		</ul>
	);
};

/**
 * Default Props.
 */
FleetTabs.defaultProps = {
	brands: [],
	activeBrand: {},
	onChange: () => {},
	className: '',
};

/**
 * Prop Types.
 */
FleetTabs.propTypes = {
	brands: PropTypes.arrayOf(PropTypes.shape({})),
	activeBrand: PropTypes.shape({
		id: PropTypes.string,
		name: PropTypes.string,
		slug: PropTypes.string,
	}),
	onChange: PropTypes.func,
	className: PropTypes.string,
};

export default FleetTabs;
