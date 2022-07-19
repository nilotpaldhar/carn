import { HiX } from 'react-icons/hi';

/**
 * Render the Close icon.
 *
 * @return {Element} The Close icon.
 */
const Close = ({ ...props }) => (
	<span className="icon" role="img">
		<HiX {...props} />
	</span>
);

export default Close;
