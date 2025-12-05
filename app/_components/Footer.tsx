"use client";

import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import Box from "./Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
	faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
	const [email, setEmail] = useState("");

	const handleSubscribe = () => {
		if (!email) return alert("Please enter your email");
		// You can integrate your subscription logic here
		alert(`Subscribed with ${email}`);
		setEmail("");
	};

	return (
		<footer className="bg-gray-900 text-white max-sm:px-0 py-8 px-4">
			{/* <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4"> */}
			<Box fullHeight={false}>
				{/* Logo / Branding */}
				<div className="flex gap-80 max-sm:gap-12 max-sm:flex-col ">
					<div className="text-xl font-bold">devyalchemist</div>

					{/* <div className="flex items-center sm:items-start sm:w-auto gap-2">
						<Input
							type="email"
							className="sm:flex-1 px-4 py-2 rounded-md text-black outline-none focus:ring-2 w-[32rem] max-sm:w-[16rem] focus:ring-blue-400"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Enter your email"
						/>
						{/* <input
							type="email"
							placeholder="Enter your email"
							className="flex-1 px-4 py-2 rounded-md text-black outline-none focus:ring-2 focus:ring-blue-400"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/> 
						<button
							className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
							onClick={handleSubscribe}>
							Subscribe
						</button>
					</div> */}
				</div>
			</Box>
			{/* </div> */}
			<div className="flex justify-center items-center mt-8 gap-x-6">
				<a target="_blank" href="https://github.com/devyalchemist">
					<FontAwesomeIcon
						className="text-[2rem] hover:text-slate-300"
						icon={faGithub}
					/>
				</a>
				<a target="_blank" href="https://x.com/devyalchemist">
					<FontAwesomeIcon
						className="text-[2rem] hover:text-slate-300"
						icon={faXTwitter}
					/>
				</a>
				<a
					href="https://www.linkedin.com/in/gospel-ugwuja-devyalchemist/"
					target="_blank">
					<FontAwesomeIcon
						className="text-[2rem] hover:text-slate-300"
						icon={faLinkedin}
					/>
				</a>
			</div>
			{/* Footer links / copyright */}
			<div className="mt-6 text-sm text-gray-400 text-center">
				© {new Date().getFullYear()} devyalchemist. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
