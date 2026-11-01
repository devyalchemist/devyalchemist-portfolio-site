"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
	className?: string;
	fallbackHref?: string;
}

export default function BackButton({
	className = "",
	fallbackHref = "/",
}: BackButtonProps) {
	const router = useRouter();

	const handleClick = () => {
		if (typeof window !== "undefined" && window.history.length > 1) {
			router.back();
		} else {
			router.push(fallbackHref);
		}
	};

	return (
		<button
			onClick={handleClick}
			aria-label="Go back"
			className={`inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-md ${className}`}>
			<ArrowLeft className="w-4 h-4" />
		</button>
	);
}
