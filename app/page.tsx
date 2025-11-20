"use client";
import { Card } from "antd";
import Box from "./_components/Box";
import Image from "next/image";
import { useState } from "react";
import AboutMe from "./_components/AboutMe";
import ContactMe from "./_components/ContactMe";
import { useTheme } from "@/hooks/useTheme";
import AboutMeSection from "./_components/AboutMeSection";
import MyProjects from "./_components/MyProjectsSection";

function Page() {
	const [display, setDisplay] = useState(1);
	// const { theme, setTheme } = useTheme();
	// console.log(theme);
	return (
		<>
			<Box>
				<section className="sm:py-12 py-4 dark">
					<div className="sm:flex-row overflow-hidden flex flex-col sm:items-start items-center gap-2">
						<div className="w-full flex bg-gray-200">
							<div className="relative sm:w-[450px] sm:h-[500px] w-[200px] h-[220px] bg-gray-500">
								<Image
									fill
									className="object-cover"
									src={"/profilepic.png"}
									alt="profile-pic"
								/>
							</div>
							<div className="flex-1 relative overflow-hidden">
								<ul className="flex h-full divide-accent divide-y-2 flex-col sm:text-[3rem]  [font-family:var(--mono-font)]">
									<li
										onClick={() => setDisplay(1)}
										className="flex-1 flex justify-center items-center cursor-pointer bg-portfolio-blue">
										About Me
									</li>
									<li
										onClick={() => setDisplay(2)}
										className="flex-1 flex justify-center items-center cursor-pointer bg-portfolio-accent">
										Contact Me
									</li>
									<li
										onClick={() => setDisplay(3)}
										className="flex-1 flex justify-center items-center cursor-pointer bg-portfolio-orange">
										Gallery
									</li>
									<li
										onClick={() => setDisplay(4)}
										className="flex-1 flex justify-center items-center cursor-pointer bg-green-700">
										My Projects
									</li>
								</ul>
							</div>
						</div>
						<div className="sm:py-20 max-w-xl py-2 sm:px-4">
							{display == 1 && <AboutMe />}
							{display == 2 && <ContactMe />}
							{display == 3 && <AboutMe />}
						</div>
					</div>
				</section>
			</Box>
			{/* <AboutMeSection /> */}
			<MyProjects />
		</>
	);
}

export default Page;
