import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const MyProjects = () => {
	return (
		<div className="flex flex-col h-[40rem]">
			<h1 className="font-test animate-bounce	 text- sm:text-5xl text-[1.5rem] font-bold mb-4">
				Browse through what I have built
			</h1>
			<p className={`sm:text-lg  `}>
				With over 2 years of experience, I have worked on scalable web
				applications in various fields.
			</p>
			<div className="relative noise bg-black sm:h-[12rem] mt-4">
				<div className="w-[24rem] h-[10rem] absolute right-0 bottom-0">
					<Image
						src={"/laptop-image-with-glow.jpg"}
						fill
						className="object-cover"
						alt="my-projects"
					/>
				</div>
				<div className="flex absolute right-4 bottom-4 justify-end text-white mt-12">
					<a href="#gallery">
						<Button className={`px-6 py-6`} variant={"outline"}>
							<span>Read more </span> <ArrowUpRight />
						</Button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default MyProjects;
