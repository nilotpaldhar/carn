import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './styles.module.scss';

/**
 * Render the PageWrapper component.
 *
 * @return {Element} The PageWrapper component.
 */
const PageWrapper = ({ noSpace, children, className, ...props }) => {
	const classNames = cx(styles.page_wrapper, className, {
		[styles.no_space]: noSpace,
	});

	return (
		<div className={classNames} {...props}>
			{children}
		</div>
	);
};

/**
 * Default Props.
 */
PageWrapper.defaultProps = {
	noSpace: false,
	children: '',
	className: '',
};

/**
 * Prop Types.
 */
PageWrapper.propTypes = {
	noSpace: PropTypes.bool,
	children: PropTypes.node,
	className: PropTypes.string,
};

export default PageWrapper;
