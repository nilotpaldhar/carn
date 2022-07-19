import Head from 'next/head';
import PropTypes from 'prop-types';
import resolveConfig from 'tailwindcss/resolveConfig';
import { Layout } from '@components/layout';
import { RouteProgress } from '@components/feedback';
import tailwindConfig from '../../tailwind.config';

/** Root Styles */
import '@styles/tailwindcss/core.scss';
import '@styles/slick-slider.scss';
import '@styles/global.scss';

/** Get Tailwindcss Config. */
const fullConfig = resolveConfig(tailwindConfig);

/**
 * Render the App component.
 *
 * @return {Element} The App component.
 */
const App = ({ Component, pageProps }) => {
	/** Site Name. */
	const sitename = process.env.NEXT_PUBLIC_SITE_NAME;
	const title = `${sitename} | Homepage`;

	/** Theme Color. */
	const color = fullConfig?.theme?.colors?.primary[400] ?? '#000000';

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="theme-color" content={color} />
				<link rel="shortcut icon" href="/images/favicon.ico" />
			</Head>
			<RouteProgress />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
};

/**
 * Prop Types.
 */
App.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.shape({}).isRequired,
};

export default App;
