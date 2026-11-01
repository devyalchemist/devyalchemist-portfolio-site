"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
	faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
	Mail,
	CheckCircle2,
	Send,
	RefreshCw,
	Layers,
	Quote,
} from "lucide-react";
import { Spinner } from "@/components/ui/spinner";

const NICHES = [
	{ id: "tech", label: "Tech Digest & Engineering Articles" },
	{ id: "others", label: "Others (Offers, Opportunities & Personal Updates)" },
];

const ALCHEMIST_QUOTES = [
	"Transmute abstract ideas into scalable digital gold.",
	"The planche requires leverage; scalable architecture requires patience.",
	"Edge latency is the true test of distributed craftsmanship.",
	"Code without discipline is chaos; discipline without code is stagnation.",
	"Good software architecture reflects resource hierarchies, not implementation hacks.",
];

export default function Footer() {
	const [email, setEmail] = useState("");
	const [selectedNiches, setSelectedNiches] = useState<string[]>([
		"tech",
		"others",
	]);
	const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
		"idle"
	);
	const [feedbackMsg, setFeedbackMsg] = useState("");
	const [quoteIdx, setQuoteIdx] = useState(0);

	const toggleNiche = (id: string) => {
		setSelectedNiches((prev) =>
			prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
		);
	};

	const handleSubscribe = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!email || !email.includes("@")) {
			setStatus("error");
			setFeedbackMsg("Please enter a valid email address.");
			return;
		}

		if (selectedNiches.length === 0) {
			setStatus("error");
			setFeedbackMsg("Please select at least one email category.");
			return;
		}

		setStatus("loading");
		try {
			const res = await fetch("/api/newsletter/subscribe", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, niches: selectedNiches }),
			});
			const data = await res.json();
			if (res.ok) {
				setStatus("success");
				setFeedbackMsg(
					"Subscribed! You'll receive emails tailored to your selections."
				);
				setEmail("");
			} else {
				setStatus("error");
				setFeedbackMsg(data.error || "Failed to subscribe.");
			}
		} catch (err) {
			setStatus("error");
			setFeedbackMsg("Network error. Please try again later.");
		}
	};

	const cycleQuote = () => {
		setQuoteIdx((prev) => (prev + 1) % ALCHEMIST_QUOTES.length);
	};

	return (
		<footer className="w-full bg-[#0d1117] text-zinc-300 border-t border-zinc-800 pt-10 pb-8 px-4 sm:px-6">
			<div className="max-w-6xl mx-auto space-y-8">
				{/* Top Card: Quote of the Day + Email Subscription */}
				<div className="rounded-2xl overflow-hidden border border-zinc-800 bg-[#161b22]/90 shadow-xl">
					{/* Terminal Bar */}
					<div className="px-4 py-2.5 bg-[#12161c] border-b border-zinc-800/80 flex items-center justify-between text-xs font-mono select-none">
						<div className="flex items-center gap-2">
							<span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
							<span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
							<span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
							<span className="ml-2 text-zinc-400 text-[11px] hidden sm:inline">
								devyalchemist-newsletter ~ v1.0
							</span>
						</div>
						<div className="flex items-center gap-1.5 text-zinc-400 text-[11px]">
							<span>● lagos-edge</span>
							<span>•</span>
							<span className="text-emerald-400">active</span>
						</div>
					</div>

					{/* Card Body */}
					<div className="p-5 sm:p-7 space-y-6">
						{/* Daily Alchemist Quote Banner */}
						<div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/20 flex items-start gap-3 justify-between">
							<div className="flex items-start gap-3">
								<Quote className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
								<div>
									<div className="text-[11px] font-mono uppercase tracking-wider text-orange-400 font-bold mb-1">
										// Alchemist Thought of the Day
									</div>
									<p className="font-mono text-xs sm:text-sm text-zinc-200 italic leading-relaxed">
										&ldquo;{ALCHEMIST_QUOTES[quoteIdx]}&rdquo;
									</p>
								</div>
							</div>
							<button
								type="button"
								onClick={cycleQuote}
								title="Click for next thought"
								className="text-zinc-400 hover:text-orange-400 transition-colors p-1 flex-shrink-0 cursor-pointer">
								<RefreshCw className="w-4 h-4" />
							</button>
						</div>

						{/* Email Subscription Section */}
						<div className="space-y-4">
							<div className="space-y-1">
								<div className="flex items-center gap-2 text-xs font-mono text-orange-400 font-semibold">
									<Mail className="w-3.5 h-3.5" />
									<span>$ subscribe --notifications</span>
								</div>
								<h3 className="text-lg sm:text-xl font-bold text-white [font-family:var(--mono-font)]">
									Stay in the Loop
								</h3>
								<p className="text-zinc-400 text-xs sm:text-sm font-mono max-w-xl leading-relaxed">
									No spam, ever. Choose what you want delivered directly to your inbox.
								</p>
							</div>

							{/* Clean 2-Option Checkboxes: Tech vs Others */}
							<div className="space-y-2">
								<div className="flex items-center gap-1 text-[11px] font-mono text-zinc-400">
									<Layers className="w-3 h-3 text-orange-500" />
									<span>Select email topics:</span>
								</div>
								<div className="flex flex-wrap gap-2.5">
									{NICHES.map((niche) => {
										const isChecked = selectedNiches.includes(niche.id);
										return (
											<button
												type="button"
												key={niche.id}
												onClick={() => toggleNiche(niche.id)}
												className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 cursor-pointer border ${
													isChecked
														? "bg-orange-500 text-white border-orange-500 shadow-sm shadow-orange-500/20 font-medium"
														: "bg-zinc-800/80 text-zinc-400 border-zinc-700/60 hover:text-zinc-200"
												}`}>
												<span className="font-bold">{isChecked ? "[✓]" : "[ ]"}</span>
												<span>{niche.label}</span>
											</button>
										);
									})}
								</div>
							</div>

							{/* Subscription Form */}
							<form onSubmit={handleSubscribe} className="space-y-3 pt-1">
								<div className="flex flex-col sm:flex-row gap-2 max-w-xl">
									<div className="relative flex-1">
										<span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-mono text-orange-500 font-bold text-sm">
											&gt;
										</span>
										<input
											type="email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											placeholder="your.email@example.com"
											disabled={status === "loading"}
											className="w-full pl-8 pr-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700/80 text-zinc-100 placeholder:text-zinc-600 font-mono text-xs sm:text-sm focus:outline-none focus:border-orange-500 transition-colors"
										/>
									</div>
									<button
										type="submit"
										disabled={status === "loading"}
										className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-mono text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-orange-500/20 transition-all disabled:opacity-50">
										{status === "loading" ? (
											<Spinner />
										) : (
											<>
												<Send className="w-3.5 h-3.5" />
												<span>Subscribe</span>
											</>
										)}
									</button>
								</div>

								{feedbackMsg && (
									<p
										className={`text-xs font-mono flex items-center gap-1.5 ${
											status === "success"
												? "text-emerald-400"
												: "text-red-400"
										}`}>
										{status === "success" && (
											<CheckCircle2 className="w-3.5 h-3.5" />
										)}
										<span>{feedbackMsg}</span>
									</p>
								)}
							</form>
						</div>
					</div>
				</div>

				{/* Footer Bottom Bar */}
				<div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-zinc-800/60 font-mono text-xs">
					<div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-zinc-400">
						<Link
							href="/"
							className="font-bold text-sm text-foreground hover:text-orange-500 transition-colors">
							devyalchemist:~$
						</Link>
						<span>•</span>
						<Link href="/blog" className="hover:text-orange-400 transition-colors">
							Digest
						</Link>
						<span>•</span>
						<a
							href="https://github.com/devyalchemist"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-orange-400 transition-colors">
							GitHub
						</a>
						<span>•</span>
						<a
							href="https://x.com/devyalchemist"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-orange-400 transition-colors">
							Twitter
						</a>
					</div>

					<div className="flex items-center gap-4">
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/devyalchemist"
							aria-label="GitHub Profile"
							className="text-zinc-400 hover:text-orange-400 transition-colors text-lg">
							<FontAwesomeIcon icon={faGithub} />
						</a>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://x.com/devyalchemist"
							aria-label="X Profile"
							className="text-zinc-400 hover:text-orange-400 transition-colors text-lg">
							<FontAwesomeIcon icon={faXTwitter} />
						</a>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.linkedin.com/in/gospel-ugwuja-devyalchemist/"
							aria-label="LinkedIn Profile"
							className="text-zinc-400 hover:text-orange-400 transition-colors text-lg">
							<FontAwesomeIcon icon={faLinkedin} />
						</a>
					</div>
				</div>

				<div className="text-center text-[11px] font-mono text-zinc-500">
					© {new Date().getFullYear()} Gospel Ugwuja (devyalchemist). Built with
					Next.js 16, Sanity Studio & Edge AI.
				</div>
			</div>
		</footer>
	);
}
