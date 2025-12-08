"use client";
import { Divider } from "antd";

import {
	faHeart as faHeartRegular,
	faComment as faCommentOutline,
	faBookmark as faBookmarkOuline,
} from "@fortawesome/free-regular-svg-icons";
import React, { useState } from "react";
import TextShortener from "./TextShortener";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "@/components/ui/card";
const content =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iuretempore hic consectetur numquam, facilis laboriosam quisquam eaqueid, repudiandae beatae illum rerum inventore sequi necessitatibusenim reiciendis aspernatur, eveniet distinctio.";
const BlogCard = ({ post }) => {
	const [stats, setStats] = useState({
		commentCount: 0,
		likesCount: 0,
		bookmarksCount: 0,
	});
	return (
		<Card className="sm:w-[44rem] p-4 w-full">
			<div>
				<h1 className="text-[1.2rem]">{post.title}</h1>
				<p>@gospeluo</p>
			</div>
			<div className="divide-accent/80 flex flex-col  divide-y">
				<div className="flex pb-6 justify-end items-end">
					<div className="flex w-[120px] justify-between">
						<div>
							<FontAwesomeIcon
								className="w-4 aspect-square"
								icon={faCommentOutline}
							/>
							<span>{stats.commentCount}</span>
						</div>
						<div>
							<FontAwesomeIcon
								className="w-4 aspect-square"
								icon={faHeartRegular}
							/>
							<span>{stats.likesCount}</span>
						</div>
						<div>
							<FontAwesomeIcon
								className="w-4 aspect-square"
								icon={faBookmarkOuline}
							/>
							<span>{stats.bookmarksCount}</span>
						</div>
					</div>
				</div>
				<TextShortener
					link={`blog/${post.slug.current}`}
					wordCount={10}
					text={content}
				/>
			</div>
		</Card>
	);
};

export default BlogCard;
