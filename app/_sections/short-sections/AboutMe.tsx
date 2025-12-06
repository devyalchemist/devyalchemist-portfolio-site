import TextHighlight from "@/app/_components/TextHighlight";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import React from "react";

const AboutMe = () => {
	return (
		<>
			<h1 className="font-test animate-bounce	 text- sm:text-5xl text-[1.5rem] font-bold mb-4">
				Hi, I am Devyalchemist
			</h1>
			<p className={`sm:text-lg  dark:text-gray-300`}>
				I&apos;m a <TextHighlight>full-stack developer</TextHighlight> with a
				passion for exploring web applications
				<TextHighlight> decentralized systems</TextHighlight>. I build{" "}
				<TextHighlight>web applications</TextHighlight>, dive into new
				technologies, and share insights to help others navigate modern software
				development. Check out my work on and follow my journey into innovative
				web and decentralized solutions.
			</p>
			<div className="flex justify-end px-2 sm:px-12  mt-12">
				<a href="#about-me">
					<Button className={`px-6 py-6`} variant={"outline"}>
						<span>Read more </span> <ArrowUpRight />
					</Button>
				</a>
			</div>
		</>
	);
};

export default AboutMe;
