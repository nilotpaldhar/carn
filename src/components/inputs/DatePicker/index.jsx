import PropTypes from 'prop-types';
import { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DatePickerBtn from './DatePickerBtn';
import styles from './styles.module.scss';

/**
 * Render the DatePicker component.
 *
 * @return {Element} The DatePicker component.
 */
const DatePicker = ({ initDate, label, icon, onChange, ...props }) => {
	const [date, setDate] = useState(initDate);

	/** Handle Date Change. */
	const handleDateChange = (newDate) => {
		setDate(newDate);
		onChange(newDate);
	};

	return (
		<ReactDatePicker
			wrapperClassName={styles.date_picker}
			selected={date}
			onChange={handleDateChange}
			customInput={<DatePickerBtn icon={icon} label={label} />}
			{...props}
		/>
	);
};

/**
 * Default Props.
 */
DatePicker.defaultProps = {
	initDate: new Date(),
	icon: null,
	label: 'Choose date',
	onChange: () => {},
};

/**
 * Prop Types.
 */
DatePicker.propTypes = {
	initDate: PropTypes.instanceOf(Date),
	icon: PropTypes.oneOfType([PropTypes.node, PropTypes.instanceOf(null)]),
	label: PropTypes.string,
	onChange: PropTypes.func,
};

export default DatePicker;
