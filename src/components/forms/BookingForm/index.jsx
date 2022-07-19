import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@components/general';
import { Select, DatePicker } from '@components/inputs';
import { Location, Calendar } from '@icons';
import loc from '@public/seeder/locations.json';
import styles from './styles.module.scss';

/**
 * Render the BookingForm component.
 *
 * @return {Element} The BookingForm component.
 */
const BookingForm = ({ onSubmit }) => {
	const locations = loc.map((l) => ({
		id: l?.id,
		label: `${l?.streetName}`,
		value: `${l?.streetName}`,
	}));

	/** Pickup and return location. */
	const [pickupLocation, setPickupLocation] = useState(locations[1]);
	const [returnLocation, setReturnLocation] = useState(locations[10]);

	/** Pickup and return date. */
	const [pickupDate, setPickupDate] = useState(new Date());
	const [returnDate, setReturnDate] = useState(new Date());

	/** Form Submit Handler. */
	const handleSubmit = (_evt) => {
		_evt.preventDefault();
		const data = { pickupLocation, returnLocation, pickupDate, returnDate };
		onSubmit(data);

		// eslint-disable-next-line no-console
		console.log('DATA: ', data);
	};

	return (
		<div className={styles.booking_form}>
			{/* Heading */}
			<h2 className={styles.booking_form_heading}>
				Book Now & get <span>50%</span> off
			</h2>

			{/* Form */}
			<form onSubmit={handleSubmit}>
				<div className={styles.booking_form_body}>
					<div className={styles.booking_form_row}>
						<div className={styles.booking_form_group}>
							<Select
								label="Pick Up Location"
								icon={<Location />}
								options={locations}
								initOption={pickupLocation}
								onChange={(l) => setPickupLocation(l)}
							/>
						</div>
						<div className={styles.booking_form_group}>
							<Select
								label="Return Location"
								icon={<Location />}
								options={locations}
								initOption={returnLocation}
								onChange={(l) => setReturnLocation(l)}
							/>
						</div>
					</div>
					<div className={styles.booking_form_row}>
						<div className={styles.booking_form_group}>
							<DatePicker
								label="Pick Up Date"
								icon={<Calendar />}
								initDate={pickupDate}
								onChange={(date) => setPickupDate(date)}
							/>
						</div>
						<div className={styles.booking_form_group}>
							<DatePicker
								label="Return Date"
								icon={<Calendar />}
								initDate={returnDate}
								onChange={(date) => setReturnDate(date)}
							/>
						</div>
					</div>
					<Button className={styles.booking_form_btn} htmlType="submit">
						Find Car
					</Button>
				</div>
			</form>
		</div>
	);
};

/**
 * Default Props.
 */
BookingForm.defaultProps = {
	onSubmit: () => {},
};

/**
 * Prop Types.
 */
BookingForm.propTypes = {
	onSubmit: PropTypes.func,
};

export default BookingForm;
