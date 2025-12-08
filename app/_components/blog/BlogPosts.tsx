import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client } from "@/lib/sanity/client";
type IndexPageProps = {
	render: (post: any) => React.ReactNode;
};

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function BlogPosts({ render }: IndexPageProps) {
	const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

	return posts.map((post) => render(post));
}
