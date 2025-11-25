"use client";
import { ThemeContext } from "@/app/_context/ThemeProvider";
import { useContext } from "react";

export function useAppTheme() {
	const value = useContext(ThemeContext);
	if (!value)
		throw new Error("Theme context was used outside its defined scope");
	return value;
}
