import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
    categories: z.array(z.string()).optional(),
    series: z.array(z.string()).optional(),
    slug: z.string().optional(),
    draft: z.boolean().optional()
  })
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    description: z.string().optional()
  })
});

export const collections = { posts, pages };
