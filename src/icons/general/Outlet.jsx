import { BsShopWindow } from 'react-icons/bs';

/**
 * Render the Outlet icon.
 *
 * @return {Element} The Outlet icon.
 */
const Outlet = ({ ...props }) => (
	<span className="icon" role="img">
		<BsShopWindow {...props} />
	</span>
);

export default Outlet;
