import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each novel is a folder: src/content/novels/<slug>/
//   meta.yaml  — the fields below
//   cover.*    — cover image
//   pages/     — page images, sorted by filename (01.jpg, 02.jpg, ...)
const novels = defineCollection({
  loader: glob({ pattern: '*/meta.yaml', base: './src/content/novels' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      year: z.number(),
      blurb: z.string(),
      status: z.enum(['ongoing', 'complete']).default('ongoing'),
      cover: image(),
      coverAlt: z.string(),
    }),
});

// Each sketchbook piece is a yaml + image pair in src/content/sketchbook/,
// named YYYY-MM-DD-slug.yaml alongside YYYY-MM-DD-slug.jpg
const sketchbook = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/sketchbook' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      medium: z.string().optional(),
      tags: z.array(z.string()).default([]),
      alt: z.string(),
      image: image(),
      // Flag a piece to feature it on the Portfolio page
      portfolio: z.boolean().default(false),
    }),
});

export const collections = { novels, sketchbook };
