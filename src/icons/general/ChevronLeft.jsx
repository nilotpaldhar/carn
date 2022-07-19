import { HiOutlineChevronLeft } from 'react-icons/hi';

/**
 * Render the ChevronLeft icon.
 *
 * @return {Element} The ChevronLeft icon.
 */
const ChevronLeft = ({ ...props }) => (
	<span className="icon" role="img">
		<HiOutlineChevronLeft {...props} />
	</span>
);

export default ChevronLeft;
