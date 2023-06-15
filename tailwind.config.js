/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
	theme: {
		screens: {
			xs: '480px',

			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1367px',
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			colors: {
				primary: 'hsla(120, 100% ,25%,1)',
				secondary: 'hsla(330, 100% ,71%,1)',
			},
		},
	},
	// eslint-disable-next-line no-undef
	plugins: [require('daisyui')],
};
