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
							"script-src 'self' 'unsafe-inline' 'unsafe-eval' https://media-library.cloudinary.com https://maps.googleapis.com https://maps.gstatic.com",
							"style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
							"img-src 'self' data: https://storage.byznys21.net http://www.racing21.cz https://assets.tina.io https://res.cloudinary.com https://maps.googleapis.com https://maps.gstatic.com https://*.googleapis.com https://*.gstatic.com",
							"font-src 'self' https://fonts.gstatic.com",
							"connect-src 'self' https://fonts.googleapis.com https://maps.googleapis.com",
							"frame-src 'self' https://www.google.com",
							"object-src 'none'",
						].join("; "),
					},
				],
			},
		];
	},
};

export default nextConfig;
