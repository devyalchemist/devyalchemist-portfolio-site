import { Metadata } from "next";
import Link from "next/link";
import BlogFeed from "../_components/blog/BlogFeed";
import { getPosts } from "@/lib/sanity/client";
import {
	Terminal,
	GitBranch,
	ArrowLeft,
	BookOpen,
	CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
	title: "The Tech Digest | Gospel Ugwuja (devyalchemist)",
	description:
		"Personal tech blog and engineering notes by Gospel Ugwuja (@devyalchemist).",
};

export const revalidate = 60;

export default async function BlogPage() {
	const posts = await getPosts();

	return (
		<div className="min-h-screen pb-24">
			{/* Full-Width Developer Terminal Header */}
			<header className="w-full bg-[#0d1117] border-b border-zinc-800 shadow-xl mb-10">
				{/* Top Terminal Bar (Edge-to-Edge) */}
				<div className="w-full bg-[#161b22] border-b border-zinc-800/80 px-4 sm:px-8 py-2.5 flex items-center justify-between text-xs font-mono select-none">
					{/* Window Controls */}
					<div className="flex items-center gap-2">
						<span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-sm" />
						<span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-sm" />
						<span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-sm" />
						<span className="ml-2 text-zinc-400 hidden sm:inline text-[11px]">
							bash - devyalchemist@edge
						</span>
					</div>

					{/* Center Directory */}
					<div className="text-zinc-400 text-[11px] truncate">
						~/digest/welcome.txt
					</div>

					{/* Right Git branch */}
					<div className="flex items-center gap-1.5 text-emerald-400 text-[11px]">
						<GitBranch className="w-3 h-3" />
						<span>main</span>
					</div>
				</div>

				{/* Inner Terminal Body (Contained for Readable Max-Width) */}
				<div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-4 text-zinc-100">
					{/* Command Prompt & Back Link */}
					<div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-zinc-400 pb-2 border-b border-zinc-800/60">
						<div className="flex items-center gap-2">
							<Terminal className="w-3.5 h-3.5 text-orange-400" />
							<span className="text-orange-400 font-bold">$</span>
							<span className="text-zinc-300">cat welcome.txt</span>
						</div>

						<Link
							href="/"
							className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-800/60 hover:bg-zinc-700 text-zinc-300 transition-colors">
							<ArrowLeft className="w-3 h-3" />
							<span>cd ~</span>
						</Link>
					</div>

					{/* Title */}
					<h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight [font-family:var(--mono-font)] pt-1">
						The Tech Digest
						<span className="inline-block w-2.5 h-6 sm:h-9 ml-2 bg-orange-500 animate-pulse align-middle" />
					</h1>

					{/* Personal Welcoming Text */}
					<p className="text-zinc-300 text-sm sm:text-base font-mono max-w-3xl leading-relaxed">
						welcome to my blog! this is where i document things i&apos;m building,
						lessons learned the hard way, and experiments in modern web
						engineering. grab a coffee and take a look around.
					</p>

					{/* Developer Statusline */}
					<div className="pt-3 border-t border-zinc-800/80 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-zinc-400">
						<span className="flex items-center gap-1.5 text-orange-400">
							<BookOpen className="w-3.5 h-3.5" />
							<span>
								{posts.length} {posts.length === 1 ? "article" : "articles"} published
							</span>
						</span>
						<span className="text-zinc-600 hidden sm:inline">|</span>
						<span className="text-zinc-300">
							author: @devyalchemist
						</span>
						<span className="text-zinc-600 hidden sm:inline">|</span>
						<span className="flex items-center gap-1 text-emerald-400">
							<CheckCircle2 className="w-3.5 h-3.5" />
							<span>status: 200 OK</span>
						</span>
					</div>
				</div>
			</header>

			{/* Main Feed Container */}
			<main className="max-w-6xl mx-auto px-4">
				<BlogFeed initialPosts={posts} />
			</main>
		</div>
	);
}
