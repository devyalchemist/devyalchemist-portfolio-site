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
		<p>
			{`${content}`}{" "}
			{
				<Tooltip title={title}>
					<span
						className="text-blue-400 underline"
						onClick={() => setIsFull((prev) => !prev)}>
						read more
					</span>
				</Tooltip>
			}
		</p>
	);
};

export default TextShortener;
