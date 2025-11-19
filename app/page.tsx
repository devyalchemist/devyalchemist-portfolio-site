import React from "react";
import Box from "./_components/Box";
import Image from "next/image";

function Page() {
	return (
		<>
			<Box>
				<section className="sm:py-12 py-4">
					<div className="sm:flex-row flex flex-col items-center gap-2">
						<div className="relative sm:w-[450px] sm:h-[500px] w-[200px] h-[220px] bg-gray-500">
							<Image
								fill
								className="object-cover"
								src={"/profilepic.png"}
								alt="profile-pic"
							/>
						</div>
						<div className="py-20">
							<h1 className="font-test text- sm:text-5xl font-bold mb-4">
								Hi, I am Devyalchemist
							</h1>
							<p className="text-lg text-gray-600 max-w-xl">
								I&apos;m a full-stack developer with a passion for exploring
								decentralized systems. I build web applications, dive into new
								technologies, and share insights to help others navigate modern
								software development. Check out my work on and follow my journey
								into innovative web and decentralized solutions.
							</p>
						</div>
					</div>
				</section>
			</Box>
		</>
	);
}

export default Page;
