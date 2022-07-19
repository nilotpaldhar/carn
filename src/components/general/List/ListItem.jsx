import PropTypes from 'prop-types';
import { Check } from '@icons';
import styles from './styles.module.scss';

/**
 * Render the ListItem component.
 *
 * @return {Element} The ListItem component.
 */
const ListItem = ({ icon, children, ...props }) => (
	<li className={styles.list_item} {...props}>
		<div className={styles.list_item_icon}>{icon}</div>
		<div className={styles.list_item_content}>{children}</div>
	</li>
);

/**
 * Default Props.
 */
ListItem.defaultProps = {
	children: '',
	icon: <Check />,
};

/**
 * Prop Types.
 */
ListItem.propTypes = {
	children: PropTypes.node,
	icon: PropTypes.node,
};

export default ListItem;
