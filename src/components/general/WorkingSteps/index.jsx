import PropTypes from 'prop-types';
import { Location, Calendar, Car } from '@icons';
import cx from 'classnames';
import styles from './styles.module.scss';

/**
 * Render the WorkingSteps component.
 *
 * @return {Element} The WorkingSteps component.
 */
const WorkingSteps = ({ className, ...props }) => {
	const classNames = cx(styles.working_steps, className);

	return (
		<div className={classNames} {...props}>
			<div className={cx(styles.working_steps_item)}>
				<div className={styles.icon}>
					<Location />
				</div>
				<h3 className={styles.name}>Choose Location</h3>
				<p className={styles.desc}>
					Euismod leo congue lectus rhoncus, commodo vitae imperdiet ornare lacinia porta placerat
					ullamcorper erat amet
				</p>
			</div>
			<div className={cx(styles.working_steps_item, styles.active)}>
				<div className={styles.icon}>
					<Calendar />
				</div>
				<h3 className={styles.name}>Pick-Up Date</h3>
				<p className={styles.desc}>
					Euismod leo congue lectus rhoncus, commodo vitae imperdiet ornare lacinia porta placerat
					ullamcorper erat amet
				</p>
			</div>
			<div className={cx(styles.working_steps_item)}>
				<div className={styles.icon}>
					<Car />
				</div>
				<h3 className={styles.name}>Book Your Car</h3>
				<p className={styles.desc}>
					Euismod leo congue lectus rhoncus, commodo vitae imperdiet ornare lacinia porta placerat
					ullamcorper erat amet
				</p>
			</div>
		</div>
	);
};

/**
 * Default Props.
 */
WorkingSteps.defaultProps = {
	className: '',
};

/**
 * Prop Types.
 */
WorkingSteps.propTypes = {
	className: PropTypes.string,
};

export default WorkingSteps;
