"use client";

import React, { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";

interface CodeBlockProps {
	value: {
		language?: string;
		filename?: string;
		code: string;
	};
}

export default function CodeBlock({ value }: CodeBlockProps) {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(value.code);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error("Failed to copy text:", err);
		}
	};

	const language = value.language || "text";

	return (
		<div className="my-6 rounded-xl overflow-hidden border border-zinc-800 bg-[#0d1117] text-zinc-100 shadow-xl">
			<div className="flex items-center justify-between px-4 py-2.5 bg-[#161b22] border-b border-zinc-800/80 text-xs text-zinc-400">
				<div className="flex items-center gap-2">
					<Terminal className="w-3.5 h-3.5 text-orange-400" />
					<span className="font-mono font-medium text-zinc-300">
						{value.filename || language}
					</span>
				</div>
				<div className="flex items-center gap-3">
					<span className="uppercase text-[10px] tracking-wider font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
						{language}
					</span>
					<button
						onClick={handleCopy}
						aria-label="Copy code"
						className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono transition-colors bg-zinc-800/70 hover:bg-zinc-700 text-zinc-200">
						{copied ? (
							<>
								<Check className="w-3.5 h-3.5 text-emerald-400" />
								<span className="text-emerald-400">Copied!</span>
							</>
						) : (
							<>
								<Copy className="w-3.5 h-3.5" />
								<span>Copy</span>
							</>
						)}
					</button>
				</div>
			</div>
			<div className="p-4 overflow-x-auto text-sm font-mono leading-relaxed bg-[#0d1117]">
				<pre>
					<code>{value.code}</code>
				</pre>
			</div>
		</div>
	);
}
