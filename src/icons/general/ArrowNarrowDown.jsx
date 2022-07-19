import { HiOutlineArrowNarrowDown } from 'react-icons/hi';

/**
 * Render the ArrowNarrowDown icon.
 *
 * @return {Element} The ArrowNarrowDown icon.
 */
const ArrowNarrowDown = ({ ...props }) => (
	<span className="icon" role="img">
		<HiOutlineArrowNarrowDown {...props} />
	</span>
);

export default ArrowNarrowDown;
