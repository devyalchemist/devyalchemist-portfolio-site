import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import React from "react";

const AboutMe = () => {
	return (
		<>
			<h1 className="font-test animate-bounce	 text- sm:text-5xl text-[1.5rem] font-bold mb-4">
				Hi, I am Devyalchemist
			</h1>
			<p className={`sm:text-lg  `}>
				I&apos;m a full-stack developer with a passion for exploring
				decentralized systems. I build web applications, dive into new
				technologies, and share insights to help others navigate modern software
				development. Check out my work on and follow my journey into innovative
				web and decentralized solutions.
			</p>
			<div className="flex justify-end px-12 text-white mt-12">
				<Button className={`px-6 py-6`} variant={"outline"}>
					<span>Read more </span> <ArrowUpRight />
				</Button>
			</div>
		</>
	);
};

export default AboutMe;
