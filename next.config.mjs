/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "www.racing21.cz",
			},
		],
		domains: ["assets.tina.io"],
	},
};

export default nextConfig;
