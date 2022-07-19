import { AiOutlineTwitter } from 'react-icons/ai';

/**
 * Render the Twitter icon.
 *
 * @return {Element} The Twitter icon.
 */
const Twitter = ({ ...props }) => (
	<span className="icon" role="img">
		<AiOutlineTwitter {...props} />
	</span>
);

export default Twitter;
