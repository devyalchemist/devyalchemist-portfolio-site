import { Project } from "@/types/types";
import { Repo } from "@/types/types";

export const repo: Repo[] = [
	{
		id: 1,
		name: "devyalchemist-portfolio-site",
		description:
			"My professional portfolio site with a blog incorporated in it.",
		imageUrl: "/portfolio-images/portfolio-site.png",
		techStack: ["Reactjs", "Nextjs", "Shadcn", "Tailwindcss"],
		githubUrl: "https://github.com/devyalchemist/devyalchemist-portfolio-site",
		liveUrl: "https://devyalchemist-portfolio-site.vercel.app/",
	},
	{
		id: 2,
		name: "audiophile-web-app",
		description: "A fully responsive audio gadget ecommerce website",
		imageUrl: "/portfolio-images/audiophile.png",

		techStack: [
			"Nextjs",
			"TypeScript",
			"ConvexDB",
			"Zustand",
			"TailwindCSS",
			"React-Hook-Form",
			"Nodemailer",
		],
		githubUrl: "https://github.com/devyalchemist/audiophile-web-app",
		liveUrl: "https://stage-3a-frontend-track-hng-devyalc.vercel.app/",
	},
	{
		id: 3,
		name: "the-red-keep-app",
		description:
			"This is a fully responsive app for archiving and tracking books you've read",
		imageUrl: "/portfolio-images/red-keep.png",

		techStack: [
			"EJS(Embedded JS)",
			"ExpressJS",
			"supabase/supabase-js",
			"bcrypt",
			"passportJS",
			"Postgres",
		],
		githubUrl: "https://github.com/devyalchemist/the-red-keep-app",
		liveUrl: "https://the-red-keep-app.onrender.com",
	},
	{
		id: 4,
		name: "pizza-hut",
		description:
			"A fully responsive pizza ecommerce web app, making use of an API to manage tracking orders",
		imageUrl: "/portfolio-images/pizza-app.png",

		techStack: ["ReactJS", "TailwindCSS", "Redux"],
		githubUrl: "https://github.com/devyalchemist/pizza-hut",
		liveUrl: "https://pizza-app-murex-eight.vercel.app/",
	},
	{
		id: 5,
		name: "multi-framework-ticketing-web-app",
		description:
			"A multi-framework ticketing web app done in three frameworks - vue, twig, and react.",
		imageUrl: "/portfolio-images/ticket-app.png",

		techStack: ["ReactJS", "Twig", "Vue", "TailwindCSS"],
		githubUrl:
			"https://github.com/devyalchemist/multi-framework-ticketing-web-app",
		liveUrl: "https://stage-2-frontend-track-hng-devyalch.vercel.app/",
	},
	{
		id: 6,
		name: "chill-flix",
		description:
			"A movies explore platform with movie info using imdb api and appwrite services",
		imageUrl: "/portfolio-images/chill-flix.png",

		techStack: ["Appwrite", "ReactJS"],
		githubUrl: "https://github.com/devyalchemist/chill-flix",
		liveUrl: "https://chill-flix-omega.vercel.app/",
	},
	// {
	// 	id: 7,
	// 	name: "keeper-app",
	// 	description: "A clone of google keep app",
	// 	techStack: [],
	// 	githubUrl: "",
	// 	liveUrl: "",
	// },
	{
		id: 7,
		name: "eat-n-split-app",
		description: "An app for sharing bills amongst selected members",
		imageUrl: "/portfolio-images/eat-n-split.png",

		techStack: ["ReactJS"],
		githubUrl: "https://github.com/devyalchemist/eat-n-split-app",
		liveUrl: "https://eat-n-split-app-steel.vercel.app/",
	},
	// {
	// 	id: 9,
	// 	name: "world-wise-app",
	// 	description: "",
	// 	techStack: [],
	// 	githubUrl: "",
	// 	liveUrl: "",
	// },
	// {
	// 	id: 10,
	// 	name: "quiz-app",
	// 	description: "",
	// 	techStack: [],
	// 	githubUrl: "",
	// 	liveUrl: "",
	// },
	// {
	// 	id: 11,
	// 	name: "travel-list-app",
	// 	description: "",
	// 	techStack: [],
	// 	githubUrl: "",
	// 	liveUrl: "",
	// },
	{
		id: 8,
		name: "nike-web-app",
		description: "Nike Store ecommerce web app",
		imageUrl: "/portfolio-images/nike-web-app.png",

		techStack: ["React"],
		githubUrl: "https://github.com/devyalchemist/nike-web-app",
		liveUrl: "https://devyalchemist.github.io/nike-web-app/",
	},
];

export const projects: Project[] = [
	{
		id: 1,
		title: "My Portfolio Website",
		description:
			"My personal portfolio website incorporated with a blog site in WIP.",
		imageUrl: "https://picsum.photos/500",
		tech: ["Next.js", "TypeScript", "TailwindCSS"],
		githubUrl: "https://github.com/devyalchemist/portfolio",
		liveUrl: "#",
	},
	{
		id: 2,
		title: "Decentralized Chat App",
		description: "A real-time decentralized chat app using Solana blockchain.",
		imageUrl: "https://picsum.photos/500",
		tech: ["React", "Solana", "Web3.js"],
		githubUrl: "https://github.com/devyalchemist/dchat",
		liveUrl: "#",
	},
	{
		id: 3,
		title: "E-commerce dApp",
		description: "A full-stack decentralized e-commerce application.",
		imageUrl: "https://picsum.photos/500",
		tech: ["Next.js", "Solana", "TailwindCSS", "ShadCN"],
		githubUrl: "https://github.com/devyalchemist/ecommerce-dapp",
		liveUrl: "#",
	},
	{
		id: 4,
		title: "Dbank Solana",
		description: "A full-stack decentralized e-commerce application.",
		imageUrl: "https://picsum.photos/500",
		tech: ["Next.js", "Solana", "TailwindCSS", "ShadCN"],
		githubUrl: "https://github.com/devyalchemist/ecommerce-dapp",
		liveUrl: "#",
	},
	{
		id: 5,
		title: "Mapping hash",
		description: "A full-stack decentralized e-commerce application.",
		imageUrl: "https://picsum.photos/500",
		tech: ["Next.js", "Solana", "TailwindCSS", "ShadCN"],
		githubUrl: "https://github.com/devyalchemist/ecommerce-dapp",
		liveUrl: "#",
	},
	{
		id: 6,
		title: "Audiophile",
		description: "A full-stack decentralized e-commerce application.",
		imageUrl: "https://picsum.photos/500",
		tech: ["Next.js", "Solana", "TailwindCSS", "ShadCN"],
		githubUrl: "https://github.com/devyalchemist/ecommerce-dapp",
		liveUrl: "#",
	},
];
