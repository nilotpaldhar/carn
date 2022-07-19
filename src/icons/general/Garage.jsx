import { GiMechanicGarage } from 'react-icons/gi';

/**
 * Render the Garage icon.
 *
 * @return {Element} The Garage icon.
 */
const Garage = ({ ...props }) => (
	<span className="icon" role="img">
		<GiMechanicGarage {...props} />
	</span>
);

export default Garage;
