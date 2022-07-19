import { HiStar } from 'react-icons/hi';

/**
 * Render the StarFilled icon.
 *
 * @return {Element} The StarFilled icon.
 */
const StarFilled = ({ ...props }) => (
	<span className="icon" role="img">
		<HiStar {...props} />
	</span>
);

export default StarFilled;
