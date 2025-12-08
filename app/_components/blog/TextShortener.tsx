"use client";
import { Button } from "@/components/ui/button";
import { Tooltip } from "antd";
import Link from "next/link";
import React, { ReactNode, useState } from "react";

const TextShortener = ({
	text,
	wordCount,
	link,
}: {
	text: string;
	wordCount: number;
	link: string;
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
		<div>
			<p className="pt-4">
				{`${content}`}{" "}
				{
					<span
						className="text-blue-400 hover:cursor-pointer	 underline"
						onClick={() => setIsFull((prev) => !prev)}>
						{!isFull ? "read more" : "visit"}
					</span>
				}
			</p>
			<Link href={link}>
				<Button variant={"link"}>Visit</Button>
			</Link>
		</div>
	);
};

export default TextShortener;
