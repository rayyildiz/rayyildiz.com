import type { CollectionEntry } from 'astro:content';

export type Lang = 'en' | 'tr';

export function getLangFromId(id: string): Lang {
  if (id.startsWith('tr/')) return 'tr';
  return 'en';
}

export function isLangPost(lang: Lang, post: CollectionEntry<'posts'>): boolean {
  return getLangFromId(post.id) === lang;
}

export function getPostSlug(post: CollectionEntry<'posts'>): string {
  if (post.data.slug) return post.data.slug;

  // Fall back to the last segment of the generated slug/id.
  const derived = post.slug.split('/').pop();
  if (!derived) throw new Error(`Unable to derive slug for post: ${post.id}`);
  return derived;
}

export function postDateValue(post: CollectionEntry<'posts'>): number {
  return post.data.date ? post.data.date.getTime() : 0;
}
