import { HiMenuAlt1 } from 'react-icons/hi';

/**
 * Render the Menu icon.
 *
 * @return {Element} The Menu icon.
 */
const Menu = ({ ...props }) => (
	<span className="icon" role="img">
		<HiMenuAlt1 {...props} />
	</span>
);

export default Menu;
