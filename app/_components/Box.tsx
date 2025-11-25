import React, { ReactNode } from "react";

const Box = ({
	children,
	fullHeight = true,
}: {
	children: ReactNode;
	fullHeight?: boolean;
}) => {
	return (
		<div
			className={
				fullHeight
					? "sm:p-0 px-4 max-w-[1440px] mx-auto h-dvh"
					: "sm:p-0 px-4 max-w-[1440px] mx-auto"
			}>
			{children}
		</div>
	);
};

export default Box;
