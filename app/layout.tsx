import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";

import { Merriweather, Space_Mono } from "next/font/google";
import "./globals.css";
import HomeHeader from "./_components/HomeHeader";
// import ThemeProvider from "./_context/ThemeProvider";
import { useTheme } from "@/hooks/useTheme";

const lobster = Merriweather({
	weight: "400",
	variable: "--test-font",
	subsets: ["latin"],
});
const monospace = Space_Mono({
	weight: "400",
	variable: "--mono-font",
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
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${lobster.variable} ${monospace.variable} relative  antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					<HomeHeader />
					<div className="py-16">{children}</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
