import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import React from "react";

const MyGallery = () => {
	return (
		<>
			<h1 className="font-test animate-bounce	 text- sm:text-5xl text-[1.5rem] font-bold mb-4">
				Search through my awesome moment
			</h1>
			<p className={`sm:text-lg  `}>
				It is believed that images convey up to{" "}
				<span className="font-bold text-blue-500">10X</span> more what text
				would. They leave a footprint in time and are wonderful for memories.
				Here are some of mine.
			</p>
			<div className="flex justify-end sm:px-12  mt-12">
				<Button className={`px-6 py-6`} variant={"outline"}>
					<span>My Gallery </span> <ArrowUpRight />
				</Button>
			</div>
		</>
	);
};

export default MyGallery;
