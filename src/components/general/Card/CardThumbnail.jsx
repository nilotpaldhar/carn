import PropTypes from 'prop-types';
import { Image, VisuallyHidden } from '@components/general';
import { Heart } from '@icons';
// import cx from 'classnames';
import styles from './styles.module.scss';

/**
 * Render the CardThumbnail component.
 *
 * @return {Element} The CardThumbnail component.
 */
const CardThumbnail = ({ image }) => {
	/** Image Config. */
	const imgConf = {
		src: image?.path,
		alt: image?.alt,
		width: 260,
		height: 130,
		className: styles.card_thumbnail_img,
	};

	return (
		<div className={styles.card_thumbnail}>
			<Image {...imgConf} />
			<button className={styles.card_thumbnail_fav} type="button">
				<Heart />
				<VisuallyHidden>Mark as favourite</VisuallyHidden>
			</button>
		</div>
	);
};

/**
 * Default Props.
 */
CardThumbnail.defaultProps = {
	image: {},
};

/**
 * Prop Types.
 */
CardThumbnail.propTypes = {
	image: PropTypes.shape({
		path: PropTypes.string,
		alt: PropTypes.string,
	}),
};

export default CardThumbnail;
