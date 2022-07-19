import PropTypes from 'prop-types';
import { Smile, Car, Outlet, Garage } from '@icons';
import cx from 'classnames';
import HighlightsItem from './HighlightsItem';
import styles from './styles.module.scss';

/**
 * Render the Highlights component.
 *
 * @return {Element} The Highlights component.
 */
const Highlights = ({ className, ...props }) => (
	<div className={cx(styles.highlights, className)} {...props}>
		<HighlightsItem icon={<Smile />} title="3000+" text="Happy Clients" />
		<HighlightsItem icon={<Car />} title="20+" text="Car Types" />
		<HighlightsItem icon={<Outlet />} title="100+" text="Rental Outlets" />
		<HighlightsItem icon={<Garage />} title="65+" text="Repair Shop" />
	</div>
);

/**
 * Default Props.
 */
Highlights.defaultProps = {
	className: '',
};

/**
 * Prop Types.
 */
Highlights.propTypes = {
	className: PropTypes.string,
};

export default Highlights;
