import { FaFacebookF } from 'react-icons/fa';

/**
 * Render the Facebook icon.
 *
 * @return {Element} The Facebook icon.
 */
const Facebook = ({ ...props }) => (
	<span className="icon" role="img">
		<FaFacebookF {...props} />
	</span>
);

export default Facebook;
