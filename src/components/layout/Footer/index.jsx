import { Container, Link, Logo, SocialHandles } from '@components/general';
import { ArrowRight, Call, Mail } from '@icons';
import { removeSlashes } from '@utils';
import menus from '@public/seeder/footer_menu.json';
import styles from './styles.module.scss';

/**
 * Render the Footer component.
 *
 * @return {Element} The Footer component.
 */
const Footer = () => {
	/** Get current year. */
	const year = new Date().getFullYear();

	/** Site Name. */
	const sitename = process.env.NEXT_PUBLIC_SITE_NAME;

	return (
		<footer className={styles.footer}>
			<Container>
				<div className={styles.footer_summary}>
					{/* About. */}
					<div className={styles.footer_about}>
						<Logo />
						<p>
							At tincidunt scelerisque facilisi mauris tellus vestibulum ut erat ipsum felis viverra
							arcu lacus.
						</p>
						<Link href="/">
							<span>Read More</span>
							<ArrowRight />
						</Link>
					</div>

					{/* Menu Company. */}
					<div className={styles.footer_menu}>
						<h3 className={styles.footer_menu_title}>Company</h3>
						<nav>
							<ul>
								{menus?.company?.map((m) => (
									<li key={m?.id} className={styles.footer_menu_item}>
										<Link href={`/${removeSlashes(m?.path)}`}>{m?.label}</Link>
									</li>
								))}
							</ul>
						</nav>
					</div>

					{/* Menu Support. */}
					<div className={styles.footer_menu}>
						<h3 className={styles.footer_menu_title}>Support</h3>
						<nav>
							<ul>
								{menus?.support?.map((m) => (
									<li key={m?.id} className={styles.footer_menu_item}>
										<Link href={`/${removeSlashes(m?.path)}`}>{m?.label}</Link>
									</li>
								))}
							</ul>
						</nav>
					</div>

					{/* Menu Working Hours. */}
					<div className={styles.footer_menu}>
						<h3 className={styles.footer_menu_title}>Working Hours</h3>
						<nav>
							<ul>
								<li className={styles.footer_menu_item}>Mon - Fri: 09:00 AM -09:00 PM</li>
								<li className={styles.footer_menu_item}>Sat: 09:00 AM -07:00 PM</li>
								<li className={styles.footer_menu_item}>Sun: Closed</li>
							</ul>
						</nav>
					</div>

					{/* Contact Info. */}
					<div className={styles.footer_menu}>
						<h3 className={styles.footer_menu_title}>Contact Info</h3>
						<nav>
							<ul>
								<li className={styles.footer_menu_item}>
									<a href="tel:1-485-157-0830">
										<Call />
										<span>+1 (485) 157 0830</span>
									</a>
								</li>
								<li className={styles.footer_menu_item}>
									<a href="mailto:support@carn.com">
										<Mail />
										<span>support@carn.com</span>
									</a>
								</li>
							</ul>
						</nav>
						<SocialHandles className="mt-5" />
					</div>
				</div>
				<div className={styles.footer_copyright}>
					<p>
						&copy; {year} {sitename}. All Rights Reserved
					</p>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
