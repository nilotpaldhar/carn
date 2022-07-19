import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { Card } from '@components/general';
import cx from 'classnames';
import styles from './styles.module.scss';

/**
 * Render the FleetCollection component.
 *
 * @return {Element} The FleetCollection component.
 */
const FleetCollection = ({ items, className, ...props }) => {
	const classNames = cx(styles.fleet_collection, className);

	/** Slider Config. */
	const sliderConf = {
		arrows: false,
		dots: true,
		speed: 1000,
		dotsClass: styles.fleet_collection_nav,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className={classNames} {...props}>
			<Slider {...sliderConf} initialSlide>
				{items.map((item) => (
					<div key={item?.id} className={styles.fleet_collection_item}>
						<Card data={item} />
					</div>
				))}
			</Slider>
		</div>
	);
};

/**
 * Default Props.
 */
FleetCollection.defaultProps = {
	items: [],
	className: '',
};

/**
 * Prop Types.
 */
FleetCollection.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({})),
	className: PropTypes.string,
};

export default FleetCollection;
