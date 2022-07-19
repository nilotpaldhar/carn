import { HiOutlineCog } from 'react-icons/hi';

/**
 * Render the Gear icon.
 *
 * @return {Element} The Gear icon.
 */
const Gear = ({ ...props }) => (
	<span className="icon" role="img">
		<HiOutlineCog {...props} />
	</span>
);

export default Gear;
