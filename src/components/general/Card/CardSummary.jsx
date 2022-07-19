import PropTypes from 'prop-types';
import { Button, TruncateString } from '@components/general';
import { SeatRecline, Gear, GasStation, StarFilled } from '@icons';
import styles from './styles.module.scss';

/**
 * Render the CardSummary component.
 *
 * @return {Element} The CardSummary component.
 */
const CardSummary = ({ data }) => (
	<div className={styles.card_summary}>
		<div className={styles.card_summary_info}>
			<div className={styles.card_summary_info_item}>
				<h3 className={styles.model_name}>
					<TruncateString text={data?.model?.name} maxLength={10} />
				</h3>
			</div>
			<div className={styles.card_summary_info_item}>
				<div className={styles.model_price}>
					<span>{data?.price}</span>
					<span>&frasl; {data?.duration}</span>
				</div>
			</div>
			<div className={styles.card_summary_info_item}>
				<div className={styles.model_rating}>
					<span>{data?.rating}</span>
					<StarFilled />
				</div>
			</div>
		</div>
		<ul className={styles.card_summary_meta}>
			<li>
				<SeatRecline />
				<span>{data?.meta?.seats} Seater</span>
			</li>
			<li>
				<Gear />
				<span>{data?.meta?.transmission}</span>
			</li>
			<li>
				<GasStation />
				<span>{data?.meta?.fuel_type}</span>
			</li>
		</ul>
		<Button className={styles.cta} block>
			Book Now
		</Button>
	</div>
);

/**
 * Default Props.
 */
CardSummary.defaultProps = {
	data: {},
};

/**
 * Prop Types.
 */
CardSummary.propTypes = {
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
		meta: PropTypes.shape({
			seats: PropTypes.number,
			transmission: PropTypes.string,
			fuel_type: PropTypes.string,
		}),
	}),
};

export default CardSummary;
