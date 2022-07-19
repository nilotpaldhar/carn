import { SiFord } from 'react-icons/si';

/**
 * Render the Ford icon.
 *
 * @return {Element} The Ford icon.
 */
const Ford = ({ ...props }) => (
	<span className="icon" role="img">
		<SiFord {...props} />
	</span>
);

export default Ford;
