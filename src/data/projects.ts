import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n';

import finance from '../assets/work/finance.png';
import todo from '../assets/work/todo.png';
import meplanner from '../assets/work/meplanner.png';
import meplannerPhone from '../assets/work/meplanner-phone.png';
import heimdall from '../assets/work/heimdall.png';
import squadjs from '../assets/work/squadjs.png';
import ff from '../assets/work/ff.png';
import treffy from '../assets/work/treffy.png';
import toplumail from '../assets/work/toplumail.png';
import qr from '../assets/work/bitirme.png';

/**
 * How a picture was made — shown next to every image so nobody mistakes a
 * mock for a live system.
 *  - demo: the real app, running locally on its seed data (fictional people and numbers)
 *  - mock: a redrawn screen in the app's own visual language, with invented data
 */
export type Provenance = 'demo' | 'mock';
export type Frame = 'browser' | 'phone' | 'window' | 'bare';

export interface Shot {
  src: ImageMetadata;
  frame: Frame;
  /** Text in the browser address bar / window title. Never a real host. */
  chrome?: string;
  alt: Record<Lang, string>;
}

export interface Project {
  id: string;
  name: string;
  stack: string;
  kind: Provenance;
  demo?: string;
  shots: Shot[];
  text: Record<Lang, string>;
}

export const projects: Project[] = [
  {
    id: 'erol-finance',
    name: 'ERØL Finance',
    stack: 'Flask · SQLAlchemy',
    kind: 'demo',
    demo: 'https://erol-finance-demo.onrender.com',
    shots: [
      {
        src: finance,
        frame: 'browser',
        chrome: 'localhost/en/dashboard',
        alt: {
          en: 'ERØL Finance dashboard: budget rings per currency, latest projects, an over-budget warning.',
          de: 'ERØL-Finance-Dashboard: Budgetringe je Währung, letzte Projekte, eine Überschreitungswarnung.',
          tr: 'ERØL Finance paneli: para birimine göre bütçe halkaları, son projeler, bütçe aşımı uyarısı.',
        },
      },
    ],
    text: {
      en: 'Project budgets with labour, material and other cost lines: planned vs. actual vs. balance, inline editing and Excel exports.',
      de: 'Projektbudgets mit Personal-, Material- und sonstigen Kosten: Plan, Ist und Saldo, Inline-Bearbeitung und Excel-Export.',
      tr: 'İşçilik, malzeme ve diğer gider kalemleriyle proje bütçeleri: planlanan, gerçekleşen ve kalan; satır içi düzenleme ve Excel çıktısı.',
    },
  },
  {
    id: 'erol-tasks',
    name: 'ERØL Tasks',
    stack: 'Flask · SQLAlchemy',
    kind: 'demo',
    shots: [
      {
        src: todo,
        frame: 'browser',
        chrome: 'localhost/',
        alt: {
          en: 'ERØL Tasks list: tasks with project, assignee, due date and approval state.',
          de: 'ERØL-Tasks-Liste: Aufgaben mit Projekt, Zuständigen, Fälligkeit und Freigabestatus.',
          tr: 'ERØL Tasks listesi: proje, sorumlu, bitiş tarihi ve onay durumuyla görevler.',
        },
      },
    ],
    text: {
      en: 'Team task tracking: managers assign, assignees complete, managers approve. Recurring tasks and e-mail reminders.',
      de: 'Aufgaben im Team: Leitung vergibt, Zuständige erledigen, Leitung gibt frei. Wiederkehrende Aufgaben und E-Mail-Erinnerungen.',
      tr: 'Ekip görev takibi: yönetici atar, sorumlu tamamlar, yönetici onaylar. Tekrarlayan görevler ve e-posta hatırlatmaları.',
    },
  },
  {
    id: 'meplanner',
    name: 'mePlanner',
    stack: 'Flask · SQLAlchemy',
    kind: 'demo',
    demo: 'https://meplanner-demo.onrender.com',
    shots: [
      {
        src: meplanner,
        frame: 'browser',
        chrome: 'localhost/',
        alt: {
          en: 'mePlanner day plan on desktop: meals per slot, calendar, today’s recipes.',
          de: 'mePlanner-Tagesplan am Desktop: Mahlzeiten je Slot, Kalender, heutige Rezepte.',
          tr: 'Masaüstünde mePlanner gün planı: öğünler, takvim, bugünün tarifleri.',
        },
      },
      {
        src: meplannerPhone,
        frame: 'phone',
        alt: {
          en: 'mePlanner on a phone: week strip and meal list.',
          de: 'mePlanner auf dem Handy: Wochenleiste und Mahlzeitenliste.',
          tr: 'Telefonda mePlanner: hafta şeridi ve öğün listesi.',
        },
      },
    ],
    text: {
      en: 'Meal planner: spread meals over the day, keep recipes, track water and calorie goals. Works on desktop and phone.',
      de: 'Essensplaner: Mahlzeiten über den Tag verteilen, Rezepte sammeln, Wasser- und Kalorienziele im Blick. Für Desktop und Handy.',
      tr: 'Yemek planlayıcı: öğünleri güne yay, tariflerini sakla, su ve kalori hedeflerini takip et. Masaüstünde ve telefonda çalışır.',
    },
  },
  {
    id: 'heimdall',
    name: 'Heimdall',
    stack: 'Node · React · SquadJS',
    kind: 'mock',
    shots: [
      {
        src: heimdall,
        frame: 'browser',
        chrome: 'panel.example.com',
        alt: {
          en: 'Heimdall admin dashboard: server, player and ban counts, server list, live moderation feed.',
          de: 'Heimdall-Admin-Dashboard: Server-, Spieler- und Bann-Zahlen, Serverliste, Live-Moderationsfeed.',
          tr: 'Heimdall yönetim paneli: sunucu, oyuncu ve ban sayıları, sunucu listesi, canlı moderasyon akışı.',
        },
      },
    ],
    text: {
      en: 'Web admin and moderation panel for a Squad game server community: players, bans, live events, built on SquadJS.',
      de: 'Web-Admin- und Moderationspanel für eine Squad-Gameserver-Community: Spieler, Banns, Live-Ereignisse, gebaut auf SquadJS.',
      tr: 'Bir Squad oyun sunucusu topluluğu için web yönetim ve moderasyon paneli: oyuncular, banlar, canlı olaylar; SquadJS üzerine.',
    },
  },
  {
    id: 'squadjs-plugins',
    name: 'SquadJS plugins',
    stack: 'Node · node:test',
    kind: 'mock',
    shots: [
      {
        src: squadjs,
        frame: 'bare',
        alt: {
          en: 'Terminal log of the plugins at work — welcome, team balance, spawnkill guard — followed by a passing test run.',
          de: 'Terminal-Log der Plugins bei der Arbeit – Begrüßung, Team-Balance, Spawnkill-Schutz – und ein grüner Testlauf.',
          tr: 'Eklentilerin terminal günlüğü — karşılama, takım dengesi, spawnkill koruması — ve başarılı bir test çalıştırması.',
        },
      },
    ],
    text: {
      en: 'Custom plugins for a game server: team balancing, seeder whitelist, spawnkill and teamkill handling, round highlights. Every plugin has tests.',
      de: 'Eigene Plugins für einen Gameserver: Team-Balance, Seeder-Whitelist, Spawnkill- und Teamkill-Regeln, Rundenhighlights. Jedes Plugin hat Tests.',
      tr: 'Bir oyun sunucusu için özel eklentiler: takım dengeleme, seeder whitelist, spawnkill ve teamkill kuralları, tur özetleri. Her eklentinin testi var.',
    },
  },
  {
    id: 'ff',
    name: 'FF — Financial Forecasting',
    stack: 'FastAPI · PostgreSQL · scikit-learn · React',
    kind: 'mock',
    shots: [
      {
        src: ff,
        frame: 'browser',
        chrome: 'localhost:5173',
        alt: {
          en: 'FF dashboard: shortfall risk, projected cash balance with an interval band, risk drivers and a what-if panel.',
          de: 'FF-Dashboard: Engpassrisiko, prognostizierter Kassenbestand mit Intervallband, Risikotreiber und Was-wäre-wenn-Panel.',
          tr: 'FF paneli: nakit açığı riski, aralık bandıyla öngörülen nakit bakiyesi, risk etkenleri ve "ya şöyle olursa" paneli.',
        },
      },
    ],
    text: {
      en: 'Liquidity-gap forecasting for small businesses: financial CSVs go into PostgreSQL, a classifier predicts cash shortfalls, a React UI explains why.',
      de: 'Liquiditätsprognose für KMU: Finanz-CSVs landen in PostgreSQL, ein Klassifikator sagt Engpässe voraus, eine React-Oberfläche erklärt warum.',
      tr: 'KOBİ’ler için nakit açığı tahmini: finansal CSV’ler PostgreSQL’e girer, bir sınıflandırıcı nakit sıkışmasını öngörür, React arayüzü nedenini açıklar.',
    },
  },
  {
    id: 'treffy',
    name: 'Treffy',
    stack: 'Flutter · Riverpod · Supabase',
    kind: 'mock',
    shots: [
      {
        src: treffy,
        frame: 'phone',
        alt: {
          en: 'Treffy event list on a phone: volunteer events with date, place and how many people joined.',
          de: 'Treffy-Eventliste auf dem Handy: Freiwilligen-Events mit Datum, Ort und Teilnehmerzahl.',
          tr: 'Telefonda Treffy etkinlik listesi: tarih, yer ve katılımcı sayısıyla imece etkinlikleri.',
        },
      },
    ],
    text: {
      en: 'Mobile app for volunteer get-togethers: create an event, manage who joins, share tasks and contributions. TR, EN and DE from day one.',
      de: 'Mobile App für gemeinsame Freiwilligenaktionen: Event anlegen, Teilnahme verwalten, Aufgaben und Beiträge teilen. Von Anfang an TR, EN und DE.',
      tr: 'İmece usulü etkinlikler için mobil uygulama: etkinlik oluştur, katılımı yönet, görev ve katkıları paylaş. İlk günden TR, EN ve DE.',
    },
  },
  {
    id: 'toplu-mail',
    name: 'Toplu Mail',
    stack: 'Python · Textual',
    kind: 'mock',
    shots: [
      {
        src: toplumail,
        frame: 'window',
        chrome: 'toplu-mail',
        alt: {
          en: 'Toplu Mail terminal UI: campaign details, progress bar and a per-recipient send log.',
          de: 'Toplu-Mail-Terminaloberfläche: Kampagnendetails, Fortschrittsbalken und Versandprotokoll je Empfänger.',
          tr: 'Toplu Mail terminal arayüzü: kampanya bilgileri, ilerleme çubuğu ve alıcı bazında gönderim günlüğü.',
        },
      },
    ],
    text: {
      en: 'Terminal bulk mailer: personal greetings and attachments from an Excel list, and it resumes where it stopped.',
      de: 'Serienmail im Terminal: persönliche Anrede und Anhänge aus einer Excel-Liste, setzt nach Abbruch dort fort, wo es war.',
      tr: 'Terminalde toplu mail: Excel listesinden kişiye özel hitap ve eklerle gönderir, yarıda kalırsa kaldığı yerden devam eder.',
    },
  },
  {
    id: 'qr-yoklama',
    name: 'QR Yoklama',
    stack: 'Flask · Supabase',
    kind: 'mock',
    shots: [
      {
        src: qr,
        frame: 'browser',
        chrome: 'localhost/ogretmen/qr',
        alt: {
          en: 'QR attendance teacher view: a rotating QR code for the lesson and a live list of students who scanned it.',
          de: 'QR-Anwesenheit, Lehreransicht: wechselnder QR-Code für die Stunde und Live-Liste der Studierenden, die ihn gescannt haben.',
          tr: 'QR yoklama öğretmen ekranı: derse özel, yenilenen QR kod ve okutan öğrencilerin canlı listesi.',
        },
      },
    ],
    text: {
      en: 'Graduation project: classroom attendance by QR code. The teacher shows a code, students scan it with their school number, the list fills itself.',
      de: 'Abschlussprojekt: Anwesenheit per QR-Code. Die Lehrkraft zeigt einen Code, Studierende scannen ihn mit ihrer Matrikelnummer, die Liste füllt sich selbst.',
      tr: 'Bitirme projesi: QR kodla derste yoklama. Öğretmen kodu gösterir, öğrenciler okul numarasıyla okutur, liste kendiliğinden dolar.',
    },
  },
];
