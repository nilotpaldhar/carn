import { HiOutlinePlusSm } from 'react-icons/hi';

/**
 * Render the Plus icon.
 *
 * @return {Element} The Plus icon.
 */
const Plus = ({ ...props }) => (
	<span className="icon" role="img">
		<HiOutlinePlusSm {...props} />
	</span>
);

export default Plus;
