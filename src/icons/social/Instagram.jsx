import { AiFillInstagram } from 'react-icons/ai';

/**
 * Render the Instagram icon.
 *
 * @return {Element} The Instagram icon.
 */
const Instagram = ({ ...props }) => (
	<span className="icon" role="img">
		<AiFillInstagram {...props} />
	</span>
);

export default Instagram;
