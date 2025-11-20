"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
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

const MyProjects: React.FC = () => {
	return (
		<section className="py-16 px-6 bg-background text-foreground min-h-screen">
			<div className="w-full">
				<h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
					My Projects
				</h1>

				<div className="flex justify-between gap-32">
					{projects.map((project) => (
						<div
							key={project.id}
							className="flex-1 bg-card rounded-xl shadow-lg overflow-hidden flex flex-col">
							<div className="relative w-full h-48">
								<Image
									src={project.imageUrl}
									alt={project.title}
									fill
									className="object-cover"
								/>
							</div>
							<div className="p-4 flex flex-col flex-1">
								<h2 className="text-xl font-semibold mb-2">{project.title}</h2>
								<p className="text-sm text-foreground/70 flex-1 mb-4">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tech.map((tech) => (
										<span
											key={tech}
											className="text-xs px-2 py-1 bg-foreground/10 rounded-full">
											{tech}
										</span>
									))}
								</div>
								<div className="flex gap-2 mt-auto">
									{project.githubUrl && (
										<a
											href={project.githubUrl}
											target="_blank"
											className="flex-1">
											<Button variant="outline" className="w-full">
												GitHub
											</Button>
										</a>
									)}
									{project.liveUrl && (
										<a
											href={project.liveUrl}
											target="_blank"
											className="flex-1">
											<Button variant="secondary" className="w-full">
												Live
											</Button>
										</a>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default MyProjects;
