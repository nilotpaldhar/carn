import { SiToyota } from 'react-icons/si';

/**
 * Render the Toyota icon.
 *
 * @return {Element} The Toyota icon.
 */
const Toyota = ({ ...props }) => (
	<span className="icon" role="img">
		<SiToyota {...props} />
	</span>
);

export default Toyota;
