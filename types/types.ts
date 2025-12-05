export type Themetype = {
	appTheme: "light" | "dark";
	setAppTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
};

export type Project = {
	id: number;
	title: string;
	description: string;
	imageUrl: string;
	tech: string[];
	githubUrl?: string;
	liveUrl?: string;
};
export type Repo = {
	id: number;
	name: string;
	description: string;
	techStack: string[];
	githubUrl?: string;
	liveUrl?: string;
};
