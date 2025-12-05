"use client";
import Autoplay from "embla-carousel-autoplay";

import React, { useState } from "react";
import Image from "next/image";
import {
	faReact,
	faNodeJs,
	faJs,
	faCss3,
	faHtml5,
	faGithub,
	faDocker,
	faNpm,
	faPython,
	faFigma,
	faSass,
	faGitAlt,
	faBootstrap,
	faLinux,
} from "@fortawesome/free-brands-svg-icons";
import { Button } from "@/components/ui/button";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { getRepoReadme } from "@/services/apiGitReadme";
import { Card } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { repo } from "@/constants/constants";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { useAppTheme } from "@/hooks/useAppTheme";

type summaryType = {
	index: number;
	summary: string;
};
const stacks = [
	faReact,
	faNodeJs,
	faJs,
	faCss3,
	faHtml5,
	faGithub,
	faDocker,
	faNpm,
	faPython,
	faFigma,
	faSass,
	faGitAlt,
	faBootstrap,
	faLinux,
];

const MyProjectsSection: React.FC = () => {
	const { appTheme } = useAppTheme();
	const [summary, setSummary] = useState<summaryType[]>([]);
	async function handleReadme(idx: number) {
		const value = await getRepoReadme(
			"stage-3b-frontend-track-hng-devyalchemist"
		);
		setSummary((prev) => [...prev, { index: idx, summary: value.summary }]);
		console.log(value);
	}
	return (
		<section className="py-16 px-6 mb-6	 bg-background text-foreground">
			<div className="w-full">
				<h1 className="text-4xl [font-family:var(--mono-font)] sm:text-5xl mb-12 text-center">
					My Projects
				</h1>

				<div className="flex justify-between gap-32">
					{
						<Accordion type="single" collapsible className="w-full">
							{repo.map((project) => (
								<AccordionItem
									className="py-2"
									key={project.id}
									value={`item-${project.id + 1}`}>
									<AccordionTrigger className="text-[1.5rem]">
										{project.name}
									</AccordionTrigger>
									<AccordionContent className="flex py-6  flex-col gap-4 ">
										<div className="flex gap-8 max-sm:flex-col mx-auto w-[1200px] max-sm:w-full	">
											<Card className="w-[40rem] max-sm:w-[22rem] max-sm:h-40 shrink-0 h-80 flex relative p-0  ">
												{/* <Carousel
													className="w-full "
													plugins={[
														Autoplay({
															delay: 8000,
														}),
													]}>
													<CarouselContent>
														{projects.map((project, index) => (
															<CarouselItem
																className="flex flex-col"
																key={index}>
																<div className="relative w-full h-80">
																	<Image
																		src={"https://picsum.photos/400"}
																		alt="project-image"
																		fill
																		className="object-cover rounded-xl"
																	/>
																</div>
															</CarouselItem>
														))}
													</CarouselContent>
													<CarouselPrevious />
													<CarouselNext />
												</Carousel>
												<div className="absolute bottom-4 right-4">
													<p className="text-white">{project.name}</p>
												</div>*/}
												<Image
													alt={project.name}
													src={project.imageUrl}
													fill
													className="object-cover"
												/>
											</Card>
											<div className="flex flex-col divide-y flex-1 gap-y-4 divide-slate-200/80">
												<div className="py-1">
													<p className="text-[1.5rem] py-2 [font-family:var(--mono-font)]		">
														{project.name}
													</p>
													<p
														className={`text-slate-600/80 ${
															appTheme === "dark" && "text-white"
														}`}>
														{project.description}
													</p>
												</div>
												<div>
													<p className="text-[1.2rem] py-2">Tech stacks</p>
													<ul className="flex gap-x-3 gap-y-2 flex-wrap">
														{project.techStack.map((stack, idx) => (
															<li
																className="font-bold [font-family:var(--mono-font)] "
																key={idx}>
																{stack}
															</li>
														))}
													</ul>
												</div>
												<div className="flex justify-end">
													<div className="flex gap-2">
														<a target="_blank" href={project.githubUrl}>
															<Button
																variant={"outline"}
																// onClick={() => handleReadme(idx)}
															>
																<FontAwesomeIcon icon={faCode} /> source
															</Button>
														</a>
														<a target="_blank" href={project.liveUrl}>
															<Button variant={"link"}>View Demo</Button>
														</a>
													</div>
												</div>
											</div>
										</div>
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

export default MyProjectsSection;
