import { SiNissan } from 'react-icons/si';

/**
 * Render the Nissan icon.
 *
 * @return {Element} The Nissan icon.
 */
const Nissan = ({ ...props }) => (
	<span className="icon" role="img">
		<SiNissan {...props} />
	</span>
);

export default Nissan;
