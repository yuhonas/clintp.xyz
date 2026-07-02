/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				surface: '#131313',
				primary: '#CEBDFF',
				'primary-container': '#A78BFA',
				'primary-fixed': '#E8DDFF',
				'surface-container-lowest': '#0E0E0E',
				'surface-container-low': '#1C1B1B',
				'surface-container-high': '#2A2A2A',
				'surface-container-highest': '#353534',
			},
			fontFamily: {
				display: ['"Space Grotesk"', 'sans-serif'],
				sans: ['Inter', 'sans-serif'],
				mono: ['"Fira Code"', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
			},
			borderRadius: {
				'sm': '0.25rem',
				'md': '0.5rem',
				'lg': '1rem',
			},
			boxShadow: {
				'diffused-glow': '0 0 40px -10px rgba(167, 139, 250, 0.08)',
			}
		},
	},
	plugins: [],
}

