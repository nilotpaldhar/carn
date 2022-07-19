import { IoCarOutline } from 'react-icons/io5';

/**
 * Render the Car icon.
 *
 * @return {Element} The Car icon.
 */
const Car = ({ ...props }) => (
	<span className="icon" role="img">
		<IoCarOutline {...props} />
	</span>
);

export default Car;
