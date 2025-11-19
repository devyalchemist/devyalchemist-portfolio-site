import React, { ReactNode } from "react";

const Box = ({ children }: { children: ReactNode }) => {
	return <div className="sm:p-0 px-4 max-w-[1440px] mx-auto">{children}</div>;
};

export default Box;
