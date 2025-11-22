import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().optional(),
    date: z.date(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    endDate: z.date().optional(),
    location: z.string().optional(),
    eventType: z.enum(['workshop', 'talk', 'social', 'coworking', 'other']).default('other'),
    image: z.string().optional(),
    registrationUrl: z.string().url().optional(),
  }),
});

const faq = defineCollection({
  type: 'content',
  schema: z.object({
    question: z.string(),
    order: z.number(),
    category: z.string().optional(),
  }),
});

export const collections = {
  blog,
  events,
  faq,
};
