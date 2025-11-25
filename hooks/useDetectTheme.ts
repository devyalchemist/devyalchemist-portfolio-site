"use client";
import { useEffect, useState } from "react";
import { Themetype } from "@/types/types";
export function useDetectTheme(): Themetype {
	const [appTheme, setAppTheme] = useState<"light" | "dark">("light");

	useEffect(() => {
		localStorage.setItem("theme", appTheme);
		if (appTheme === "dark") {
			document.documentElement.classList.add("dark");
		}
	}, [appTheme]);

	return { appTheme, setAppTheme };
}
