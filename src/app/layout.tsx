import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navigation from "@/app/ui/Navigation";
import Footer from "@/app/ui/Footer";

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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>
				<Navigation />
				<main className={"flex flex-col"}>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
