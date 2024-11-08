/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "www.racing21.cz",
			},
			{
				protocol: "https",
				hostname: "storage.byznys21.net",
			},
		],
		domains: ["assets.tina.io", "res.cloudinary.com"],
	},
};

export default nextConfig;
