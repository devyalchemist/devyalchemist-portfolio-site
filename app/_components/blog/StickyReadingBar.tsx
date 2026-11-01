"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Clock, Share2, Check } from "lucide-react";

interface StickyReadingBarProps {
	title: string;
	readTime?: string;
	triggerElementId?: string;
}

export default function StickyReadingBar({
	title,
	readTime,
	triggerElementId = "article-hero-header",
}: StickyReadingBarProps) {
	const [isVisible, setIsVisible] = useState(false);
	const [scrollProgress, setScrollProgress] = useState(0);
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			// Calculate reading progress %
			const totalHeight =
				document.documentElement.scrollHeight - window.innerHeight;
			if (totalHeight > 0) {
				const current = (window.scrollY / totalHeight) * 100;
				setScrollProgress(Math.min(100, Math.max(0, current)));
			}

			// Check trigger element visibility
			const triggerEl = document.getElementById(triggerElementId);
			if (triggerEl) {
				const rect = triggerEl.getBoundingClientRect();
				// When bottom of hero header scrolls above the top nav bar (approx 60px)
				setIsVisible(rect.bottom < 64);
			} else {
				setIsVisible(window.scrollY > 300);
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, [triggerElementId]);

	const handleCopy = async () => {
		try {
			if (typeof window !== "undefined") {
				await navigator.clipboard.writeText(window.location.href);
				setCopied(true);
				setTimeout(() => setCopied(false), 2000);
			}
		} catch (e) {
			console.error("Failed to copy link:", e);
		}
	};

	return (
		<aside
			aria-label="Article progress and quick navigation"
			className={`fixed top-[52px] sm:top-[57px] left-0 w-full z-40 transition-all duration-300 transform pointer-events-none ${
				isVisible
					? "translate-y-0 opacity-100"
					: "-translate-y-3 opacity-0"
			}`}>
			<div className="w-full bg-white/95 dark:bg-[#0d1117]/95 backdrop-blur-md border-b border-black/10 dark:border-white/10 shadow-lg pointer-events-auto">
				<div className="max-w-6xl mx-auto px-4 h-12 flex items-center justify-between gap-4">
					{/* Left: Back Link & Terminal Icon */}
					<div className="flex items-center gap-3 min-w-0">
						<Link
							href="/blog"
							className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-orange-500 transition-colors flex-shrink-0">
							<ArrowLeft className="w-3.5 h-3.5" />
							<span className="hidden sm:inline">~/digest</span>
						</Link>

						<span className="text-zinc-400 dark:text-zinc-600 font-mono text-xs hidden sm:inline">
							/
						</span>

						{/* Center: Monospace Title */}
						<span className="font-mono text-xs sm:text-sm font-semibold truncate text-foreground text-orange-500 dark:text-orange-400">
							{title}
						</span>
					</div>

					{/* Right: Meta & Actions */}
					<div className="flex items-center gap-3 flex-shrink-0 font-mono text-xs text-muted-foreground">
						{readTime && (
							<span className="hidden md:flex items-center gap-1 text-[11px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800">
								<Clock className="w-3 h-3 text-orange-400" />
								<span>{readTime}</span>
							</span>
						)}

						<span className="text-[11px] font-mono text-orange-500 font-semibold hidden sm:inline">
							{Math.round(scrollProgress)}%
						</span>

						<button
							onClick={handleCopy}
							aria-label="Share article"
							className="flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-100 dark:bg-zinc-800 hover:bg-orange-500 hover:text-white transition-all cursor-pointer">
							{copied ? (
								<>
									<Check className="w-3 h-3 text-emerald-400" />
									<span className="hidden sm:inline text-emerald-400">Copied</span>
								</>
							) : (
								<>
									<Share2 className="w-3 h-3" />
									<span className="hidden sm:inline">Share</span>
								</>
							)}
						</button>
					</div>
				</div>

				{/* Reading Progress Line */}
				<div className="w-full h-[2px] bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
					<div
						className="h-full bg-gradient-to-r from-orange-500 via-amber-400 to-emerald-400 transition-all duration-150 ease-out"
						style={{ width: `${scrollProgress}%` }}
					/>
				</div>
			</div>
		</aside>
	);
}
