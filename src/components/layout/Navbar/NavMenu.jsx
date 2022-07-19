import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import { removeSlashes } from '@utils';
import styles from './styles.module.scss';
/**
 * Render the NavMenu component.
 *
 * @return {Element} The NavMenu component.
 */
const NavMenu = ({ menus }) => {
	/** Link config. */
	const linkConf = {
		activeClass: styles.active,
		spy: true,
		smooth: true,
		hashSpy: true,
		duration: 2000,
		isDynamic: true,
		offset: -96,
	};

	return (
		<nav className={styles.nav_menu}>
			<ul>
				{menus.map((menu) => (
					<li key={menu?.id}>
						<Link to={removeSlashes(menu?.path)} {...linkConf}>
							{menu?.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

/**
 * Default Props.
 */
NavMenu.defaultProps = {
	menus: [],
};

/**
 * Prop Types.
 */
NavMenu.propTypes = {
	menus: PropTypes.arrayOf(PropTypes.shape({})),
};

export default NavMenu;
