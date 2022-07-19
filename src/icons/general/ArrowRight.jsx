import { HiOutlineArrowRight } from 'react-icons/hi';

/**
 * Render the ArrowRight icon.
 *
 * @return {Element} The ArrowRight icon.
 */
const ArrowRight = ({ ...props }) => (
	<span className="icon" role="img">
		<HiOutlineArrowRight {...props} />
	</span>
);

export default ArrowRight;
