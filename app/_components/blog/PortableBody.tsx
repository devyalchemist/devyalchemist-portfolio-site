import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PortableText, type PortableTextComponents } from "next-sanity";
import { urlForImage } from "@/lib/sanity/client";
import CodeBlock from "./CodeBlock";
import { ExternalLink, Quote } from "lucide-react";

const portableTextComponents: PortableTextComponents = {
	types: {
		codeBlock: ({ value }) => {
			return <CodeBlock value={value} />;
		},
		image: ({ value }) => {
			if (!value?.asset?._ref) return null;
			const imageUrl = urlForImage(value).width(900).url();
			return (
				<figure className="my-8">
					<div className="relative w-full h-[280px] sm:h-[380px] rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-md">
						<Image
							src={imageUrl}
							alt={value.alt || "Article illustration"}
							fill
							className="object-cover"
						/>
					</div>
					{value.caption && (
						<figcaption className="text-center text-xs font-mono text-muted-foreground mt-2.5 italic">
							// {value.caption}
						</figcaption>
					)}
				</figure>
			);
		},
	},
	block: {
		h2: ({ children }) => {
			const text = String(children);
			const id = text
				.toLowerCase()
				.replace(/[^a-z0-9]+/g, "-")
				.replace(/(^-|-$)+/g, "");
			return (
				<h2
					id={id}
					className="text-xl sm:text-2xl font-bold mt-12 mb-4 scroll-mt-24 text-foreground [font-family:var(--mono-font)] flex items-center gap-2 group">
					<span className="text-orange-500 font-mono text-base select-none">##</span>
					<span>{children}</span>
				</h2>
			);
		},
		h3: ({ children }) => {
			const text = String(children);
			const id = text
				.toLowerCase()
				.replace(/[^a-z0-9]+/g, "-")
				.replace(/(^-|-$)+/g, "");
			return (
				<h3
					id={id}
					className="text-lg sm:text-xl font-semibold mt-8 mb-3 scroll-mt-24 text-foreground [font-family:var(--mono-font)] flex items-center gap-2">
					<span className="text-orange-400 font-mono text-sm select-none">###</span>
					<span>{children}</span>
				</h3>
			);
		},
		h4: ({ children }) => (
			<h4 className="text-base font-semibold mt-6 mb-2 text-foreground [font-family:var(--mono-font)]">
				{children}
			</h4>
		),
		blockquote: ({ children }) => (
			<blockquote className="my-6 p-4 sm:p-5 rounded-xl border-l-4 border-orange-500 bg-orange-500/5 dark:bg-orange-500/10 text-muted-foreground relative font-mono text-sm sm:text-base leading-relaxed">
				<Quote className="w-4 h-4 text-orange-500/60 mb-2" />
				<div>{children}</div>
			</blockquote>
		),
		normal: ({ children }) => (
			<p className="my-4 text-base sm:text-[16px] leading-relaxed text-foreground/90 font-normal">
				{children}
			</p>
		),
	},
	list: {
		bullet: ({ children }) => (
			<ul className="my-4 ml-6 list-disc space-y-2 text-foreground/90 leading-relaxed text-base">
				{children}
			</ul>
		),
		number: ({ children }) => (
			<ol className="my-4 ml-6 list-decimal space-y-2 text-foreground/90 leading-relaxed text-base font-mono">
				{children}
			</ol>
		),
	},
	listItem: {
		bullet: ({ children }) => <li className="pl-1">{children}</li>,
		number: ({ children }) => <li className="pl-1">{children}</li>,
	},
	marks: {
		code: ({ children }) => (
			<code className="font-mono text-[0.88em] px-1.5 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-orange-600 dark:text-orange-400 font-semibold border border-black/5 dark:border-white/5">
				{children}
			</code>
		),
		strong: ({ children }) => (
			<strong className="font-semibold text-foreground">{children}</strong>
		),
		em: ({ children }) => <em className="italic">{children}</em>,
		link: ({ value, children }) => {
			const target = value?.blank ? "_blank" : undefined;
			const rel = value?.blank ? "noopener noreferrer" : undefined;
			return (
				<Link
					href={value?.href || "#"}
					target={target}
					rel={rel}
					className="inline-flex items-center gap-1 text-orange-500 dark:text-orange-400 underline underline-offset-4 decoration-orange-500/40 hover:decoration-orange-500 transition-colors font-mono text-[0.95em]">
					<span>{children}</span>
					{value?.blank && <ExternalLink className="w-3.5 h-3.5" />}
				</Link>
			);
		},
	},
};

interface PortableBodyProps {
	content: any;
}

export default function PortableBody({ content }: PortableBodyProps) {
	if (!content) return null;
	return (
		<div className="article-body">
			<PortableText value={content} components={portableTextComponents} />
		</div>
	);
}
