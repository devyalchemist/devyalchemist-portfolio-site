import { type SanityDocument } from "next-sanity";
import { client } from "@/lib/sanity/client";
import BlogPosts from "./BlogPosts";
import BlogCard from "./BlogCard";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };
const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
const SidePanel = () => {
	return (
		<div className="bg-blue-400 w-full p-2">
			<BlogPosts render={(post) => <BlogCard post={post} />} />
		</div>
	);
};

export default SidePanel;
