import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

/**
 * Render the ArrowNarrowLeft icon.
 *
 * @return {Element} The ArrowNarrowLeft icon.
 */
const ArrowNarrowLeft = ({ ...props }) => (
	<span className="icon" role="img">
		<HiOutlineArrowNarrowLeft {...props} />
	</span>
);

export default ArrowNarrowLeft;
