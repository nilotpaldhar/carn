import { HiOutlineCalendar } from 'react-icons/hi';

/**
 * Render the Calendar icon.
 *
 * @return {Element} The Calendar icon.
 */
const Calendar = ({ ...props }) => (
	<span className="icon" role="img">
		<HiOutlineCalendar {...props} />
	</span>
);

export default Calendar;
