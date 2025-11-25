"use client";
import { Tooltip } from "antd";
import React, { ReactNode, useState } from "react";

const TextShortener = ({
	text,
	wordCount,
}: {
	text: string;
	wordCount: number;
}) => {
	const [isFull, setIsFull] = useState(false);

	const content = !isFull
		? text.split(" ").slice(0, wordCount).join(" ") + "..."
		: text;
	const title = text
		.split(" ")
		.slice(wordCount, wordCount + 10)
		.join(" ");
	return (
		<p className="pt-4">
			{`${content}`}{" "}
			{
				<span
					className="text-blue-400 hover:cursor-pointer	 underline"
					onClick={() => setIsFull((prev) => !prev)}>
					read more
				</span>
			}
		</p>
	);
};

export default TextShortener;
