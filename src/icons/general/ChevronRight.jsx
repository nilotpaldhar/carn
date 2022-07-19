import { HiOutlineChevronRight } from 'react-icons/hi';

/**
 * Render the ChevronRight icon.
 *
 * @return {Element} The ChevronRight icon.
 */
const ChevronRight = ({ ...props }) => (
	<span className="icon" role="img">
		<HiOutlineChevronRight {...props} />
	</span>
);

export default ChevronRight;
