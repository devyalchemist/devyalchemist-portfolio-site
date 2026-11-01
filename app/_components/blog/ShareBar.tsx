"use client";

import React, { useState } from "react";
import { Share2, Check, Link as LinkIcon } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";

interface ShareBarProps {
	title: string;
	slug: string;
}

export default function ShareBar({ title, slug }: ShareBarProps) {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		try {
			const url = typeof window !== "undefined" ? window.location.href : "";
			await navigator.clipboard.writeText(url);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (e) {
			console.error("Failed to copy link:", e);
		}
	};

	const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
		title
	)}&url=${encodeURIComponent(
		typeof window !== "undefined" ? window.location.href : ""
	)}&via=devyalchemist`;

	const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
		typeof window !== "undefined" ? window.location.href : ""
	)}`;

	return (
		<div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm my-8">
			<div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
				<Share2 className="w-4 h-4 text-orange-500" />
				<span>Share this article</span>
			</div>

			<div className="flex items-center gap-2">
				<a
					href={twitterShareUrl}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Share on X (Twitter)"
					className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-foreground hover:bg-orange-500 hover:text-white transition-all">
					<FontAwesomeIcon icon={faXTwitter} className="w-3.5 h-3.5" />
				</a>

				<a
					href={linkedinShareUrl}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Share on LinkedIn"
					className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-foreground hover:bg-orange-500 hover:text-white transition-all">
					<FontAwesomeIcon icon={faLinkedin} className="w-3.5 h-3.5" />
				</a>

				<button
					onClick={handleCopy}
					aria-label="Copy article link"
					className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-foreground hover:bg-orange-500 hover:text-white transition-all cursor-pointer">
					{copied ? (
						<>
							<Check className="w-3.5 h-3.5 text-emerald-400" />
							<span className="text-emerald-400">Link Copied!</span>
						</>
					) : (
						<>
							<LinkIcon className="w-3.5 h-3.5" />
							<span>Copy Link</span>
						</>
					)}
				</button>
			</div>
		</div>
	);
}
