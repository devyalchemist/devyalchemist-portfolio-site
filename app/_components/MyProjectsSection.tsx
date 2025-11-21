"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { getRepoReadme } from "@/services/apiGitReadme";
// import { Button } from "shadcn/ui"; // replace with your shadcn button if different

interface Project {
	id: number;
	title: string;
	description: string;
	imageUrl: string;
	tech: string[];
	githubUrl?: string;
	liveUrl?: string;
}

const projects: Project[] = [
	{
		id: 1,
		title: "Portfolio Website",
		description:
			"My personal portfolio website built with Next.js and TailwindCSS.",
		imageUrl: "https://picsum.photos/500",
		tech: ["Next.js", "TypeScript", "TailwindCSS"],
		githubUrl: "https://github.com/devyalchemist/portfolio",
		liveUrl: "#",
	},
	{
		id: 2,
		title: "Decentralized Chat App",
		description: "A real-time decentralized chat app using Solana blockchain.",
		imageUrl: "https://picsum.photos/500",
		tech: ["React", "Solana", "Web3.js"],
		githubUrl: "https://github.com/devyalchemist/dchat",
		liveUrl: "#",
	},
	{
		id: 3,
		title: "E-commerce dApp",
		description: "A full-stack decentralized e-commerce application.",
		imageUrl: "https://picsum.photos/500",
		tech: ["Next.js", "Solana", "TailwindCSS", "ShadCN"],
		githubUrl: "https://github.com/devyalchemist/ecommerce-dapp",
		liveUrl: "#",
	},
];
type summaryType = {
	index: number;
	summary: string;
};
const MyProjects: React.FC = () => {
	const [summary, setSummary] = useState<summaryType[]>([]);
	async function handleReadme(idx: number) {
		const value = await getRepoReadme(
			"stage-3b-frontend-track-hng-devyalchemist"
		);
		setSummary((prev) => [...prev, { index: idx, summary: value.summary }]);
		console.log(value);
	}
	return (
		<section className="py-16 px-6 bg-background text-foreground min-h-screen">
			<div className="w-full">
				<h1 className="text-4xl [font-family:var(--mono-font)] sm:text-5xl mb-12 text-center">
					My Projects
				</h1>

				<div className="flex justify-between gap-32">
					{
						<Accordion
							type="single"
							collapsible
							className="w-full"
							defaultValue="item-1">
							{projects.map((project, idx) => (
								<AccordionItem key={idx} value={`item-${idx + 1}`}>
									<AccordionTrigger>{project.title}</AccordionTrigger>
									<AccordionContent className="flex flex-col gap-4 text-balance">
										<p>{project.description}</p>
										<p>
											Key features include advanced processing capabilities, and
											an intuitive user interface designed for both beginners
											and experts.
										</p>
										<Button
											onClick={() => handleReadme(idx)}
											variant={"outline"}>
											readme
										</Button>
										{summary.find((item) => item.index === idx)?.summary}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					}
				</div>
			</div>
		</section>
	);
};

export default MyProjects;
