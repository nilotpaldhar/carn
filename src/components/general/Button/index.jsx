import PropTypes from 'prop-types';
import { Link } from '@components/general';
import { Loading } from '@icons';
import cx from 'classnames';
import styles from './styles.module.scss';

/**
 * Render the Button component.
 *
 * @return {Element} The Button component.
 */
const Button = ({
	htmlType,
	variant,
	shape,
	className,
	children,
	icon: Icon,
	placeIcon,
	loading,
	block,
	link,
	href,
	...props
}) => {
	const classNames = cx(styles.button, className, {
		[styles.outline]: variant === 'outline',
		[styles.icon]: Boolean(Icon),
		[styles.icon_left]: placeIcon === 'left',
		[styles.circle_right]: placeIcon === 'right',
		[styles.circle]: shape === 'circle',
		[styles.loading]: loading,
		[styles.block]: block,
	});

	const config = { ...props, className: classNames };

	if (link) {
		return (
			<Link {...config} href={href}>
				{children && <span className={styles.text}>{children}</span>}
				{loading && <Loading className="animate-spin" />}
				{Icon && !loading && Icon}
			</Link>
		);
	}

	return (
		// eslint-disable-next-line react/button-has-type
		<button {...config} type={htmlType}>
			{children && <span className={styles.text}>{children}</span>}
			{loading && <Loading className="animate-spin" />}
			{Icon && !loading && Icon}
		</button>
	);
};

/**
 * Default Props.
 */
Button.defaultProps = {
	htmlType: 'button',
	variant: 'default',
	shape: 'default',
	className: '',
	children: '',
	icon: '',
	placeIcon: 'right',
	loading: false,
	block: false,
	link: false,
	href: '#',
};

/**
 * Prop Types.
 */
Button.propTypes = {
	htmlType: PropTypes.string,
	variant: PropTypes.oneOf(['default', 'outline']),
	shape: PropTypes.oneOf(['default', 'circle']),
	className: PropTypes.string,
	children: PropTypes.node,
	icon: PropTypes.node,
	placeIcon: PropTypes.oneOf(['left', 'right']),
	loading: PropTypes.bool,
	block: PropTypes.bool,
	link: PropTypes.bool,
	href: PropTypes.string,
};

export default Button;
