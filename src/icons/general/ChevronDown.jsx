import { HiOutlineChevronDown } from 'react-icons/hi';

/**
 * Render the ChevronDown icon.
 *
 * @return {Element} The ChevronDown icon.
 */
const ChevronDown = ({ ...props }) => (
	<span className="icon" role="img">
		<HiOutlineChevronDown {...props} />
	</span>
);

export default ChevronDown;
