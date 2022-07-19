import PropTypes from 'prop-types';
import { VisuallyHidden } from '@components/general';
import cx from 'classnames';
import styles from './styles.module.scss';

/**
 * Render the TestimonialsArrow component.
 *
 * @return {Element} The TestimonialsArrow component.
 */
const TestimonialsArrow = ({ icon, previous, next, children, onClick, className, style }) => {
	const classNames = cx(styles.testimonials_arrow, {
		[styles.previous]: previous,
		[styles.next]: next,
	});

	/** Button Config. */
	const btnConf = { style, onClick, className };

	return (
		<div className={classNames}>
			<button type="button" {...btnConf}>
				{icon}
				<VisuallyHidden>{children}</VisuallyHidden>
			</button>
		</div>
	);
};

/**
 * Default Props.
 */
TestimonialsArrow.defaultProps = {
	icon: '',
	previous: false,
	next: false,
	children: '',
	onClick: null,
	className: '',
	style: {},
};

/**
 * Prop Types.
 */
TestimonialsArrow.propTypes = {
	icon: PropTypes.node,
	previous: PropTypes.bool,
	next: PropTypes.bool,
	children: PropTypes.node,
	onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.instanceOf(null)]),
	className: PropTypes.string,
	style: PropTypes.shape({}),
};

export default TestimonialsArrow;
