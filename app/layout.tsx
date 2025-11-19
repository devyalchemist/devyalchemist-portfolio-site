import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
import HomeHeader from "./_components/HomeHeader";

const lobster = Merriweather({
	weight: "400",
	variable: "--test-font",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		template: "%s | devyalchemist",
		default: "devyalchemist",
	},
	description: "my professional outlook",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${lobster.variable}  antialiased`}>
				<HomeHeader />
				{children}
			</body>
		</html>
	);
}
