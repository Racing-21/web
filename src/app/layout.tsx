import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navigation from "@/app/ui/navigation";
import Footer from "@/app/ui/Footer";
import Script from "next/script";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Racing21",
	description: "Web závodního týmu Racing21",
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
