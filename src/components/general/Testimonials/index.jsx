import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { ArrowRight, ArrowLeft } from '@icons';
import cx from 'classnames';
import testimonials from '@public/seeder/testimonials.json';
import Testimonial from './Testimonial';
import TestimonialsArrow from './TestimonialsArrow';
import styles from './styles.module.scss';

/**
 * Render the Testimonials component.
 *
 * @return {Element} The Testimonials component.
 */
const Testimonials = ({ collection, className, ...props }) => {
	const classNames = cx(styles.testimonials, className);

	/** Slider Config. */
	const sliderConf = {
		dots: false,
		infinite: true,
		speed: 1000,
		nextArrow: (
			<TestimonialsArrow icon={<ArrowRight />} next>
				Next
			</TestimonialsArrow>
		),
		prevArrow: (
			<TestimonialsArrow icon={<ArrowLeft />} previous>
				Previous
			</TestimonialsArrow>
		),
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1200,
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
					arrows: false,
				},
			},
		],
	};

	return (
		<div className={classNames} {...props}>
			<div className="justify-center row">
				<div className="col-12 lg:col-10">
					<Slider {...sliderConf} className={styles.testimonials_slider}>
						{collection.map((item) => (
							<div key={item?.id} className={styles.testimonials_item}>
								<Testimonial data={item} />
							</div>
						))}
					</Slider>
				</div>
			</div>
		</div>
	);
};

/**
 * Default Props.
 */
Testimonials.defaultProps = {
	collection: testimonials,
	className: '',
};

/**
 * Prop Types.
 */
Testimonials.propTypes = {
	collection: PropTypes.arrayOf(PropTypes.shape({})),
	className: PropTypes.string,
};

export default Testimonials;
