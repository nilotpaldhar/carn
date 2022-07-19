import { HiOutlineChevronUp } from 'react-icons/hi';

/**
 * Render the ChevronUp icon.
 *
 * @return {Element} The ChevronUp icon.
 */
const ChevronUp = ({ ...props }) => (
	<span className="icon" role="img">
		<HiOutlineChevronUp {...props} />
	</span>
);

export default ChevronUp;
