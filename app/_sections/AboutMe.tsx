import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";
import { useAppTheme } from "@/hooks/useAppTheme";
import { getRandomFact } from "@/services/apiRandomFacts";
import { faSadCry } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Wand } from "lucide-react";
import { useState } from "react";
import FadeOnScroll from "../_components/FadeOnScroll";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Box from "../_components/Box";

const AboutMe = () => {
	const [display, setDisplay] = useState(1);
	const [fact, setFact] = useState("");
	const [promptLoading, setPromptLoading] = useState(false);
	const [userPrompt, setUserPrompt] = useState("");
	async function generateFact(prompt: string) {
		setPromptLoading(true);
		const res = await getRandomFact(prompt);
		setPromptLoading(false);
		console.log(res);
		setFact(res.message.answer);
	}
	const { appTheme } = useAppTheme();
	return (
		<FadeOnScroll>
			<section>
				<Box>
					<h1
						id="about-me"
						className="text-4xl max-sm:text-[1.5rem] [font-family:var(--mono-font)]  sm:text-5xl mb-30 text-center">
						Random facts about me
					</h1>
					<div className="justify-center flex items-center">
						<div className="flex sm:gap-4 max-sm:flex-col">
							<div className="sm:w-[24rem] max-sm:w-[22rem] h-[24rem] max-sm:h-[10rem] relative">
								<Image
									src={"/earth-in-dark-bg.jpg"}
									alt="earth"
									fill
									className="object-cover"
								/>
							</div>
							<Card className="max-w-lg sm:w-[24rem] py-4 px-6 flex justify-between flex-col max-sm:h-[320px]">
								{!fact ? (
									<div className="flex flex-1 flex-col justify-center items-center">
										<FontAwesomeIcon
											className={`text-[5rem] text-gray-300/20 ${
												appTheme === "dark"
													? "text-gray-300/20 "
													: "text-slate-900/30"
											}`}
											icon={faSadCry}
										/>
										<p
											className={`text-gray-300/20 ${
												appTheme === "dark"
													? "text-gray-300/20 "
													: "text-slate-900/30"
											}`}>
											Dare to ask!
										</p>
									</div>
								) : promptLoading ? (
									<div className="flex flex-col gap-2">
										<Skeleton className="w-full h-4" />
										<Skeleton className="w-full h-4" />
										<Skeleton className="w-full h-4" />
										<Skeleton className="w-full h-4" />
										<Skeleton className="w-full h-4" />
										<Skeleton className="w-[40%] h-4" />
									</div>
								) : (
									fact
								)}
								<div className="flex-col flex gap-2">
									<Input
										placeholder="Ask about devyalchemist"
										value={userPrompt}
										onChange={(e) => setUserPrompt(e.target.value)}
									/>
									<Button
										disabled={promptLoading}
										onClick={() => generateFact(userPrompt)}
										className="justify-self-end">
										{promptLoading && <Spinner />}
										Generate{" "}
										<span>
											<Wand />
										</span>
									</Button>
								</div>
							</Card>
						</div>
					</div>
				</Box>
			</section>
		</FadeOnScroll>
	);
};

export default AboutMe;
