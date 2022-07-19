import PropTypes from 'prop-types';
import { Image, Link } from '@components/general';
import logo from '@public/images/logo.svg';

/**
 * Render the Logo component.
 *
 * @return {Element} The Logo component.
 */
const Logo = ({ light, className, ...props }) => (
	<Link href="/" className={className} {...props}>
		<Image src={logo} alt="Logo" width={110} height={24} />
	</Link>
);

/**
 * Default Props.
 */
Logo.defaultProps = {
	light: false,
	className: '',
};

/**
 * Prop Types.
 */
Logo.propTypes = {
	light: PropTypes.bool,
	className: PropTypes.string,
};

export default Logo;
