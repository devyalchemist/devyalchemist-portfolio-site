import { type PortableTextBlock } from "next-sanity";

export interface SanityImage {
	_type: "image";
	asset: {
		_ref: string;
		_type: "reference";
	};
	alt?: string;
	caption?: string;
	hotspot?: {
		x: number;
		y: number;
		height: number;
		width: number;
	};
}

export interface Post {
	_id: string;
	_type: "post";
	title: string;
	slug: {
		current: string;
	};
	excerpt?: string;
	tags?: string[];
	readTime?: string;
	publishedAt: string;
	image?: SanityImage;
	body?: PortableTextBlock[];
}

export interface PostSummary {
	_id: string;
	title: string;
	slug: {
		current: string;
	};
	excerpt?: string;
	tags?: string[];
	readTime?: string;
	publishedAt: string;
	image?: SanityImage;
}
