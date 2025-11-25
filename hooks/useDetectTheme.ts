"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function useDetectTheme() {
	const [theme, setAppTheme] = useState<"light" | "dark">(() => {
		const stored = localStorage.getItem("theme") as "light" | "dark" | null;
		if (stored) return stored;

		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;
		return prefersDark ? "dark" : "light";
	});

	useEffect(() => {
		localStorage.setItem("theme", theme);
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		}
	}, [theme]);

	return { theme, setAppTheme };
}
