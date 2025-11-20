"use client";
import { Progress } from "antd";
import Image from "next/image";
import React from "react";
import CircularProgress from "./CircularProgressBar";

const AboutMeSection: React.FC = () => {
	return (
		<section className="py-16 px-6 text-foreground">
			{/* Header */}
			<h2 className="text-4xl font-bold mb-6 text-portfolio-orange">
				About Me
			</h2>

			{/* Layout: image + text */}
			<div className="flex flex-col sm:flex-row gap-8 items-center">
				{/* Profile Picture */}

				{/* Text */}
				<div className="flex flex-col gap-4">
					<p className="text-lg sm:text-base leading-relaxed">
						Hi! I&apos;m Devyalchemist, a full-stack developer with a passion
						for exploring decentralized systems. I love building web
						applications, learning new technologies, and sharing insights that
						help others navigate modern software development.
					</p>

					<p className="text-lg sm:text-base leading-relaxed">
						My work focuses on creating seamless user experiences and clean,
						maintainable code. Outside of coding, I enjoy exploring blockchain
						innovations, reading, and contributing to tech communities.
					</p>

					{/* Skills */}
					<div className="mt-4">
						<h3 className="font-semibold text-portfolio-blue mb-2">Skills</h3>
						<ul className="flex flex-wrap gap-2">
							{[
								"React",
								"Next.js",
								"Tailwind",
								"TypeScript",
								"Node.js",
								"Solana",
								"Web3",
							].map((skill) => (
								<li
									key={skill}
									className="px-3 py-1 rounded-full text-sm font-medium">
									<CircularProgress percentage={80} />
									<span className="">{skill}</span>
								</li>
							))}
						</ul>
					</div>

					{/* Fun fact / hobby */}
					<div className="mt-4">
						<h3 className="font-semibold text-portfolio-blue mb-2">Fun Fact</h3>
						<p className="text-sm text-gray-400">
							When I&apos;m not coding, I enjoy exploring decentralized systems,
							creating digital art, and gaming.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutMeSection;
