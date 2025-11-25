"use client";
import { Button } from "@/components/ui/button";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import {
	faSun as faSunOutline,
	faMoon as faMoonOutline,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "antd";
import Link from "next/link";
import { useAppTheme } from "@/hooks/useAppTheme";

const HomeHeader = () => {
	const { appTheme, setAppTheme } = useAppTheme();

	function toggleTheme() {
		if (appTheme === "dark") {
			setAppTheme("light");
			document.documentElement.classList.remove("dark");
		} else {
			setAppTheme("dark");
			document.documentElement.classList.add("dark");
		}
	}

	return (
		<div className="dark top-0 z-1000 fixed w-full">
			<header className="flex  dark:bg-black dark:text-white justify-between py-2 px-4 items-center bg-white/50 backdrop-blur-md border-b-[0.5px] border-black/10 ">
				<Link href={"/"}>
					<span className="font-bold text-[1.2rem] 	[font-family:var(--test-font)]">
						devyalchemist
					</span>
				</Link>
				<div className="flex gap-2">
					<div className="flex gap-8">
						<a href="https://github.com/devyalchemist" target="_blank">
							<Tooltip title="Check my github">
								<button className="aspect-square w-10 rounded-full bg-gray-200 hover:bg-gray-200/50 flex items-center justify-center">
									<FontAwesomeIcon
										className="text-black w-6 h-6"
										icon={faGithub}
									/>
								</button>
							</Tooltip>
						</a>
						<Link href={"/blog"}>
							<Tooltip title="Read Tech updates and trends">
								<Button className="bg-gray-200 hover:bg-gray-200/50">
									<span className="text-black">Blog</span>
									<FontAwesomeIcon
										className="text-black w-6 h-6"
										icon={faShare}
									/>
								</Button>
							</Tooltip>
						</Link>
					</div>
					<Tooltip title={"custom color picker for text	"}>
						<Button onClick={toggleTheme}>
							{appTheme === "dark" ? (
								<FontAwesomeIcon icon={faSunOutline} />
							) : (
								<FontAwesomeIcon icon={faMoonOutline} />
							)}
						</Button>
					</Tooltip>
				</div>
			</header>
		</div>
	);
};

export default HomeHeader;
