import { useEffect, useState } from "react";
import { Themetype } from "@/types/types";

export function useDetectTheme(): Themetype {
	const [theme, setTheme] = useState<"light" | "dark">(() => {
		if (typeof window === "undefined") return "light";

		const stored = localStorage.getItem("theme") as "light" | "dark" | null;
		if (stored) return stored;

		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;
		return prefersDark ? "dark" : "light";
	});

	useEffect(() => {
		localStorage.setItem("theme", theme);
	}, [theme]);

	return { theme, setTheme };
}
