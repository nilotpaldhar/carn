import { HiOutlineMinusSm } from 'react-icons/hi';

/**
 * Render the Minus icon.
 *
 * @return {Element} The Minus icon.
 */
const Minus = ({ ...props }) => (
	<span className="icon" role="img">
		<HiOutlineMinusSm {...props} />
	</span>
);

export default Minus;
