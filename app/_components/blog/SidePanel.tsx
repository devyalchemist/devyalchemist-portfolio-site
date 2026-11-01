import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PostSummary } from "@/types/blog";
import { urlForImage } from "@/lib/sanity/client";
import {
	Calendar,
	Sparkles,
	BookOpen,
	ArrowRight,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
	faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

interface SidePanelProps {
	recentPosts?: PostSummary[];
	tags?: string[];
}

export default function SidePanel({
	recentPosts = [],
	tags = [],
}: SidePanelProps) {
	return (
		<aside className="w-full space-y-6 lg:pl-4">
			{/* Author Card */}
			<div className="p-5 rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md shadow-sm">
				<div className="flex items-center gap-3 mb-3">
					<div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-orange-500/50">
						<Image
							src="/profilepic.png"
							alt="Gospel Ugwuja (devyalchemist)"
							fill
							className="object-cover"
						/>
					</div>
					<div>
						<h4 className="font-bold text-sm text-foreground [font-family:var(--test-font)]">
							Gospel Ugwuja
						</h4>
						<p className="text-xs font-mono text-orange-500">@devyalchemist</p>
					</div>
				</div>
				<p className="text-xs text-muted-foreground leading-relaxed mb-4">
					Full-Stack Engineer & AI Architect crafting high-performance edge web
					systems, reactive apps, and cloud pipelines.
				</p>
				<div className="flex items-center gap-2 pt-3 border-t border-black/5 dark:border-white/5">
					<a
						href="https://github.com/devyalchemist"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub Profile"
						className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-foreground hover:text-orange-500 transition-colors">
						<FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
					</a>
					<a
						href="https://x.com/devyalchemist"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="X Profile"
						className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-foreground hover:text-orange-500 transition-colors">
						<FontAwesomeIcon icon={faXTwitter} className="w-3.5 h-3.5" />
					</a>
					<a
						href="https://www.linkedin.com/in/gospel-ugwuja-devyalchemist/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn Profile"
						className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-foreground hover:text-orange-500 transition-colors">
						<FontAwesomeIcon icon={faLinkedin} className="w-3.5 h-3.5" />
					</a>
				</div>
			</div>

			{/* Post Tags */}
			{tags && tags.length > 0 && (
				<div className="p-5 rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md shadow-sm">
					<div className="flex items-center gap-2 mb-3 text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground">
						<Sparkles className="w-3.5 h-3.5 text-orange-500" />
						<span>Topics In This Article</span>
					</div>
					<div className="flex flex-wrap gap-1.5">
						{tags.map((tag, i) => (
							<span
								key={i}
								className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-foreground border border-black/5 dark:border-white/5">
								#{tag}
							</span>
						))}
					</div>
				</div>
			)}

			{/* Recent Articles */}
			{recentPosts && recentPosts.length > 0 && (
				<div className="p-5 rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md shadow-sm">
					<div className="flex items-center gap-2 mb-4 text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground">
						<BookOpen className="w-3.5 h-3.5 text-orange-500" />
						<span>More from the Digest</span>
					</div>
					<div className="space-y-4">
						{recentPosts.map((post) => {
							const miniImg = post.image
								? urlForImage(post.image).width(120).height(90).fit("crop").url()
								: null;
							return (
								<Link
									key={post._id}
									href={`/blog/${post.slug.current}`}
									className="group flex gap-3 items-center hover:opacity-90 transition-opacity">
									{miniImg ? (
										<div className="relative w-16 h-14 rounded-lg overflow-hidden bg-zinc-900 flex-shrink-0">
											<Image
												src={miniImg}
												alt={post.title}
												fill
												className="object-cover group-hover:scale-105 transition-transform"
											/>
										</div>
									) : (
										<div className="w-16 h-14 rounded-lg bg-zinc-800 flex items-center justify-center flex-shrink-0 text-orange-400 font-mono text-xs">
											POST
										</div>
									)}
									<div className="flex-1 min-w-0">
										<h5 className="text-xs font-bold text-foreground line-clamp-2 leading-snug group-hover:text-orange-500 transition-colors">
											{post.title}
										</h5>
										<span className="text-[10px] font-mono text-muted-foreground flex items-center gap-1 mt-1">
											<Calendar className="w-2.5 h-2.5" />
											{post.publishedAt
												? new Date(post.publishedAt).toLocaleDateString()
												: "Recent"}
										</span>
									</div>
								</Link>
							);
						})}
					</div>

					<Link
						href="/blog"
						className="inline-flex items-center gap-1.5 text-xs font-mono text-orange-500 hover:text-orange-600 mt-4 pt-3 border-t border-black/5 dark:border-white/5 w-full justify-between">
						<span>View all articles</span>
						<ArrowRight className="w-3.5 h-3.5" />
					</Link>
				</div>
			)}
		</aside>
	);
}
