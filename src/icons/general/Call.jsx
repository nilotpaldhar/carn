import { HiPhone } from 'react-icons/hi';

/**
 * Render the Call icon.
 *
 * @return {Element} The Call icon.
 */
const Call = ({ ...props }) => (
	<span className="icon" role="img">
		<HiPhone {...props} />
	</span>
);

export default Call;
