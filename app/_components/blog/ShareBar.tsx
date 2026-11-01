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

	const getUrl = () => {
		if (typeof window !== "undefined") {
			return window.location.href;
		}
		return "";
	};

	const handleCopy = async () => {
		try {
			const url = getUrl();
			if (url) {
				await navigator.clipboard.writeText(url);
				setCopied(true);
				setTimeout(() => setCopied(false), 2000);
			}
		} catch (e) {
			console.error("Failed to copy link:", e);
		}
	};

	const handleShareTwitter = () => {
		const url = getUrl();
		const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
			title
		)}&url=${encodeURIComponent(url)}&via=devyalchemist`;
		window.open(shareUrl, "_blank", "noopener,noreferrer");
	};

	const handleShareLinkedIn = () => {
		const url = getUrl();
		const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
			url
		)}`;
		window.open(shareUrl, "_blank", "noopener,noreferrer");
	};

	return (
		<div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm my-8">
			<div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
				<Share2 className="w-4 h-4 text-orange-500" />
				<span>Share this article</span>
			</div>

			<div className="flex items-center gap-2">
				<button
					type="button"
					onClick={handleShareTwitter}
					aria-label="Share on X (Twitter)"
					className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-foreground hover:bg-orange-500 hover:text-white transition-all cursor-pointer">
					<FontAwesomeIcon icon={faXTwitter} className="w-3.5 h-3.5" />
				</button>

				<button
					type="button"
					onClick={handleShareLinkedIn}
					aria-label="Share on LinkedIn"
					className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-foreground hover:bg-orange-500 hover:text-white transition-all cursor-pointer">
					<FontAwesomeIcon icon={faLinkedin} className="w-3.5 h-3.5" />
				</button>

				<button
					type="button"
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
