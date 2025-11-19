import { Button } from "@/components/ui/button";
import { colorPalette } from "@/constants/colors";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "antd";
import Link from "next/link";
// import { Button } from "antd";
const HomeHeader = () => {
	return (
		<header className="flex justify-between py-2 px-6 items-center bg-white/30 border-b border-black/20">
			<span
				className="font-bold text-[1.2rem] 				[font-family:var(--test-font)]
 ">
				devyalchemist
			</span>{" "}
			<div className="flex gap-8">
				<a href="https://github.com/devyalchemist" target="_blank">
					<Tooltip title="Check my github">
						<button className="aspect-square w-10 rounded-full bg-gray-200 hover:bg-gray-200/50 flex items-center justify-center">
							<FontAwesomeIcon className="text-black w-6 h-6" icon={faGithub} />
						</button>
					</Tooltip>
				</a>
				<Link href={"/blog"}>
					<Tooltip title="Read Tech updates and trends">
						{/* <button className=" bg-foreground hover:bg-foreground/50 flex gap-2 items-center px-4 py-2 rounded-[5px]">
							<span>Blog</span>
							<FontAwesomeIcon className="text-black w-6 h-6" icon={faShare} />
						</button>*/}
						<Button className="bg-gray-200 hover:bg-gray-200/50">
							<span className="text-black">Blog</span>
							<FontAwesomeIcon className="text-black w-6 h-6" icon={faShare} />
						</Button>
					</Tooltip>
				</Link>
			</div>
		</header>
	);
};

export default HomeHeader;
