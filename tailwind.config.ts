/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#94A684",
				secondary: "#AEC3AE",
				tertiary: "#E4E4D0",
				important: "#00916E",
				background: "#FFEEF4",
			},
		},
	},

	plugins: [],
};
