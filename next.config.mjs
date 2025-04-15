/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: "standalone",
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

	// Add headers configuration
	async headers() {
		return [
			{
				source: "/:path*",
				headers: [
					{
						key: "Content-Security-Policy",
						value: [
							"default-src 'self'",
							"script-src 'self' 'unsafe-inline' 'unsafe-eval' https://media-library.cloudinary.com",
							"style-src 'self' 'unsafe-inline'",
							"img-src 'self' data: https://storage.byznys21.net http://www.racing21.cz https://assets.tina.io https://res.cloudinary.com",
							"font-src 'self' https://fonts.gstatic.com",
							"connect-src 'self' https://fonts.googleapis.com",
							"frame-src 'self'",
							"object-src 'none'",
						].join("; "),
					},
				],
			},
		];
	},
};

export default nextConfig;
