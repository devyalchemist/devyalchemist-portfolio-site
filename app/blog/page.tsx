import Box from "../_components/Box";
import BlogCard from "../_components/blog/BlogCard";
import { type SanityDocument } from "next-sanity";
import { client } from "@/lib/sanity/client";
import BackButton from "../_components/BackButton";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };
const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
export default async function Page() {
	return (
		<section>
			<div className="bg-black flex items-center justify-center text-white h-[120px] [font-family:var(--test-font)] relative">
				welcome to my tech-digest
				<BackButton />
			</div>

			<Box fullHeight={true}>
				<div className="mt-8  justify-between  flex flex-wrap gap-y-8">
					{posts.map((post, idx) => (
						<BlogCard key={idx} post={post} />
					))}
				</div>
			</Box>
		</section>
	);
}
