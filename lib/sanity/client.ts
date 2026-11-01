import { createClient } from "next-sanity";
import {
	createImageUrlBuilder,
	type SanityImageSource,
} from "@sanity/image-url";
import { Post, PostSummary } from "@/types/blog";

export const projectId =
	process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "31u9los2";
export const dataset = "production";
export const apiVersion = "2024-01-01";

export const client = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: process.env.NODE_ENV === "production",
});

const imageBuilder = createImageUrlBuilder({
	projectId,
	dataset,
});

export const urlForImage = (source: SanityImageSource) => {
	return imageBuilder.image(source);
};

export const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc){
  _id,
  title,
  slug,
  excerpt,
  tags,
  readTime,
  publishedAt,
  image
}`;

export const POST_BY_SLUG_QUERY = `*[
  _type == "post" 
  && slug.current == $slug
][0]{
  _id,
  title,
  slug,
  excerpt,
  tags,
  readTime,
  publishedAt,
  image,
  body
}`;

export const RECENT_POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
  && slug.current != $excludeSlug
]|order(publishedAt desc)[0...4]{
  _id,
  title,
  slug,
  excerpt,
  tags,
  readTime,
  publishedAt,
  image
}`;

export async function getPosts(): Promise<PostSummary[]> {
	try {
		return await client.fetch<PostSummary[]>(
			POSTS_QUERY,
			{},
			{ next: { revalidate: 60 } }
		);
	} catch (error) {
		console.error("Failed to fetch posts from Sanity:", error);
		return [];
	}
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
	try {
		return await client.fetch<Post>(
			POST_BY_SLUG_QUERY,
			{ slug },
			{ next: { revalidate: 60 } }
		);
	} catch (error) {
		console.error(`Failed to fetch post [${slug}] from Sanity:`, error);
		return null;
	}
}

export async function getRecentPosts(excludeSlug: string): Promise<PostSummary[]> {
	try {
		return await client.fetch<PostSummary[]>(
			RECENT_POSTS_QUERY,
			{ excludeSlug },
			{ next: { revalidate: 60 } }
		);
	} catch (error) {
		console.error("Failed to fetch recent posts from Sanity:", error);
		return [];
	}
}
