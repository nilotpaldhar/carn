import { HiOutlineArrowDown } from 'react-icons/hi';

/**
 * Render the ArrowDown icon.
 *
 * @return {Element} The ArrowDown icon.
 */
const ArrowDown = ({ ...props }) => (
	<span className="icon" role="img">
		<HiOutlineArrowDown {...props} />
	</span>
);

export default ArrowDown;
