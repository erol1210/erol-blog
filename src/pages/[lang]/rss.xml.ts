import type { APIContext } from 'astro';
import { feed } from '../../lib/rss';
import type { Lang } from '../../i18n';

export const getStaticPaths = () => [{ params: { lang: 'de' } }, { params: { lang: 'tr' } }];
export const GET = (context: APIContext) => feed(context.params.lang as Lang, context);
