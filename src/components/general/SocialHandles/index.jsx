import PropTypes from 'prop-types';
import { Link, VisuallyHidden } from '@components/general';
import cx from 'classnames';
import { getSocialIcons } from '@utils';
import socialHandles from '@public/seeder/social_handles.json';
import styles from './styles.module.scss';

/**
 * Render the SocialHandles component.
 *
 * @return {Element} The SocialHandles component.
 */
const SocialHandles = ({ handles, className, ...props }) => (
	<div className={cx(styles.social_handles, className)} {...props}>
		{Object.entries(handles).map(([name, url]) => {
			const Icon = getSocialIcons(name);
			return Icon ? (
				<Link key={name} href={`/${url}`} newWindow>
					<Icon />
					<VisuallyHidden>{name}</VisuallyHidden>
				</Link>
			) : null;
		})}
	</div>
);

/**
 * Default Props.
 */
SocialHandles.defaultProps = {
	handles: socialHandles,
	className: '',
};

/**
 * Prop Types.
 */
SocialHandles.propTypes = {
	handles: PropTypes.shape({}),
	className: PropTypes.string,
};

export default SocialHandles;
