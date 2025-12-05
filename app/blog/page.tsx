"use client";
import { Button } from "@/components/ui/button";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "../_components/Box";
import BlogCard from "../_components/blog/BlogCard";
import { useRouter } from "next/navigation";

const Page = () => {
	const router = useRouter();
	return (
		<section>
			<div className="bg-black flex items-center justify-center text-white h-[120px] [font-family:var(--test-font)] relative">
				welcome to my tech-digest
				<Button
					onClick={() => router.back()}
					className="aspect-square w-8 absolute top-5 left-5">
					<FontAwesomeIcon icon={faArrowLeft} />
				</Button>
			</div>

			<Box fullHeight={false}>
				<div className="mt-8  justify-between  flex flex-wrap gap-y-8">
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
				</div>
			</Box>
		</section>
	);
};

export default Page;
