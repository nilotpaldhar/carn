import PropTypes from 'prop-types';
import cx from 'classnames';
import CardThumbnail from './CardThumbnail';
import CardSummary from './CardSummary';
import styles from './styles.module.scss';

/**
 * Render the Card component.
 *
 * @return {Element} The Card component.
 */
const Card = ({ data, className, ...props }) => {
	const classNames = cx(styles.card, className);

	return (
		<div className={classNames} {...props}>
			<div className={styles.card_body}>
				<CardThumbnail image={data?.image} />
				<CardSummary data={data} />
			</div>
		</div>
	);
};

/**
 * Default Props.
 */
Card.defaultProps = {
	data: {},
	className: '',
};

/**
 * Prop Types.
 */
Card.propTypes = {
	data: PropTypes.shape({
		id: PropTypes.string,
		brand: PropTypes.shape({
			name: PropTypes.string,
			slug: PropTypes.string,
		}),
		model: PropTypes.shape({
			name: PropTypes.string,
			slug: PropTypes.string,
		}),
		rating: PropTypes.number,
		price: PropTypes.string,
		duration: PropTypes.string,
		image: PropTypes.shape({
			path: PropTypes.string,
			alt: PropTypes.string,
		}),
		meta: PropTypes.shape({
			seats: PropTypes.number,
			transmission: PropTypes.string,
			fuel_type: PropTypes.string,
		}),
	}),
	className: PropTypes.string,
};

export default Card;
