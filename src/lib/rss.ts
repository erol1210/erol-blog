import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { postsIn, postHref } from './posts';
import { t, type Lang } from '../i18n';

export async function feed(lang: Lang, context: APIContext) {
  const s = t(lang);
  const posts = await postsIn(lang);
  return rss({
    title: s.siteTitle,
    description: s.siteDescription,
    // include the base path, otherwise the channel <link> points at the bare domain
    site: new URL(import.meta.env.BASE_URL, context.site!).href,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: postHref(p),
      categories: p.data.tags,
    })),
    customData: `<language>${lang}</language>`,
  });
}
