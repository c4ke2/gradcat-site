import { z, defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";

const gamePosts = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/gamePosts" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			slug: z.string(),
			slugfolder: z.string(),
			image: image(),
			imageAlt: z.string(),
			tagtext: z.string().optional(),
			excerpt: z.string().optional(),
			publishDate: z.coerce.date().default(new Date(2014, 0, 1)),
		}),
});

const assetPosts = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/assetPosts" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			slug: z.string(),
			slugfolder: z.string(),
			image: image(),
			imageAlt: z.string(),
			tagtext: z.string().optional(),
			excerpt: z.string().optional(),
			publishDate: z.coerce.date().default(new Date(2014, 0, 1)),
		}),
});

export const collections = { gamePosts, assetPosts };
