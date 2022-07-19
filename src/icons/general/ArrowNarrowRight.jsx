import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

/**
 * Render the ArrowNarrowRight icon.
 *
 * @return {Element} The ArrowNarrowRight icon.
 */
const ArrowNarrowRight = ({ ...props }) => (
	<span className="icon" role="img">
		<HiOutlineArrowNarrowRight {...props} />
	</span>
);

export default ArrowNarrowRight;
