import { forwardRef, useId } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './styles.module.scss';

/**
 * Render the DatePickerBtn component.
 *
 * @return {Element} The DatePickerBtn component.
 */
const DatePickerBtn = forwardRef(
	({ label, icon, value, id, onClick, className, ...props }, ref) => {
		const uniqueId = useId();
		const idPrefix = `${uniqueId}-${id}`;

		/** Date Picker Button Config. */
		const datePickerBtnConf = {
			...props,
			onClick,
			ref,
			className: cx(styles.date_picker_btn, className),
		};

		return (
			<>
				{label && (
					<label htmlFor={idPrefix} className={styles.date_picker_label}>
						{label}
					</label>
				)}
				<button type="button" id={idPrefix} {...datePickerBtnConf}>
					{icon && <span className={styles.date_picker_btn_icon}>{icon}</span>}
					<span className={styles.date_picker_btn_text}>{value}</span>
				</button>
			</>
		);
	}
);

/**
 * Default Props.
 */
DatePickerBtn.defaultProps = {
	label: null,
	icon: null,
	value: 'Choose date',
	className: '',
	id: 'date-picker-btn',
	onClick: () => {},
};

/**
 * Prop Types.
 */
DatePickerBtn.propTypes = {
	label: PropTypes.oneOfType([PropTypes.node, PropTypes.instanceOf(null)]),
	icon: PropTypes.oneOfType([PropTypes.node, PropTypes.instanceOf(null)]),
	value: PropTypes.string,
	className: PropTypes.string,
	id: PropTypes.string,
	onClick: PropTypes.func,
};

export default DatePickerBtn;
