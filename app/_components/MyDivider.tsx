import { Divider } from "antd";
import React from "react";

const MyDivider = ({ size }: { size: number }) => {
	return (
		<div className={`sm:w-[${size}px] max-sm:w-[${size / 3}px] mx-auto my-12`}>
			<Divider />
		</div>
	);
};

export default MyDivider;
