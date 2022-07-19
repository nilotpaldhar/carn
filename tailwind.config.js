const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const tailwindBootstrapGrid = require('tailwind-bootstrap-grid');
const tailwindScrollbar = require('tailwind-scrollbar');

/** Backface Visibility Plugin. */
const backfaceVisibility = plugin(({ addUtilities }) => {
	addUtilities({
		'.backface-visible': {
			'backface-visibility': 'visible',
		},
		'.backface-hidden': {
			'backface-visibility': 'hidden',
		},
	});
});

/**
 * Tailwind config object.
 */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/templates/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/pages/**/*.{css,scss}',
		'./src/templates/**/*.{css,scss}',
		'./src/components/**/*.{css,scss}',
		'./src/styles/**/*.{css,scss}',
	],
	theme: {
		extend: {
			screens: {
				sm: '576px',
				md: '768px',
				lg: '992px',
				xl: '1200px',
				xxl: '1400px',
			},
			colors: {
				primary: {
					50: '#FFE3E0',
					100: '#FFB7B2',
					200: '#FD8F81',
					300: '#FB6950',
					400: '#F94520',
					500: '#DF1E06',
					600: '#AF0A04',
					700: '#7D0207',
					800: '#4D0009',
					900: '#20000A',
				},
			},
			fontFamily: {
				sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
			},
			boxShadow: {},
			animation: {
				'slide-in-down': 'slide-in-down 300ms linear',
			},
			keyframes: {
				'slide-in-down': {
					'0%': {
						transform: 'translate3d(0, -100%, 0)',
					},
					'100%': {
						transform: 'translate3d(0, 0, 0)',
					},
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	corePlugins: {
		container: false,
	},
	plugins: [tailwindBootstrapGrid(), tailwindScrollbar, backfaceVisibility],
};
