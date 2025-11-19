"use client";
import { Button } from "@/components/ui/button";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Box from "../_components/Box";
import { Card, Divider, Input } from "antd";
import { faShareFromSquare } from "@fortawesome/free-regular-svg-icons/faShareFromSquare";

import TextShortener from "../_components/blog/TextShortener";
import BlogCard from "../_components/blog/BlogCard";

const page = () => {
	return (
		<section>
			<div className="bg-black flex items-center justify-center text-white h-[120px] [font-family:var(--test-font)] relative">
				welcome to my tech-digest
				<Button className="aspect-square w-8 absolute top-[20px] left-[20px]">
					<FontAwesomeIcon icon={faArrowLeft} />
				</Button>
			</div>
			<Box>
				<BlogCard />
			</Box>
		</section>
	);
};

export default page;
