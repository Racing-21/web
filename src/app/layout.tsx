import type { Metadata, Viewport } from "next";
import { FC } from "react";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Script from "next/script";
import { EnvironmentProvider } from "@/components/EnvironmentProvider";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Racing21",
	description: "Web závodního týmu Racing21",
	// Icons
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
		other: [
			{
				rel: "apple-touch-icon-precomposed",
				url: "/apple-touch-icon-precomposed.png",
			},
		],
	},

	// Manifest
	manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1.0,
};

interface RootLayoutProps {
	children: React.ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>
				<Script
					src="https://media-library.cloudinary.com/global/all.js"
					strategy="beforeInteractive"
				/>
				<EnvironmentProvider />
				<Navigation />
				<main className="flex flex-col">{children}</main>
				<Footer />
			</body>
		</html>
	);
};

export default RootLayout;
