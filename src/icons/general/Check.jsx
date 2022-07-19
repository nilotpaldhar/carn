import { HiCheck } from 'react-icons/hi';

/**
 * Render the Check icon.
 *
 * @return {Element} The Check icon.
 */
const Check = ({ ...props }) => (
	<span className="icon" role="img">
		<HiCheck {...props} />
	</span>
);

export default Check;
