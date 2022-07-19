import { HiMail } from 'react-icons/hi';

/**
 * Render the Mail icon.
 *
 * @return {Element} The Mail icon.
 */
const Mail = ({ ...props }) => (
	<span className="icon" role="img">
		<HiMail {...props} />
	</span>
);

export default Mail;
