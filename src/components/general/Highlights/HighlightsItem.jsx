import PropTypes from 'prop-types';
import styles from './styles.module.scss';

/**
 * Render the HighlightsItem component.
 *
 * @return {Element} The HighlightsItem component.
 */
const HighlightsItem = ({ icon, title, text, ...props }) => (
	<div className={styles.highlights_item} {...props}>
		<div className={styles.highlights_item_header}>
			<div className={styles.highlights_item_icon}>{icon}</div>
			<h3 className={styles.highlights_item_title}>{title}</h3>
		</div>
		<div className={styles.highlights_item_body}>
			<p>{text}</p>
		</div>
	</div>
);

/**
 * Prop Types.
 */
HighlightsItem.propTypes = {
	icon: PropTypes.node.isRequired,
	title: PropTypes.string.isRequired,
	text: PropTypes.node.isRequired,
};

export default HighlightsItem;
