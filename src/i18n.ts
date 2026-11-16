export const LANGS = ['en', 'de', 'tr'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'en';

export const LANG_LABEL: Record<Lang, string> = { en: 'EN', de: 'DE', tr: 'TR' };
export const LANG_NAME: Record<Lang, string> = { en: 'English', de: 'Deutsch', tr: 'Türkçe' };
const LOCALE: Record<Lang, string> = { en: 'en-GB', de: 'de-DE', tr: 'tr-TR' };

export const SITE = {
  author: 'Erol Yılmaz',
  wordmark: 'ERØL',
  github: 'https://github.com/erol1210',
};

const dict = {
  en: {
    siteTitle: 'ERØL — notes on building software',
    siteDescription: 'Erol builds small, useful software and writes about what each project teaches.',
    navWriting: 'Writing',
    navWork: 'Work',
    workTitle: 'Work',
    workIntro: 'Things I have built. The source code of these projects is private, so the pictures carry the story — and none of them show real people or real data.',
    provReal: 'Real app · invented data',
    provRealNote: 'The app’s own screens, run on demo or test data. Where a live system was used, every name, message and number was swapped for an invented one before the shot.',
    provMock: 'Mock · invented data',
    provMockNote: 'Redrawn in the app’s own look; names, numbers and addresses are made up.',
    galPrev: 'Previous image',
    galNext: 'Next image',
    galOpen: 'Enlarge image',
    galClose: 'Close',
    galOf: 'of',
    galLabel: 'Screenshots',
    seeAllWork: 'See all work',
    navAbout: 'About',
    skip: 'Skip to content',
    heroLead: 'I build small, useful software and write down what it taught me.',
    heroSub: 'Flask apps, admin panels, terminal tools and the odd Flutter experiment. Written in English, Deutsch and Türkçe.',
    fpCaption: 'This drawing is SHA-256("erol") walked by the drunken bishop. Every post gets its own.',
    fpHow: 'How it works',
    writing: 'Writing',
    noPosts: 'Nothing published in this language yet. Switch language above to read the other editions.',
    minRead: 'min read',
    backToWriting: 'All writing',
    alsoIn: 'Also in',
    themeToggle: 'Switch colour theme',
    langSwitch: 'Language',
    rss: 'RSS',
    aboutTitle: 'About',
    built: 'Things I have built',
    liveDemo: 'Live demo',
    source: 'Profile',
    notFound: 'This page does not exist.',
    notFoundLink: 'Go to the writing index',
  },
  de: {
    siteTitle: 'ERØL — Notizen übers Software-Bauen',
    siteDescription: 'Erol baut kleine, nützliche Software und schreibt darüber, was jedes Projekt lehrt.',
    navWriting: 'Texte',
    navWork: 'Arbeiten',
    workTitle: 'Arbeiten',
    workIntro: 'Was ich gebaut habe. Der Quellcode dieser Projekte ist privat, deshalb erzählen die Bilder – und keines zeigt echte Personen oder echte Daten.',
    provReal: 'Echte App · erfundene Daten',
    provRealNote: 'Die echten Bildschirme der App, mit Demo- oder Testdaten. Wo ein Live-System zu sehen ist, wurden vorher alle Namen, Nachrichten und Zahlen durch erfundene ersetzt.',
    provMock: 'Mock · erfundene Daten',
    provMockNote: 'Im Look der App nachgebaut; Namen, Zahlen und Adressen sind erfunden.',
    galPrev: 'Vorheriges Bild',
    galNext: 'Nächstes Bild',
    galOpen: 'Bild vergrößern',
    galClose: 'Schließen',
    galOf: 'von',
    galLabel: 'Screenshots',
    seeAllWork: 'Alle Arbeiten',
    navAbout: 'Über mich',
    skip: 'Zum Inhalt springen',
    heroLead: 'Ich baue kleine, nützliche Software und schreibe auf, was sie mich gelehrt hat.',
    heroSub: 'Flask-Apps, Admin-Panels, Terminal-Tools und ab und zu ein Flutter-Experiment. Auf Englisch, Deutsch und Türkisch.',
    fpCaption: 'Diese Zeichnung ist SHA-256("erol"), abgelaufen vom betrunkenen Läufer. Jeder Text bekommt seine eigene.',
    fpHow: 'So funktioniert es',
    writing: 'Texte',
    noPosts: 'In dieser Sprache ist noch nichts erschienen. Oben kannst du die Sprache wechseln.',
    minRead: 'Min. Lesezeit',
    backToWriting: 'Alle Texte',
    alsoIn: 'Auch auf',
    themeToggle: 'Farbschema wechseln',
    langSwitch: 'Sprache',
    rss: 'RSS',
    aboutTitle: 'Über mich',
    built: 'Was ich gebaut habe',
    liveDemo: 'Live-Demo',
    source: 'Profil',
    notFound: 'Diese Seite gibt es nicht.',
    notFoundLink: 'Zur Übersicht',
  },
  tr: {
    siteTitle: 'ERØL — yazılım yaparken aldığım notlar',
    siteDescription: 'Erol küçük, işe yarar yazılımlar yapıyor ve onlardan öğrendiklerini yazıyor.',
    navWriting: 'Yazılar',
    navWork: 'İşler',
    workTitle: 'İşler',
    workIntro: 'Yaptıklarım. Bu projelerin kaynak kodu gizli, o yüzden hikâyeyi görseller anlatıyor; hiçbirinde gerçek kişi ya da gerçek veri yok.',
    provReal: 'Gerçek uygulama · uydurma veri',
    provRealNote: 'Uygulamanın kendi ekranları; demo ya da test verisiyle. Canlı sistemden alınanlarda tüm isim, mesaj ve sayılar çekimden önce uydurma değerlerle değiştirildi.',
    provMock: 'Mock · uydurma veri',
    provMockNote: 'Uygulamanın kendi görünümüyle yeniden çizildi; isimler, sayılar ve adresler uydurma.',
    galPrev: 'Önceki görsel',
    galNext: 'Sonraki görsel',
    galOpen: 'Görseli büyüt',
    galClose: 'Kapat',
    galOf: '/',
    galLabel: 'Ekran görüntüleri',
    seeAllWork: 'Tüm işler',
    navAbout: 'Hakkımda',
    skip: 'İçeriğe geç',
    heroLead: 'Küçük, işe yarar yazılımlar yapıyorum; bana öğrettiklerini buraya yazıyorum.',
    heroSub: 'Flask uygulamaları, yönetim panelleri, terminal araçları ve arada bir Flutter denemesi. İngilizce, Almanca ve Türkçe.',
    fpCaption: 'Bu çizim, SHA-256("erol") değerinin sarhoş fil algoritmasıyla yürünmüş hâli. Her yazının kendine ait bir tane var.',
    fpHow: 'Nasıl çalışıyor',
    writing: 'Yazılar',
    noPosts: 'Bu dilde henüz yazı yok. Diğer sürümleri okumak için yukarıdan dili değiştir.',
    minRead: 'dk okuma',
    backToWriting: 'Tüm yazılar',
    alsoIn: 'Diğer dillerde',
    themeToggle: 'Renk temasını değiştir',
    langSwitch: 'Dil',
    rss: 'RSS',
    aboutTitle: 'Hakkımda',
    built: 'Yaptıklarım',
    liveDemo: 'Canlı demo',
    source: 'Profil',
    notFound: 'Bu sayfa yok.',
    notFoundLink: 'Yazılara dön',
  },
} satisfies Record<Lang, Record<string, string>>;

export type Strings = (typeof dict)['en'];
export const t = (lang: Lang): Strings => dict[lang];

/** Prefix a site-relative path with the deploy base (e.g. /erol-blog). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}

/** Path of a page in a given language: en lives at the root, others under /de, /tr. */
export function langPath(lang: Lang, path = '/'): string {
  const clean = path === '/' ? '/' : `/${path.replace(/^\/|\/$/g, '')}/`;
  const prefixed = lang === DEFAULT_LANG ? clean : `/${lang}${clean}`;
  return withBase(prefixed);
}

export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(LOCALE[lang], { year: 'numeric', month: 'short', day: '2-digit' }).format(date);
}

export const isoDate = (date: Date) => date.toISOString().slice(0, 10);
