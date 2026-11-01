import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getPostBySlug, getRecentPosts, urlForImage } from "@/lib/sanity/client";
import PortableBody from "@/app/_components/blog/PortableBody";
import SidePanel from "@/app/_components/blog/SidePanel";
import ShareBar from "@/app/_components/blog/ShareBar";
import StickyReadingBar from "@/app/_components/blog/StickyReadingBar";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ArrowLeft, GitBranch, Terminal, Calendar, Clock, User, CheckCircle2 } from "lucide-react";

interface PostPageProps {
	params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export async function generateMetadata({
	params,
}: PostPageProps): Promise<Metadata> {
	const { slug } = await params;
	const post = await getPostBySlug(slug);

	if (!post) {
		return {
			title: "Article Not Found | devyalchemist",
		};
	}

	const ogImage = post.image
		? urlForImage(post.image).width(1200).height(630).fit("crop").url()
		: undefined;

	return {
		title: `${post.title} | devyalchemist`,
		description: post.excerpt || "Article by Gospel Ugwuja (@devyalchemist)",
		openGraph: {
			title: post.title,
			description: post.excerpt,
			images: ogImage ? [{ url: ogImage }] : [],
		},
	};
}

export default async function PostPage({ params }: PostPageProps) {
	const { slug } = await params;
	const post = await getPostBySlug(slug);

	if (!post) {
		notFound();
	}

	const recentPosts = await getRecentPosts(slug);
	const coverImageUrl = post.image
		? urlForImage(post.image).width(1200).height(500).fit("crop").url()
		: null;

	const formattedDate = post.publishedAt
		? new Date(post.publishedAt).toLocaleDateString("en-US", {
				month: "short",
				day: "numeric",
				year: "numeric",
		  })
		: "Recent";

	return (
		<div className="min-h-screen pb-24">
			{/* Sticky collapsed header when scrolled past hero */}
			<StickyReadingBar
				title={post.title}
				readTime={post.readTime}
				triggerElementId="article-hero-header"
			/>

			{/* Main Container */}
			<div className="max-w-6xl mx-auto px-4 pt-4 sm:pt-6">
				{/* Breadcrumb Navigation */}
				<Breadcrumb className="mb-4">
					<BreadcrumbList className="font-mono text-xs">
						<BreadcrumbItem>
							<BreadcrumbLink href="/" className="hover:text-orange-500">
								~
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbLink href="/blog" className="hover:text-orange-500">
								digest
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbPage className="truncate max-w-[200px] sm:max-w-sm text-foreground">
								{slug}.md
							</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>

				{/* Developer Terminal Window Hero Card */}
				<header
					id="article-hero-header"
					className="rounded-2xl overflow-hidden border border-zinc-800 bg-[#0d1117] shadow-2xl transition-all mb-8">
					{/* Terminal Window Header Bar */}
					<div className="flex items-center justify-between px-4 py-2.5 bg-[#161b22] border-b border-zinc-800/80 text-xs font-mono select-none">
						{/* Window dots */}
						<div className="flex items-center gap-2">
							<span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-sm" />
							<span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-sm" />
							<span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-sm" />
							<span className="ml-2 text-zinc-400 hidden sm:inline text-[11px]">
								bash - devyalchemist@edge
							</span>
						</div>

						{/* Center file path */}
						<div className="text-zinc-400 text-[11px] truncate max-w-[200px] sm:max-w-xs">
							~/digest/{slug}.md
						</div>

						{/* Right Git branch */}
						<div className="flex items-center gap-1.5 text-emerald-400 text-[11px]">
							<GitBranch className="w-3 h-3" />
							<span>main</span>
						</div>
					</div>

					{/* Terminal Content Box */}
					<div className="p-5 sm:p-8 space-y-4 text-zinc-100">
						{/* Command prompt & Back Link */}
						<div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-zinc-400 pb-2 border-b border-zinc-800/60">
							<div className="flex items-center gap-2">
								<Terminal className="w-3.5 h-3.5 text-orange-400" />
								<span className="text-orange-400 font-bold">$</span>
								<span className="text-zinc-300">cat {slug}.md --render</span>
							</div>

							<Link
								href="/blog"
								className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-800/60 hover:bg-zinc-700 text-zinc-300 transition-colors">
								<ArrowLeft className="w-3 h-3" />
								<span>cd ..</span>
							</Link>
						</div>

						{/* Tags */}
						{post.tags && post.tags.length > 0 && (
							<div className="flex flex-wrap gap-2 pt-1">
								{post.tags.map((tag, idx) => (
									<span
										key={idx}
										className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-orange-500/10 text-orange-400 border border-orange-500/30">
										#{tag}
									</span>
								))}
							</div>
						)}

						{/* Title */}
						<h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-snug [font-family:var(--mono-font)] pt-1">
							{post.title}
							<span className="inline-block w-2.5 h-6 sm:h-8 ml-2 bg-orange-500 animate-pulse align-middle" />
						</h1>

						{/* Developer Statusline Bar */}
						<div className="pt-3 border-t border-zinc-800/80 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-zinc-400">
							<span className="flex items-center gap-1.5 text-zinc-200">
								<User className="w-3.5 h-3.5 text-orange-400" />
								<span>author: Gospel Ugwuja</span>
							</span>
							<span className="text-zinc-600 hidden sm:inline">|</span>
							<span className="flex items-center gap-1.5">
								<Calendar className="w-3.5 h-3.5 text-zinc-400" />
								<span>date: {formattedDate}</span>
							</span>
							{post.readTime && (
								<>
									<span className="text-zinc-600 hidden sm:inline">|</span>
									<span className="flex items-center gap-1.5">
										<Clock className="w-3.5 h-3.5 text-zinc-400" />
										<span>est: {post.readTime}</span>
									</span>
								</>
							)}
							<span className="text-zinc-600 hidden sm:inline">|</span>
							<span className="flex items-center gap-1 text-emerald-400">
								<CheckCircle2 className="w-3.5 h-3.5" />
								<span>status: 200 OK</span>
							</span>
						</div>
					</div>
				</header>

				{/* Framed Cover Image (if present) */}
				{coverImageUrl && (
					<figure className="mb-8 rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-lg bg-zinc-900 relative h-[220px] sm:h-[320px] lg:h-[380px] w-full">
						<Image
							src={coverImageUrl}
							alt={post.title}
							fill
							priority
							className="object-cover"
						/>
						<div className="absolute bottom-3 right-3 px-3 py-1 rounded-md text-[11px] font-mono bg-black/80 text-zinc-300 backdrop-blur-md border border-white/10">
							// cover.jpg
						</div>
					</figure>
				)}

				{/* Two-Column Layout: Article & Sidebar */}
				<div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 items-start">
					{/* Left: Article Main Body */}
					<main className="w-full min-w-0">
						{/* Excerpt Summary Box */}
						{post.excerpt && (
							<div className="p-4 sm:p-5 rounded-xl border-l-4 border-orange-500 bg-orange-500/5 dark:bg-orange-500/10 mb-8 font-mono">
								<div className="text-xs uppercase tracking-wider text-orange-500 font-bold mb-1">
									// TL;DR / Summary
								</div>
								<p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
									{post.excerpt}
								</p>
							</div>
						)}

						{/* Rich PortableText Body */}
						{post.body && post.body.length > 0 ? (
							<PortableBody content={post.body} />
						) : (
							<p className="text-muted-foreground italic my-8 font-mono text-sm">
								// No content written for this article yet.
							</p>
						)}

						{/* Share Bar */}
						<ShareBar title={post.title} slug={slug} />

						{/* Navigation Footer */}
						<div className="pt-6 border-t border-black/10 dark:border-white/10 flex justify-between items-center">
							<Link
								href="/blog"
								className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800 hover:bg-orange-500 hover:text-white transition-all shadow-sm">
								<ArrowLeft className="w-3.5 h-3.5" />
								<span>cd ~/digest</span>
							</Link>

							<span className="text-xs font-mono text-muted-foreground">
								EOF (End of File)
							</span>
						</div>
					</main>

					{/* Right: Sticky SidePanel */}
					<div className="lg:sticky lg:top-24">
						<SidePanel recentPosts={recentPosts} tags={post.tags} />
					</div>
				</div>
			</div>
		</div>
	);
}
