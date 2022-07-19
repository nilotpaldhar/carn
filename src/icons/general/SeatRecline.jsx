import { MdAirlineSeatReclineExtra } from 'react-icons/md';

/**
 * Render the SeatRecline icon.
 *
 * @return {Element} The SeatRecline icon.
 */
const SeatRecline = ({ ...props }) => (
	<span className="icon" role="img">
		<MdAirlineSeatReclineExtra {...props} />
	</span>
);

export default SeatRecline;
