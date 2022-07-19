import { MdOutlineLocalGasStation } from 'react-icons/md';

/**
 * Render the GasStation icon.
 *
 * @return {Element} The GasStation icon.
 */
const GasStation = ({ ...props }) => (
	<span className="icon" role="img">
		<MdOutlineLocalGasStation {...props} />
	</span>
);

export default GasStation;
