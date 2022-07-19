import PropTypes from 'prop-types';
import cx from 'classnames';
import ListItem from './ListItem';
import styles from './styles.module.scss';

/**
 * Render the List component.
 *
 * @return {Element} The List component.
 */
const List = ({ children, listType, className, ...props }) => {
	const classnames = cx(styles.list, className);

	/** Config. */
	const conf = {
		...props,
		className: classnames,
	};

	if (listType === 'ol') {
		return <ol {...conf}>{children}</ol>;
	}

	return <ul {...conf}>{children}</ul>;
};

/**
 * Default Props.
 */
List.defaultProps = {
	children: '',
	listType: 'ul',
	className: '',
};

/**
 * Prop Types.
 */
List.propTypes = {
	children: PropTypes.node,
	listType: PropTypes.oneOf(['ul', 'ol']),
	className: PropTypes.string,
};

/**
 * The List Item Component.
 */
List.Item = ListItem;

export default List;
