import { HiOutlineArrowUp } from 'react-icons/hi';

/**
 * Render the ArrowUp icon.
 *
 * @return {Element} The ArrowUp icon.
 */
const ArrowUp = ({ ...props }) => (
	<span className="icon" role="img">
		<HiOutlineArrowUp {...props} />
	</span>
);

export default ArrowUp;
