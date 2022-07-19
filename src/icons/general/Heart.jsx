import { HiOutlineHeart } from 'react-icons/hi';

/**
 * Render the Heart icon.
 *
 * @return {Element} The Heart icon.
 */
const Heart = ({ ...props }) => (
	<span className="icon" role="img">
		<HiOutlineHeart {...props} />
	</span>
);

export default Heart;
