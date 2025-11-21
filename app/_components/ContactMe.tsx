import { Button } from "@/components/ui/button";
import {
	faGithub,
	faLinkedin,
	faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import React from "react";
const socials = [
	{
		media: "LinkedIn",
		icon: faLinkedin,
		link: "https://www.linkedin.com/in/gospel-ugwuja-devyalchemist/",
	},
	{ media: "Twitter", icon: faXTwitter, link: "https://x.com/devyalchemist" },
	{ media: "Github", icon: faGithub, link: "https://github.com/devyalchemist" },
];
const ContactMe = () => {
	const { theme } = useTheme();

	return (
		<>
			<h1 className="font-test animate-bounce sm:text-5xl text-[1.4rem] font-bold mb-4">
				Reach out to me on{" "}
			</h1>

			<div className="text-lg text-gray-600 ">
				<ul className="flex flex-col gap-x-20  divide-accent/20 divide-y">
					{socials.map((social, idx) => (
						<li
							className={`flex-1 py-2 ${
								theme === "dark"
									? "hover:bg-white/20 hover:text-white"
									: "hover:bg-accent/40 hover:text-white "
							} rounded-[5px] px-2 items-center`}
							key={idx}>
							<a
								target="_blank"
								className="flex gap-x-4 w-full items-center"
								href={social.link}>
								<Button
									// size={"icon"}
									variant="outline"
									className="h-16 aspect-square rounded-full">
									<FontAwesomeIcon
										className="text-[1.5rem]"
										icon={social.icon}
									/>
								</Button>
								<span>{social.media}</span>
							</a>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default ContactMe;
