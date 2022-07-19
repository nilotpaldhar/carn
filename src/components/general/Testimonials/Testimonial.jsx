import PropTypes from 'prop-types';
import { Rating } from '@smastrom/react-rating';
import { Image, Link } from '@components/general';
import '@smastrom/react-rating/style.css';
import styles from './styles.module.scss';

/**
 * Render the Testimonial component.
 *
 * @return {Element} The Testimonial component.
 */
const Testimonial = ({ data, ...props }) => {
	/** Custom Start. */
	const Star = (
		<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
	);

	return (
		<div className={styles.testimonial} {...props}>
			<blockquote className={styles.testimonial_body}>
				<Rating
					className={styles.testimonial_rating}
					value={data?.rating}
					readOnly
					itemStyles={{
						itemShapes: Star,
						itemStrokeWidth: 0,
						activeFillColor: '#FBBF24',
						inactiveFillColor: '#FDE68A',
					}}
				/>
				<p className={styles.testimonial_text}>{data?.comment}</p>
				<footer className={styles.testimonial_footer}>
					<figure className={styles.testimonial_avatar}>
						<Image src={data?.user?.avatar} alt={data?.user?.name} width={40} height={40} />
					</figure>
					<cite className={styles.testimonial_author}>
						<span className={styles.testimonial_author_name}>{data?.user?.name}</span>
						<Link href="/" className={styles.testimonial_author_username}>
							&copy;{data?.user?.username}
						</Link>
					</cite>
				</footer>
			</blockquote>
		</div>
	);
};

/**
 * Default Props.
 */
Testimonial.defaultProps = {
	data: {},
};

/**
 * Prop Types.
 */
Testimonial.propTypes = {
	data: PropTypes.shape({
		id: PropTypes.string,
		rating: PropTypes.number,
		comment: PropTypes.string,
		user: PropTypes.shape({
			avatar: PropTypes.string,
			name: PropTypes.string,
			username: PropTypes.string,
		}),
	}),
};

export default Testimonial;
