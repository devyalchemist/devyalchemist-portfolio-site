"use client";
import Box from "./_components/Box";
import Image from "next/image";
import { useState } from "react";
import AboutMe from "./_sections/short-sections/AboutMe";
import ContactMe from "./_sections/short-sections/ContactMe";

import MyProjects from "./_sections/short-sections/MyProjects";
import MyTechStack from "./_sections/MyTechStack";
import MyProjectsSection from "./_sections/MyProjectsSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FadeOnScroll from "./_components/FadeOnScroll";
type menuType = {
	menuName: string;
	bgColor: string;
};
const menuList: menuType[] = [
	{ menuName: "About Me", bgColor: "bg-portfolio-blue" },
	{ menuName: "Contact Me", bgColor: "bg-portfolio-accent" },
	{ menuName: "My Projects", bgColor: "bg-portfolio-orange" },
	{ menuName: "Gallery", bgColor: "bg-green-700" },
];

function Page() {
	const [display, setDisplay] = useState(1);

	return (
		<>
			<Box>
				<section className="sm:py-12 py-4 dark">
					<div className="sm:flex-row overflow-hidden flex flex-col sm:items-start items-center gap-2">
						<div className="w-full sm:w-auto flex bg-gray-200">
							<div className="relative sm:w-[450px] sm:h-[500px] w-[200px] h-[220px] bg-gray-500">
								<Image
									fill
									className="object-cover"
									src={"/profilepic.png"}
									alt="profile-pic"
								/>
							</div>

							<div className="flex-1 sm:min-w-[24rem]  relative overflow-hidden">
								<ul className="flex h-full divide-accent divide-y-2 flex-col sm:text-[3rem]  [font-family:var(--mono-font)]">
									{menuList.map((menu, idx) => (
										<li
											key={idx}
											onClick={() => setDisplay(idx + 1)}
											className={`flex-1 flex justify-center relative group items-center cursor-pointer ${
												display === idx + 1
													? "bg-gray-500 text-white"
													: menu.bgColor
											}`}>
											<div
												className={`absolute left-0 top-0  h-full group-hover:block hidden  bg-gray-500 background-flow ${
													display === idx + 1 ? "block animate-none" : ""
												} `}></div>

											<span className="z-6 group-hover:text-white duration-500">
												{menu.menuName}
											</span>
										</li>
									))}
								</ul>
							</div>
						</div>

						<div className="sm:py-20 max-w-xl py-2 sm:px-4">
							{display == 1 && <AboutMe />}
							{display == 2 && <ContactMe />}
							{display == 3 && <MyProjects />}
						</div>
					</div>
				</section>
			</Box>
			{/* <AboutMeSection /> */}
			<FadeOnScroll>
				<section>
					<Box>
						<h1 className="text-4xl [font-family:var(--mono-font)]  sm:text-5xl mb-30 text-center">
							Random facts about me{" "}
						</h1>
						<div className="justify-center flex items-center">
							<div className="flex gap-4">
								<div className="w-[24rem] h-[24rem] relative">
									<Image
										src={"/earth-in-dark-bg.jpg"}
										alt="earth"
										fill
										className="object-cover"
									/>
								</div>
								<Card className="max-w-lg py-4 px-6 flex justify-between flex-col">
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Eligendi, perspiciatis. Aperiam totam ipsum dolores error
										dolorem, provident nisi inventore quo quasi. Est suscipit
										nisi totam perspiciatis repudiandae velit doloribus in!
									</p>
									<Button className="justify-self-end">Generate</Button>
								</Card>
							</div>
						</div>
					</Box>
				</section>
			</FadeOnScroll>
			<MyProjectsSection />
			<MyTechStack />
		</>
	);
}

export default Page;
