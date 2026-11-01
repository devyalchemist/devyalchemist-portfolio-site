"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";
import { getRandomFact } from "@/services/apiRandomFacts";
import { Wand2, Terminal, Sparkles, HelpCircle, CornerDownLeft } from "lucide-react";
import FadeOnScroll from "../_components/FadeOnScroll";
import Box from "../_components/Box";

const SUGGESTED_PROMPTS = [
	{ label: "⚡ Tech Stack", query: "What is your core tech stack and architectural specialty?" },
	{ label: "💪 Calisthenics & Code", query: "How does calisthenics influence your discipline as a software engineer?" },
	{ label: "🔮 Why DevyAlchemist?", query: "What is the meaning and origin behind the name DevyAlchemist?" },
	{ label: "🚀 Projects & AI", query: "Tell me about your AI agents and projects like NutriMind and Checkerr." },
	{ label: "🎯 HNG & Work Ethic", query: "What did you learn from the brutal pace of the HNG Internship?" },
];

export default function AboutMe() {
	const [userPrompt, setUserPrompt] = useState("");
	const [lastQuery, setLastQuery] = useState("");
	const [answer, setAnswer] = useState("");
	const [loading, setLoading] = useState(false);

	async function handleAsk(queryToAsk?: string) {
		const text = queryToAsk || userPrompt;
		if (!text.trim() || loading) return;

		setLoading(true);
		setLastQuery(text);
		try {
			const res = await getRandomFact(text);
			setAnswer(res?.message?.answer || "Gospel is a 22-year-old Full-Stack Engineer and AI Architect based in Lagos.");
		} catch (e) {
			console.error("AI prompt error:", e);
			setAnswer("Gospel (@devyalchemist) builds edge-native web systems, combining Next.js, Cloudflare, and calisthenics discipline.");
		} finally {
			setLoading(false);
			setUserPrompt("");
		}
	}

	return (
		<FadeOnScroll>
			<section className="py-12 sm:py-20" id="about-me">
				<Box fullHeight={false}>
					{/* Section Header */}
					<div className="text-center max-w-2xl mx-auto mb-10 px-4">
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-orange-500/10 text-orange-500 border border-orange-500/20 mb-3">
							<Terminal className="w-3.5 h-3.5" />
							<span>interactive_ai_persona.sh</span>
						</div>
						<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground [font-family:var(--mono-font)]">
							Ask My AI Persona
						</h2>
						<p className="text-muted-foreground text-xs sm:text-sm font-mono mt-2">
							Trained on my actual engineering journey, projects, discipline, and stack. Ask me anything!
						</p>
					</div>

					{/* Main Interactive Terminal Container */}
					<div className="max-w-4xl mx-auto px-4">
						<div className="rounded-2xl overflow-hidden border border-zinc-800 bg-[#0d1117] text-zinc-100 shadow-2xl">
							{/* Terminal Title Bar */}
							<div className="flex items-center justify-between px-4 py-2.5 bg-[#161b22] border-b border-zinc-800/80 text-xs font-mono select-none">
								<div className="flex items-center gap-2">
									<span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
									<span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
									<span className="w-3 h-3 rounded-full bg-[#27c93f]" />
									<span className="ml-2 text-zinc-400 text-[11px] hidden sm:inline">
										devyalchemist-ai-agent (v2.5)
									</span>
								</div>
								<div className="text-zinc-500 text-[11px] font-mono">
									// latency: ~300ms
								</div>
							</div>

							<div className="p-5 sm:p-8 space-y-6">
								{/* Quick Suggestion Chips */}
								<div className="space-y-2">
									<div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
										<Sparkles className="w-3 h-3 text-orange-400" />
										<span>Quick topic suggestions:</span>
									</div>
									<div className="flex flex-wrap gap-2">
										{SUGGESTED_PROMPTS.map((item, idx) => (
											<button
												key={idx}
												disabled={loading}
												onClick={() => handleAsk(item.query)}
												className="px-3 py-1.5 rounded-lg text-xs font-mono bg-zinc-800/80 hover:bg-orange-500 hover:text-white text-zinc-300 border border-zinc-700/60 transition-all cursor-pointer text-left active:scale-95 disabled:opacity-50">
												{item.label}
											</button>
										))}
									</div>
								</div>

								{/* Terminal Answer Box */}
								<div className="min-h-[140px] p-4 sm:p-5 rounded-xl bg-[#161b22]/70 border border-zinc-800/80 font-mono text-xs sm:text-sm leading-relaxed flex flex-col justify-center">
									{loading ? (
										<div className="space-y-3">
											<div className="flex items-center gap-2 text-orange-400 text-xs">
												<Spinner />
												<span>Querying persona knowledge base...</span>
											</div>
											<Skeleton className="w-full h-3.5 bg-zinc-800" />
											<Skeleton className="w-5/6 h-3.5 bg-zinc-800" />
											<Skeleton className="w-3/4 h-3.5 bg-zinc-800" />
										</div>
									) : answer ? (
										<div className="space-y-2">
											{lastQuery && (
												<div className="text-xs text-orange-400/90 flex items-center gap-1.5 border-b border-zinc-800/60 pb-2">
													<span>$ prompt:</span>
													<span className="italic text-zinc-300">&ldquo;{lastQuery}&rdquo;</span>
												</div>
											)}
											<p className="text-zinc-200 text-sm sm:text-base leading-relaxed pt-1">
												{answer}
											</p>
										</div>
									) : (
										<div className="text-center py-4 text-zinc-500 space-y-2">
											<HelpCircle className="w-8 h-8 mx-auto text-zinc-600 opacity-70" />
											<p className="text-xs">
												Click any suggestion above or type your own question below!
											</p>
										</div>
									)}
								</div>

								{/* Custom Prompt Input */}
								<form
									onSubmit={(e) => {
										e.preventDefault();
										handleAsk();
									}}
									className="flex gap-2 items-center">
									<div className="relative flex-1">
										<span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-mono text-orange-500 font-bold text-sm">
											$
										</span>
										<Input
											value={userPrompt}
											onChange={(e) => setUserPrompt(e.target.value)}
											placeholder="ask-devyalchemist 'What is your background?'"
											disabled={loading}
											className="pl-8 bg-zinc-900 border-zinc-700/80 text-zinc-100 placeholder:text-zinc-500 font-mono text-xs sm:text-sm h-11 focus-visible:ring-orange-500 rounded-xl"
										/>
									</div>
									<Button
										type="submit"
										disabled={loading || !userPrompt.trim()}
										className="h-11 px-5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-mono text-xs gap-1.5 cursor-pointer shadow-md shadow-orange-500/20">
										{loading ? <Spinner /> : <CornerDownLeft className="w-4 h-4" />}
										<span className="hidden sm:inline">Ask AI</span>
									</Button>
								</form>
							</div>
						</div>
					</div>
				</Box>
			</section>
		</FadeOnScroll>
	);
}
