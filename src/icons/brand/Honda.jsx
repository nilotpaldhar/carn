import { SiHonda } from 'react-icons/si';

/**
 * Render the Honda icon.
 *
 * @return {Element} The Honda icon.
 */
const Honda = ({ ...props }) => (
	<span className="icon" role="img">
		<SiHonda {...props} />
	</span>
);

export default Honda;
