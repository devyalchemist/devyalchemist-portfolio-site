"use client";
import Box from "./_components/Box";
import Image from "next/image";
import { useState } from "react";
import AboutMe from "./_components/AboutMe";
import ContactMe from "./_components/ContactMe";

import MyProjects from "./_components/MyProjectsSection";
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
											className={`flex-1 flex justify-center items-center cursor-pointer ${menu.bgColor}`}>
											{menu.menuName}
										</li>
									))}
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
