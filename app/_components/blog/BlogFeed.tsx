"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { PostSummary } from "@/types/blog";
import BlogCard from "./BlogCard";
import {
	Search,
	Sparkles,
	SlidersHorizontal,
	BookOpen,
	LayoutGrid,
	List,
	ChevronDown,
	ChevronUp,
	TrendingUp,
} from "lucide-react";

interface BlogFeedProps {
	initialPosts: PostSummary[];
}

export default function BlogFeed({ initialPosts }: BlogFeedProps) {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedTag, setSelectedTag] = useState<string>("All");
	const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
	const [showAllTags, setShowAllTags] = useState<boolean>(false);

	// Calculate weekly popularity scores for tags
	// - Posts within the current 7-day window receive high weekly weight (5x)
	// - Read time adds depth weight
	// - Resets & refreshes weekly based on the rolling 7-day publication window
	const { popularTags, otherTags, allTags } = useMemo(() => {
		const scores: Record<string, number> = {};
		const now = Date.now();

		initialPosts.forEach((post) => {
			if (!post.tags || post.tags.length === 0) return;

			const postTime = post.publishedAt
				? new Date(post.publishedAt).getTime()
				: now;
			const daysAgo = Math.max(0, (now - postTime) / (1000 * 60 * 60 * 24));

			// Weekly weighting:
			// ≤ 7 days (current week): 5 points
			// 8-14 days (last week): 3 points
			// older: 1 point
			const recencyWeight = daysAgo <= 7 ? 5 : daysAgo <= 14 ? 3 : 1;
			const readMinutes = post.readTime ? parseInt(post.readTime) || 2 : 2;
			const postScore = recencyWeight * 2 + readMinutes;

			post.tags.forEach((tag) => {
				const cleanTag = tag.trim();
				if (!cleanTag) return;
				scores[cleanTag] = (scores[cleanTag] || 0) + postScore;
			});
		});

		// Sort tags by calculated popularity descending
		const sorted = Object.entries(scores)
			.sort((a, b) => b[1] - a[1])
			.map(([tag]) => tag);

		return {
			popularTags: sorted.slice(0, 3), // Top 3 popular tags by default
			otherTags: sorted.slice(3),      // Remaining tags
			allTags: ["All", ...sorted],
		};
	}, [initialPosts]);

	// Filtered posts
	const filteredPosts = useMemo(() => {
		return initialPosts.filter((post) => {
			const matchesTag =
				selectedTag === "All" ||
				post.tags?.some((t) => t.toLowerCase() === selectedTag.toLowerCase());

			const query = searchQuery.trim().toLowerCase();
			const matchesQuery =
				!query ||
				post.title.toLowerCase().includes(query) ||
				post.excerpt?.toLowerCase().includes(query) ||
				post.tags?.some((t) => t.toLowerCase().includes(query));

			return matchesTag && matchesQuery;
		});
	}, [initialPosts, selectedTag, searchQuery]);

	// If no posts have been published yet in Sanity, show the welcoming CMS setup guide
	if (initialPosts.length === 0) {
		return (
			<div className="py-16 px-4">
				<div className="max-w-2xl mx-auto rounded-3xl border border-dashed border-orange-500/40 bg-white/70 dark:bg-zinc-900/60 p-8 sm:p-12 text-center shadow-lg">
					<div className="w-16 h-16 rounded-2xl bg-orange-500/10 text-orange-500 mx-auto flex items-center justify-center mb-6">
						<BookOpen className="w-8 h-8" />
					</div>
					<h3 className="text-2xl font-bold mb-3 [font-family:var(--mono-font)]">
						Ready for your first post!
					</h3>
					<p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
						Your Sanity Studio headless CMS is connected. Start the studio
						locally or deploy it to draft and publish your first technical article.
					</p>
					<div className="p-4 rounded-xl bg-zinc-100 dark:bg-zinc-800 font-mono text-xs text-left max-w-md mx-auto space-y-2 mb-6 text-foreground">
						<p className="text-muted-foreground">// Run your Sanity Studio:</p>
						<p className="text-orange-500 font-bold">cd devyalchemist-blog-studio</p>
						<p className="text-orange-500 font-bold">npm run dev</p>
						<p className="text-muted-foreground pt-1">// Then open http://localhost:3333 to create a post!</p>
					</div>
					<div className="flex flex-wrap gap-4 justify-center">
						<Link
							href="/"
							className="px-6 py-2.5 rounded-full text-xs font-mono font-medium bg-zinc-200 dark:bg-zinc-800 text-foreground hover:opacity-80 transition-opacity">
							Return Home
						</Link>
					</div>
				</div>
			</div>
		);
	}

	const featuredPost =
		viewMode === "grid" &&
		filteredPosts.length > 0 &&
		selectedTag === "All" &&
		!searchQuery
			? filteredPosts[0]
			: null;

	const remainingPosts = featuredPost
		? filteredPosts.slice(1)
		: filteredPosts;

	// Tags to display: "All" + Top 3 Popular tags (or all if expanded, or if active tag is in otherTags)
	const visibleTags = useMemo(() => {
		if (showAllTags) return allTags;
		const base = ["All", ...popularTags];
		// If user selected a tag that is outside top 3, keep it visible so they know what is selected
		if (selectedTag !== "All" && !base.includes(selectedTag)) {
			base.push(selectedTag);
		}
		return base;
	}, [showAllTags, allTags, popularTags, selectedTag]);

	return (
		<div className="space-y-8">
			{/* Filter, Search & View Switcher Bar */}
			<div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center bg-white/70 dark:bg-[#0d1117]/80 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-black/10 dark:border-white/10 shadow-sm">
				{/* Search Input */}
				<div className="relative w-full lg:w-80">
					<Search className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
					<input
						type="text"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						placeholder="Filter by keyword, #tag, topic..."
						className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-zinc-100 dark:bg-zinc-800/80 text-foreground border border-transparent focus:border-orange-500/50 focus:outline-none transition-all placeholder:text-muted-foreground font-mono"
					/>
				</div>

				{/* Middle: Top 3 Popular Tags + "All" */}
				<div className="flex items-center gap-1.5 flex-wrap overflow-x-auto pb-1 lg:pb-0 scrollbar-none flex-1 lg:justify-center">
					<div className="flex items-center gap-1 text-[11px] font-mono text-muted-foreground mr-1 hidden sm:flex">
						<TrendingUp className="w-3 h-3 text-orange-500" />
						<span className="text-[10px] uppercase tracking-wider">Top:</span>
					</div>

					{visibleTags.map((tag) => {
						const isActive = selectedTag === tag;
						return (
							<button
								key={tag}
								onClick={() => setSelectedTag(tag)}
								className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all flex-shrink-0 cursor-pointer ${
									isActive
										? "bg-orange-500 text-white shadow-md shadow-orange-500/20 font-bold"
										: "bg-zinc-100 dark:bg-zinc-800/60 text-muted-foreground hover:text-foreground"
								}`}>
								{tag === "All" ? tag : `#${tag}`}
							</button>
						);
					})}

					{/* Expand / Collapse remaining tags */}
					{otherTags.length > 0 && (
						<button
							onClick={() => setShowAllTags((prev) => !prev)}
							title={showAllTags ? "Show top 3 tags only" : `Show all ${allTags.length - 1} tags`}
							className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-[11px] font-mono bg-zinc-200/70 dark:bg-zinc-800 text-muted-foreground hover:text-foreground transition-all cursor-pointer">
							<span>{showAllTags ? "Less" : `+${otherTags.length} more`}</span>
							{showAllTags ? (
								<ChevronUp className="w-3 h-3" />
							) : (
								<ChevronDown className="w-3 h-3" />
							)}
						</button>
					)}
				</div>

				{/* Right: Grid vs List View Mode Toggle */}
				<div className="flex items-center justify-end gap-1 bg-zinc-100 dark:bg-zinc-800/80 p-1 rounded-xl self-end lg:self-auto border border-black/5 dark:border-white/5">
					<button
						onClick={() => setViewMode("grid")}
						title="Grid View"
						aria-label="Grid View"
						className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
							viewMode === "grid"
								? "bg-white dark:bg-zinc-700 text-orange-500 font-bold shadow-sm"
								: "text-muted-foreground hover:text-foreground"
						}`}>
						<LayoutGrid className="w-3.5 h-3.5" />
						<span className="hidden sm:inline">Grid</span>
					</button>

					<button
						onClick={() => setViewMode("list")}
						title="List View"
						aria-label="List View"
						className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
							viewMode === "list"
								? "bg-white dark:bg-zinc-700 text-orange-500 font-bold shadow-sm"
								: "text-muted-foreground hover:text-foreground"
						}`}>
						<List className="w-3.5 h-3.5" />
						<span className="hidden sm:inline">List</span>
					</button>
				</div>
			</div>

			{/* Count / Status Info */}
			<div className="flex items-center justify-between text-xs font-mono text-muted-foreground px-1">
				<span>
					Showing {filteredPosts.length} of {initialPosts.length} {initialPosts.length === 1 ? "entry" : "entries"}
				</span>
				<span className="text-[11px] text-orange-500/80">
					// view: {viewMode} • top 3 weekly tags active
				</span>
			</div>

			{/* Featured Article (in Grid Mode when applicable) */}
			{featuredPost && (
				<section>
					<BlogCard post={featuredPost} featured={true} viewMode="grid" />
				</section>
			)}

			{/* Articles Display: Grid vs List */}
			{filteredPosts.length > 0 ? (
				viewMode === "grid" ? (
					<section>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{remainingPosts.map((post) => (
								<BlogCard key={post._id} post={post} viewMode="grid" />
							))}
						</div>
					</section>
				) : (
					<section className="space-y-4">
						{filteredPosts.map((post) => (
							<BlogCard key={post._id} post={post} viewMode="list" />
						))}
					</section>
				)
			) : (
				<div className="text-center py-16 px-4 rounded-2xl border border-black/5 dark:border-white/5 bg-white/40 dark:bg-zinc-900/40">
					<Sparkles className="w-8 h-8 text-orange-400 mx-auto mb-3 opacity-60" />
					<h4 className="text-lg font-bold mb-1 [font-family:var(--mono-font)]">No articles found</h4>
					<p className="text-muted-foreground text-xs sm:text-sm font-mono">
						No entries matched query: &quot;{searchQuery}&quot;
					</p>
					<button
						onClick={() => {
							setSearchQuery("");
							setSelectedTag("All");
						}}
						className="mt-4 px-4 py-2 rounded-xl text-xs font-mono bg-zinc-200 dark:bg-zinc-800 text-foreground hover:bg-orange-500 hover:text-white transition-colors cursor-pointer">
						$ reset --all
					</button>
				</div>
			)}
		</div>
	);
}
