"use client";
import { themecontext } from "@/app/_context/ThemeProvider";
import { useContext } from "react";

export function useTheme() {
	const value = useContext(themecontext);
	if (!value) throw new Error("value was used outside the defined context");
	return value;
}
