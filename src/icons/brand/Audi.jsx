import { SiAudi } from 'react-icons/si';

/**
 * Render the Audi icon.
 *
 * @return {Element} The Audi icon.
 */
const Audi = ({ ...props }) => (
	<span className="icon" role="img">
		<SiAudi {...props} />
	</span>
);

export default Audi;
