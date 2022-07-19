import {
	Container,
	Button,
	Heading,
	Image,
	WorkingSteps,
	List,
	Highlights,
	Fleet,
	Testimonials,
	Faqs,
} from '@components/general';
import { BookingForm } from '@components/forms';
import { Location, ArrowNarrowRight } from '@icons';
import cx from 'classnames';
import styles from './styles.module.scss';

/**
 * Render the HomePageTmpl component.
 *
 * @return {Element} The HomePageTmpl component.
 */
const HomePageTmpl = () => (
	<div className={styles.home_page}>
		{/* Hero Section. */}
		<section id="home" className={cx(styles.section, styles.section_hero)}>
			<Container>
				<div className="items-center row">
					<div className="order-1 col-12 lg:col-6 xl:col-5 lg:order-none">
						<div className={styles.section_hero_content}>
							<h1 className={styles.section_hero_heading}>Easy and fast way to rent a car.</h1>
							<p className={styles.section_hero_desc}>
								Get a car wherever and whenever you need it with your iOs and Android devices
							</p>
							<div className={styles.section_hero_cta}>
								<Button icon={<Location />} placeIcon="left">
									Explore
								</Button>
								<Button variant="outline" icon={<ArrowNarrowRight />}>
									Details
								</Button>
							</div>
						</div>
					</div>
					<div className="col-12 lg:col-6 xl:col-7">
						<Image
							className={styles.section_hero_img}
							src="/images/hero.png"
							alt="hero-img"
							width={800}
							height={475}
						/>
					</div>
				</div>
				<div className={styles.section_hero_booking}>
					<div className="justify-center row">
						<div className="col-12">
							<div className={styles.section_hero_booking_content}>
								<BookingForm />
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>

		{/* Working Steps. */}
		<section className={cx(styles.section)}>
			<Container>
				<Heading title="HOW IT WORKS" subTitle="Our working Steps" />
				<WorkingSteps className="mt-10 md:mt-14 lg:mt-20" />
			</Container>
		</section>

		{/* Services Section. */}
		<section id="services" className={cx(styles.section, styles.section_services)}>
			<Container>
				<div className="items-center justify-center row">
					<div className="hidden col-12 lg:col-6 lg:block">
						<Image
							className={styles.section_services_img}
							src="/images/services.png"
							alt="service-img"
							width={800}
							height={595}
						/>
					</div>
					<div className="col-12 md:col-8 lg:col-6">
						<div className={styles.section_services_content}>
							<Heading
								title="WHY CHOOSE US?"
								subTitle="Get the best experience with our Daily rental deals and Offers"
							/>
							<List>
								<List.Item>Easy & Quick Online Booking</List.Item>
								<List.Item>Clean & Well-Maintained Fleet</List.Item>
								<List.Item>Anywhere Delivery</List.Item>
							</List>
							<Button>Book Now</Button>
						</div>
					</div>
				</div>
				<div className={styles.section_services_highlights}>
					<div className="justify-center row">
						<div className="col-12 xl:col-8">
							<Highlights />
						</div>
					</div>
				</div>
			</Container>
		</section>

		{/* Our Fleet Section. */}
		<section id="fleet" className={cx(styles.section, styles.section_fleet)}>
			<Container>
				<Heading title="TOP DEALS" subTitle="Book your car today!" />
				<Fleet className="mt-10" />
			</Container>
		</section>

		{/* Car Share Section. */}
		<section className={cx(styles.section, styles.section_share)}>
			<Container>
				<div className={styles.section_share_content}>
					<div className="items-center row">
						<div className="col-12 xl:col-7">
							<h2 className={styles.section_share_heading}>Do you want to earn with us?</h2>
							<p className={styles.section_share_desc}>
								So share your car and earn up to $5000 per month
							</p>
							<Button>Start Earning</Button>
						</div>
						<div className="col-12 xl:col-5">
							<Image
								className={styles.section_share_img}
								src="/images/car-share.png"
								alt="car-share"
								width={530}
								height={300}
							/>
						</div>
					</div>
				</div>
			</Container>
		</section>

		{/* Testimonials Section. */}
		<section id="testimonials" className={cx(styles.section, styles.section_testimonials)}>
			<Container>
				<Heading title="TESTIMONIALS" subTitle="what clients say about us" />
				<Testimonials className="mt-10 md:mt-14" />
			</Container>
		</section>

		{/* FAQ Section. */}
		<section id="faqs" className={cx(styles.section)}>
			<Container>
				<div className="justify-center row">
					<div className="col-12 md:col-10 lg:col-7">
						<Heading title="FAQs" subTitle="frequently asked quetions" />
						<Faqs className="mt-10 md:mt-14" />
					</div>
				</div>
			</Container>
		</section>
	</div>
);

export default HomePageTmpl;
