import type { Metadata } from "next";
import { Merriweather, Space_Mono } from "next/font/google";
import "@/app/globals.css";
import HomeHeader from "@/app/_components/HomeHeader";
import Footer from "@/app/_components/Footer";
import ThemeProvider from "@/app/_context/ThemeProvider";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import BackButton from "../../_components/BackButton";
import SidePanel from "../../_components/blog/SidePanel";

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
	// const router = useRouter();

	return <div className="sticky top-0 z-20">{children}</div>;
}
