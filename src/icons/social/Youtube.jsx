import { AiFillYoutube } from 'react-icons/ai';

/**
 * Render the Youtube icon.
 *
 * @return {Element} The Youtube icon.
 */
const Youtube = ({ ...props }) => (
	<span className="icon" role="img">
		<AiFillYoutube {...props} />
	</span>
);

export default Youtube;
