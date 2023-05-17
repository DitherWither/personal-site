const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						"--tw-prose-links": theme("colors.fuchsia.600"),
						"--tw-prose-invert-links": theme("colors.fuchsia.400"),

						"--tw-prose-bullets": theme("colors.cyan.900"),
						"--tw-prose-invert-bullets": theme("colors.cyan.50"),

						"--tw-prose-body": theme("colors.cyan.900"),
						"--tw-prose-invert-body": theme("colors.cyan.50"),
					}
				}
			})
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
