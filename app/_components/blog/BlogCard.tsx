"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PostSummary } from "@/types/blog";
import { urlForImage } from "@/lib/sanity/client";
import { ArrowUpRight, Calendar, Clock, Sparkles, Terminal } from "lucide-react";

interface BlogCardProps {
	post: PostSummary;
	featured?: boolean;
	viewMode?: "grid" | "list";
}

export default function BlogCard({
	post,
	featured = false,
	viewMode = "grid",
}: BlogCardProps) {
	const imageUrl = post.image
		? urlForImage(post.image).width(800).height(460).fit("crop").url()
		: null;

	const formattedDate = post.publishedAt
		? new Date(post.publishedAt).toLocaleDateString("en-US", {
				month: "short",
				day: "numeric",
				year: "numeric",
		  })
		: "Recent";

	const slug = post.slug?.current || "#";
	const excerpt =
		post.excerpt ||
		"Explore insights, architecture patterns, and technical deep-dives into modern web engineering.";

	// List View Variant
	if (viewMode === "list") {
		return (
			<article className="group relative rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-[#0d1117]/80 backdrop-blur-md p-4 sm:p-5 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-orange-500/40 hover:-translate-y-0.5">
				<div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
					{/* Thumbnail */}
					<Link
						href={`/blog/${slug}`}
						className="relative w-full sm:w-48 h-32 sm:h-28 rounded-xl overflow-hidden bg-zinc-900 flex-shrink-0 border border-black/5 dark:border-white/5">
						{imageUrl ? (
							<Image
								src={imageUrl}
								alt={post.title}
								fill
								sizes="(max-width: 640px) 100vw, 200px"
								className="object-cover transition-transform duration-500 group-hover:scale-105"
							/>
						) : (
							<div className="w-full h-full bg-gradient-to-br from-zinc-800 via-zinc-900 to-black flex items-center justify-center p-3">
								<Terminal className="w-6 h-6 text-orange-400/70" />
							</div>
						)}
					</Link>

					{/* Middle Content */}
					<div className="flex-1 min-w-0 space-y-2">
						{/* Meta & Tags */}
						<div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-muted-foreground">
							<span className="flex items-center gap-1 text-orange-500 dark:text-orange-400 font-semibold">
								<Calendar className="w-3 h-3" />
								{formattedDate}
							</span>
							<span>•</span>
							{post.readTime && (
								<>
									<span className="flex items-center gap-1">
										<Clock className="w-3 h-3" />
										{post.readTime}
									</span>
									<span>•</span>
								</>
							)}
							{post.tags && post.tags.length > 0 && (
								<div className="flex flex-wrap gap-1.5">
									{post.tags.slice(0, 3).map((tag, i) => (
										<span
											key={i}
											className="px-2 py-0.2 rounded text-[10px] bg-orange-500/10 text-orange-500 dark:text-orange-400 border border-orange-500/20">
											#{tag}
										</span>
									))}
								</div>
							)}
						</div>

						{/* Title */}
						<Link
							href={`/blog/${slug}`}
							className="block group-hover:text-orange-500 transition-colors">
							<h3 className="text-base sm:text-lg font-bold leading-snug text-foreground [font-family:var(--mono-font)] truncate sm:whitespace-normal">
								{post.title}
							</h3>
						</Link>

						{/* Excerpt */}
						<p className="text-muted-foreground text-xs sm:text-sm line-clamp-2 leading-relaxed">
							{excerpt}
						</p>
					</div>

					{/* Right Action */}
					<div className="sm:self-center flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-black/5 dark:border-white/5 flex-shrink-0">
						<Link
							href={`/blog/${slug}`}
							className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-foreground group-hover:bg-orange-500 group-hover:text-white transition-all shadow-sm">
							<span>Read</span>
							<ArrowUpRight className="w-3.5 h-3.5" />
						</Link>
					</div>
				</div>
			</article>
		);
	}

	// Featured Variant (used on Grid View top)
	if (featured) {
		return (
			<article className="group relative rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 bg-gradient-to-br from-zinc-50 to-white dark:from-[#0d1117] dark:to-zinc-950 p-4 sm:p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-orange-500/40">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
					{/* Image */}
					<div className="lg:col-span-7 relative h-[240px] sm:h-[320px] w-full rounded-2xl overflow-hidden bg-zinc-900 border border-black/5 dark:border-white/5">
						{imageUrl ? (
							<Image
								src={imageUrl}
								alt={post.title}
								fill
								sizes="(max-width: 1024px) 100vw, 60vw"
								className="object-cover transition-transform duration-500 group-hover:scale-105"
								priority
							/>
						) : (
							<div className="w-full h-full bg-gradient-to-br from-orange-500/20 via-zinc-900 to-black flex items-center justify-center p-8">
								<div className="text-center">
									<Sparkles className="w-10 h-10 text-orange-400 mx-auto mb-2 opacity-80" />
									<p className="font-mono text-xs uppercase tracking-widest text-zinc-400">
										Featured Article
									</p>
								</div>
							</div>
						)}
						<div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-black/75 text-orange-400 backdrop-blur-md border border-white/10">
							<Sparkles className="w-3 h-3" />
							<span>Featured</span>
						</div>
					</div>

					{/* Content */}
					<div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4">
						<div className="space-y-3">
							{/* Tags */}
							{post.tags && post.tags.length > 0 && (
								<div className="flex flex-wrap gap-2">
									{post.tags.slice(0, 3).map((tag, i) => (
										<span
											key={i}
											className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20">
											#{tag}
										</span>
									))}
								</div>
							)}

							<Link
								href={`/blog/${slug}`}
								className="block group-hover:text-orange-500 transition-colors">
								<h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight text-foreground [font-family:var(--mono-font)]">
									{post.title}
								</h2>
							</Link>

							<p className="text-muted-foreground text-xs sm:text-sm line-clamp-3 leading-relaxed">
								{excerpt}
							</p>
						</div>

						{/* Footer */}
						<div className="pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs text-muted-foreground font-mono">
							<div className="flex items-center gap-4">
								<span className="flex items-center gap-1.5">
									<Calendar className="w-3.5 h-3.5 text-orange-500" />
									{formattedDate}
								</span>
								{post.readTime && (
									<span className="flex items-center gap-1.5">
										<Clock className="w-3.5 h-3.5" />
										{post.readTime}
									</span>
								)}
							</div>

							<Link
								href={`/blog/${slug}`}
								className="inline-flex items-center gap-1 font-semibold text-foreground group-hover:text-orange-500 transition-colors">
								<span>Read</span>
								<ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
							</Link>
						</div>
					</div>
				</div>
			</article>
		);
	}

	// Standard Grid Card
	return (
		<article className="group flex flex-col h-full rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-white/70 dark:bg-[#0d1117]/80 backdrop-blur-sm p-4 sm:p-5 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-orange-500/40">
			{/* Thumbnail */}
			<Link
				href={`/blog/${slug}`}
				className="block relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-zinc-900 mb-4 border border-black/5 dark:border-white/5">
				{imageUrl ? (
					<Image
						src={imageUrl}
						alt={post.title}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						className="object-cover transition-transform duration-500 group-hover:scale-105"
					/>
				) : (
					<div className="w-full h-full bg-gradient-to-br from-zinc-800 via-zinc-900 to-black flex items-center justify-center p-4">
						<span className="font-mono text-xs uppercase tracking-wider text-zinc-500">
							devyalchemist
						</span>
					</div>
				)}
			</Link>

			{/* Tags */}
			<div className="flex flex-wrap gap-1.5 mb-2.5">
				{post.tags && post.tags.length > 0 ? (
					post.tags.slice(0, 2).map((tag, i) => (
						<span
							key={i}
							className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20">
							#{tag}
						</span>
					))
				) : (
					<span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-muted-foreground">
						#article
					</span>
				)}
			</div>

			{/* Title */}
			<Link
				href={`/blog/${slug}`}
				className="block mb-2 group-hover:text-orange-500 transition-colors">
				<h3 className="text-base sm:text-lg font-bold leading-snug line-clamp-2 text-foreground [font-family:var(--mono-font)]">
					{post.title}
				</h3>
			</Link>

			{/* Excerpt */}
			<p className="text-muted-foreground text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4 flex-1">
				{excerpt}
			</p>

			{/* Meta Footer */}
			<div className="pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[11px] text-muted-foreground font-mono mt-auto">
				<div className="flex items-center gap-3">
					<span className="flex items-center gap-1">
						<Calendar className="w-3 h-3 text-orange-500" />
						{formattedDate}
					</span>
					{post.readTime && (
						<span className="flex items-center gap-1">
							<Clock className="w-3 h-3" />
							{post.readTime}
						</span>
					)}
				</div>

				<Link
					href={`/blog/${slug}`}
					className="inline-flex items-center gap-0.5 font-medium text-foreground group-hover:text-orange-500 transition-colors">
					<span>Read</span>
					<ArrowUpRight className="w-3.5 h-3.5" />
				</Link>
			</div>
		</article>
	);
}
