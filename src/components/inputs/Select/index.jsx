import { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Listbox, Transition } from '@headlessui/react';
import cx from 'classnames';
import { ChevronDown } from '@icons';
import styles from './styles.module.scss';

/**
 * Render the Select component.
 *
 * @return {Element} The Select component.
 */
const Select = ({ icon, label, initOption, options, onChange }) => {
	const [selectedOption, setSelectedOption] = useState(initOption || options[0]);

	/** Handle option change. */
	const handleChange = (option) => {
		setSelectedOption(option);
		onChange(option);
	};

	/** Listbox Config. */
	const listboxConf = {
		className: styles.select,
		as: 'div',
		value: selectedOption,
		onChange: handleChange,
	};

	/** Transition Config. */
	const transitionConf = {
		as: Fragment,
		enter: 'transition ease-in duration-150',
		enterFrom: 'opacity-0',
		enterTo: 'opacity-100',
		leave: 'transition ease-in duration-150',
		leaveFrom: 'opacity-100',
		leaveTo: 'opacity-0',
	};

	return (
		<Listbox {...listboxConf}>
			<Listbox.Label className={styles.select_label}>{label}</Listbox.Label>
			<Listbox.Button className={styles.select_btn}>
				{icon && <span className={styles.select_btn_iconleft}>{icon}</span>}
				<span className={styles.select_btn_text}>{selectedOption?.label}</span>
				<span className={styles.select_btn_iconright}>
					<ChevronDown />
				</span>
			</Listbox.Button>
			<Transition {...transitionConf}>
				<Listbox.Options className={styles.select_options}>
					{options.map((option) => (
						<Listbox.Option as={Fragment} key={option?.id} value={option}>
							{({ active, selected }) => (
								<li
									className={cx(styles.select_option, {
										[styles.active]: active,
										[styles.selected]: selected,
									})}
								>
									{option?.label}
								</li>
							)}
						</Listbox.Option>
					))}
				</Listbox.Options>
			</Transition>
		</Listbox>
	);
};

/**
 * Default Props.
 */
Select.defaultProps = {
	icon: null,
	label: 'Choose option',
	initOption: {},
	options: [],
	onChange: () => {},
};

/**
 * Prop Types.
 */
Select.propTypes = {
	icon: PropTypes.oneOfType([PropTypes.node, PropTypes.instanceOf(null)]),
	label: PropTypes.string,
	initOption: PropTypes.shape({
		id: PropTypes.string,
		label: PropTypes.string,
		value: PropTypes.string,
	}),
	options: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			label: PropTypes.string,
			value: PropTypes.string,
		})
	),
	onChange: PropTypes.func,
};

export default Select;
