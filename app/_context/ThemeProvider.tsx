"use client";

import { useDetectTheme } from "@/hooks/useDetectTheme";
import { Themetype } from "@/types/types";
import { createContext, ReactNode } from "react";

export const ThemeContext = createContext<Themetype | null>(null);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const { appTheme, setAppTheme } = useDetectTheme();
	return (
		<ThemeContext.Provider value={{ appTheme, setAppTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
