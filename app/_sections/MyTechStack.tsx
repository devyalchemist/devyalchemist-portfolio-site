"use client";

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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import CircularProgress from "../_components/CircularProgressBar";
import { useState } from "react";

export default function MyTechStack() {
	const items = [
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

	const doubled = [...items, ...items]; // important for smooth infinite loop
	const [animated, setAnimated] = useState(true);
	function stopAnimation() {
		console.log("animation stopped");
		setAnimated(false);
	}
	function startAnimation() {
		setAnimated(true);
	}
	return (
		<div className="w-full">
			<h1 className="text-4xl [font-family:var(--mono-font)] sm:text-5xl mb-12 text-center">
				My Tech Stacks
			</h1>{" "}
			<div className="overflow-hidden w-full">
				<div className="flex carousel-track-phone  gap-x-4">
					{doubled.map((src, i) => (
						<div
							key={i}
							className="sm:min-w-[200px] min-w-[150px]  bg-slate-200/20  py-8 px-4 rounded-[5px] hover:bg-slate-100/10 hover:border flex-col flex-shrink-0 flex items-center justify-center">
							{/* <CircularProgress percentage={39} /> */}
							<div className="flex flex-col gap-y-6 items-center">
								React <FontAwesomeIcon className="text-[3rem]" icon={src} />
							</div>
						</div>
					))}
				</div>
				<div
					className={`flex ${
						animated ? "carousel-track-phone-rev" : " animate-none"
					} mt-4 animate-none gap-x-4`}>
					{doubled.map((src, i) => (
						<div
							key={i}
							// onMouseEnter={stopAnimation}
							// onMouseLeave={startAnimation}
							className="sm:min-w-[200px] min-w-[150px]  bg-slate-200/20  py-8 px-4 rounded-[5px] hover:bg-slate-100/10 hover:border flex-col flex-shrink-0 flex items-center justify-center">
							{/* <CircularProgress percentage={39} /> */}
							<div className="flex flex-col gap-y-6 items-center">
								React <FontAwesomeIcon className="text-[3rem]" icon={src} />
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
