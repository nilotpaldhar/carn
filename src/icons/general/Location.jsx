import { HiOutlineLocationMarker } from 'react-icons/hi';

/**
 * Render the Location icon.
 *
 * @return {Element} The Location icon.
 */
const Location = ({ ...props }) => (
	<span className="icon" role="img">
		<HiOutlineLocationMarker {...props} />
	</span>
);

export default Location;
