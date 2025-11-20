"use client";
import { useDetectTheme } from "@/hooks/useDetectTheme";
import { Themetype } from "@/types/types";
import React, { createContext, ReactNode } from "react";

export const themecontext = createContext<Themetype | null>(null);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const { theme, setTheme } = useDetectTheme();

	return (
		<themecontext.Provider value={{ theme, setTheme }}>
			{children}
		</themecontext.Provider>
	);
};

export default ThemeProvider;
