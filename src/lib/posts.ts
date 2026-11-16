import { getCollection, type CollectionEntry } from 'astro:content';
import { LANGS, langPath, type Lang } from '../i18n';

export type Post = CollectionEntry<'posts'> & { lang: Lang; slug: string };

function split(entry: CollectionEntry<'posts'>): Post {
  const [lang, ...rest] = entry.id.split('/');
  if (!LANGS.includes(lang as Lang)) {
    throw new Error(`Post "${entry.id}" must live in one of: ${LANGS.join(', ')}`);
  }
  return Object.assign(entry, { lang: lang as Lang, slug: rest.join('/') });
}

let cache: Post[] | undefined;
async function all(): Promise<Post[]> {
  cache ??= (await getCollection('posts', ({ data }) => import.meta.env.DEV || !data.draft))
    .map(split)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  return cache;
}

export const postsIn = async (lang: Lang) => (await all()).filter((p) => p.lang === lang);

export const postHref = (p: Pick<Post, 'lang' | 'slug'>) => langPath(p.lang, `posts/${p.slug}`);

/** Every language edition of the same post (same file name). */
export async function editionsOf(slug: string): Promise<Partial<Record<Lang, string>>> {
  const out: Partial<Record<Lang, string>> = {};
  for (const p of await all()) if (p.slug === slug) out[p.lang] = postHref(p);
  return out;
}

export function readingMinutes(body = ''): number {
  const words = body.replace(/```[\s\S]*?```/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}
