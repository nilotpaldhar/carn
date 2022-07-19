import { AiOutlineSmile } from 'react-icons/ai';

/**
 * Render the Smile icon.
 *
 * @return {Element} The Smile icon.
 */
const Smile = ({ ...props }) => (
	<span className="icon" role="img">
		<AiOutlineSmile {...props} />
	</span>
);

export default Smile;
