import { Button, Container, Logo } from '@components/general';
import { MobileMenu } from '@components/layout';
import { useScrollPosition } from '@hooks';
import menus from '@public/seeder/primary_menu.json';
import cx from 'classnames';
import NavMenu from './NavMenu';
import styles from './styles.module.scss';

/**
 * Render the Navbar component.
 *
 * @return {Element} The Navbar component.
 */
const Navbar = ({ ...props }) => {
	/** Get window scroll position.  */
	const scrollPosition = useScrollPosition();
	const classNames = cx(styles.navbar, {
		[styles.fixtop]: scrollPosition > 500,
	});

	return (
		<header className={classNames} {...props}>
			<Container>
				<div className={styles.navbar_body}>
					<MobileMenu menus={menus} btnClassName={styles.navbar_menu_toogle} />
					<Logo className={styles.navbar_logo} />
					<NavMenu menus={menus} />
					<Button className={styles.navbar_cta} variant="outline">
						Try For Free
					</Button>
				</div>
			</Container>
		</header>
	);
};

export default Navbar;
