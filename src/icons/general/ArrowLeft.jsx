import { HiOutlineArrowLeft } from 'react-icons/hi';

/**
 * Render the ArrowLeft icon.
 *
 * @return {Element} The ArrowLeft icon.
 */
const ArrowLeft = ({ ...props }) => (
	<span className="icon" role="img">
		<HiOutlineArrowLeft {...props} />
	</span>
);

export default ArrowLeft;
