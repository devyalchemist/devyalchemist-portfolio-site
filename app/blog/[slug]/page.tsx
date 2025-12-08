import { PortableText, type SanityDocument } from "next-sanity";
import {
	createImageUrlBuilder,
	type SanityImageSource,
} from "@sanity/image-url";
import { client } from "@/lib/sanity/client";
import Link from "next/link";
import Image from "next/image";
import SidePanel from "@/app/_components/blog/SidePanel";
import BackButton from "@/app/_components/BackButton";
import { Button } from "@/components/ui/button";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk, faAt } from "@fortawesome/free-solid-svg-icons";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
	projectId && dataset
		? createImageUrlBuilder({ projectId, dataset }).image(source)
		: null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const post = await client.fetch<SanityDocument>(
		POST_QUERY,
		await params,
		options
	);

	const postImageUrl = post.image
		? urlFor(post.image)?.width(550).height(310).url()
		: null;

	return (
		<div className="xl:grid grid-cols-[1fr_320px]">
			<div className="col-span-full">
				<div
					className={`bg-cover bg-center flex items-center relative justify-center text-white h-[120px] [font-family:var(--test-font)] `}
					style={{ backgroundImage: `url(${postImageUrl})` }}>
					<p className="z-10 ">{post.title}</p>
					<div className="inset-0 absolute bg-gradient-to-b from-gray-600/40 via-gray-800/50 to-black/80 w-full h-full"></div>
					<BackButton />
				</div>
			</div>
			<main className=" mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
				<Breadcrumb className="my-8">
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink href="/">Home</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbLink href="/blog">blog</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbPage>{post.title}</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
				<div className="pb-6 border-b ">
					<div className="flex gap-4  ">
						<p>{new Date(post.publishedAt).toString()}</p>
						<p>
							<FontAwesomeIcon icon={faAt} /> <span>kachi</span>
						</p>
					</div>
					{/* <Link href="/blog" className="hover:underline">
						← Back to posts
					</Link> */}
					<h1 className="text-4xl font-bold mb-8 py-4 border-b">
						{post.title}
					</h1>
					<div className="prose">
						<p>Published: {new Date(post.publishedAt).toString()}</p>
						{Array.isArray(post.body) && <PortableText value={post.body} />}
					</div>
				</div>
			</main>
			<SidePanel />
		</div>
	);
}
