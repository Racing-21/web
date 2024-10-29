import type { Config } from "tailwindcss";
import * as Flowbite from "flowbite-react/tailwind";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		Flowbite.content(),
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				red: {
					600: "#dc2626",
					900: "var(--redPrimary)",
				},
				grayPrimary: "var(--grayPrimary)",
			},
		},
		fontFamily: {
			sans: ["Inter var"],
		},
	},
	plugins: [require("@tailwindcss/forms"), Flowbite.plugin()],
};
export default config;
