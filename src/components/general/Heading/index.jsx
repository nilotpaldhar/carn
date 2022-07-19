import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './styles.module.scss';

/**
 * Render the Heading component.
 *
 * @return {Element} The Heading component.
 */
const Heading = ({ title, subTitle, align, light, className, ...props }) => {
	const classNames = cx(styles.heading, className, {
		[styles.left]: align === 'left',
		[styles.center]: align === 'center',
		[styles.right]: align === 'right',
		[styles.light]: light,
	});

	return (
		<div className={classNames} {...props}>
			<h2>{title}</h2>
			{subTitle && <p>{subTitle}</p>}
		</div>
	);
};

/**
 * Default Props.
 */
Heading.defaultProps = {
	title: 'Default Title',
	subTitle: null,
	align: 'center',
	light: false,
	className: '',
};

/**
 * Prop Types.
 */
Heading.propTypes = {
	title: PropTypes.string,
	subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(null)]),
	align: PropTypes.oneOf(['left', 'center', 'right']),
	light: PropTypes.bool,
	className: PropTypes.string,
};

export default Heading;
