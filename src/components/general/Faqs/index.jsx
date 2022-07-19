import PropTypes from 'prop-types';
import { Disclosure } from '@headlessui/react';
import { Plus, Minus } from '@icons';
import cx from 'classnames';
import faqs from '@public/seeder/faqs.json';
import styles from './styles.module.scss';

/**
 * Render the Faqs component.
 *
 * @return {Element} The Faqs component.
 */
const Faqs = ({ collection, className, ...props }) => (
	<div className={cx(styles.faqs, className)} {...props}>
		{collection.map((item, idx) => (
			<Disclosure key={item?.id} as="div" className={styles.faqs_item}>
				{({ open }) => (
					<>
						<Disclosure.Button className={cx(styles.faqs_item_btn, { [styles.open]: open })}>
							<span className={styles.text}>
								{idx + 1}. {item?.qn}
							</span>
							<span className={styles.icon}>{open ? <Minus /> : <Plus />}</span>
						</Disclosure.Button>
						<Disclosure.Panel className={styles.faqs_item_panel}>{item?.ans}</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		))}
	</div>
);

/**
 * Default Props.
 */
Faqs.defaultProps = {
	collection: faqs,
	className: '',
};

/**
 * Prop Types.
 */
Faqs.propTypes = {
	collection: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			qn: PropTypes.string.isRequired,
			ans: PropTypes.string.isRequired,
		})
	),
	className: PropTypes.string,
};

export default Faqs;
