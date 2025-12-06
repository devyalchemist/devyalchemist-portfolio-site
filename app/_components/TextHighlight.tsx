import { ReactNode } from "react";

const TextHighlight = ({ children }: { children: ReactNode }) => {
	return <span className="text-bold dark:text-white">{children}</span>;
};

export default TextHighlight;
