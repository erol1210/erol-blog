import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n';

import finance1 from '../assets/work/finance-1.png';
import finance2 from '../assets/work/finance-2.png';
import finance3 from '../assets/work/finance-3.png';
import todo1 from '../assets/work/todo-1.png';
import todo2 from '../assets/work/todo-2.png';
import todo3 from '../assets/work/todo-3.png';
import todo4 from '../assets/work/todo-4.png';
import meplanner1 from '../assets/work/meplanner-1.png';
import meplanner2 from '../assets/work/meplanner-2.png';
import meplannerPhone1 from '../assets/work/meplanner-phone-1.png';
import meplannerPhone2 from '../assets/work/meplanner-phone-2.png';
import heimdall1 from '../assets/work/heimdall-1.png';
import heimdall2 from '../assets/work/heimdall-2.png';
import heimdall3 from '../assets/work/heimdall-3.png';
import heimdall4 from '../assets/work/heimdall-4.png';
import squadjs from '../assets/work/squadjs.png';
import ff1 from '../assets/work/ff-1.png';
import ff2 from '../assets/work/ff-2.png';
import ff3 from '../assets/work/ff-3.png';
import ff4 from '../assets/work/ff-4.png';
import treffy1 from '../assets/work/treffy-1.png';
import treffy2 from '../assets/work/treffy-2.png';
import treffy3 from '../assets/work/treffy-3.png';
import treffy4 from '../assets/work/treffy-4.png';
import treffy5 from '../assets/work/treffy-5.png';
import toplumail1 from '../assets/work/toplumail-1.png';
import toplumail2 from '../assets/work/toplumail-2.png';
import toplumail3 from '../assets/work/toplumail-3.png';
import qr1 from '../assets/work/qr-1.png';
import qr2 from '../assets/work/qr-2.png';
import qr3 from '../assets/work/qr-3.png';
import qr4 from '../assets/work/qr-4.png';

/**
 * How a picture was made — shown next to every project so nobody mistakes it for live data.
 *  - real: the app's own UI (run locally, rendered from its templates, or with every real
 *          value replaced) showing fictional people and numbers only
 *  - mock: a redrawn screen in the app's visual language, with invented data
 */
export type Provenance = 'real' | 'mock';
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

const s = (src: ImageMetadata, frame: Frame, chrome: string | undefined, en: string, de: string, tr: string): Shot => ({
  src,
  frame,
  chrome,
  alt: { en, de, tr },
});

export const projects: Project[] = [
  {
    id: 'erol-finance',
    name: 'ERØL Finance',
    stack: 'Flask · SQLAlchemy',
    kind: 'real',
    demo: 'https://erol-finance-demo.onrender.com',
    shots: [
      s(finance1, 'browser', 'localhost/en/dashboard',
        'ERØL Finance dashboard: budget rings per currency, latest projects, an over-budget warning.',
        'ERØL-Finance-Dashboard: Budgetringe je Währung, letzte Projekte, eine Überschreitungswarnung.',
        'ERØL Finance paneli: para birimine göre bütçe halkaları, son projeler, bütçe aşımı uyarısı.'),
      s(finance2, 'browser', 'localhost/en/list_projects',
        'Project cards with status, institution, spend against budget and the people who can edit.',
        'Projektkarten mit Status, Institution, Ausgaben gegen Budget und Bearbeitenden.',
        'Durum, kurum, bütçeye göre harcama ve düzenleyebilen kişilerle proje kartları.'),
      s(finance3, 'browser', 'localhost/en/project/1',
        'A project in detail: budget, planned, actual and remaining, budget lines per person, edit access.',
        'Projektdetail: Budget, Plan, Ist und Rest, Budgetzeilen je Person, Bearbeitungsrechte.',
        'Proje detayı: bütçe, planlanan, gerçekleşen ve kalan; kişi bazında bütçe kalemleri, düzenleme yetkisi.'),
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
    kind: 'real',
    demo: 'https://erol-demo.onrender.com',
    shots: [
      s(todo1, 'browser', 'localhost/',
        'ERØL Tasks list: tasks with project, assignee, due date and approval state.',
        'ERØL-Tasks-Liste: Aufgaben mit Projekt, Zuständigen, Fälligkeit und Freigabestatus.',
        'ERØL Tasks listesi: proje, sorumlu, bitiş tarihi ve onay durumuyla görevler.'),
      s(todo2, 'browser', 'localhost/projects/1',
        'One project’s tasks with subtasks, comments, priority and tasks waiting for approval.',
        'Aufgaben eines Projekts mit Unteraufgaben, Kommentaren, Priorität und offenen Freigaben.',
        'Bir projenin görevleri: alt görevler, yorumlar, öncelik ve onay bekleyenler.'),
      s(todo3, 'browser', 'localhost/team',
        'Team page: managers and members.',
        'Teamseite: Leitung und Mitglieder.',
        'Takım sayfası: yöneticiler ve çalışanlar.'),
      s(todo4, 'browser', 'localhost/projects',
        'Project overview.',
        'Projektübersicht.',
        'Proje özeti.'),
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
    kind: 'real',
    demo: 'https://meplanner-demo.onrender.com',
    shots: [
      s(meplanner1, 'browser', 'localhost/',
        'mePlanner day plan on desktop: meals per slot, calendar, today’s recipes.',
        'mePlanner-Tagesplan am Desktop: Mahlzeiten je Slot, Kalender, heutige Rezepte.',
        'Masaüstünde mePlanner gün planı: öğünler, takvim, bugünün tarifleri.'),
      s(meplannerPhone1, 'phone', undefined,
        'mePlanner on a phone: week strip and meal list.',
        'mePlanner auf dem Handy: Wochenleiste und Mahlzeitenliste.',
        'Telefonda mePlanner: hafta şeridi ve öğün listesi.'),
      s(meplanner2, 'browser', 'localhost/#tarifler',
        'Recipe collection with ingredients and a form for a new recipe.',
        'Rezeptsammlung mit Zutaten und Formular für ein neues Rezept.',
        'Malzemeleriyle tarif koleksiyonu ve yeni tarif formu.'),
      s(meplannerPhone2, 'phone', undefined,
        'Recipes on a phone.',
        'Rezepte auf dem Handy.',
        'Telefonda tarifler.'),
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
    kind: 'real',
    shots: [
      s(heimdall1, 'browser', 'panel.example.com/#overview',
        'Heimdall overview: player count, server tick rate, open admin calls, active layer, live feed and layer controls.',
        'Heimdall-Übersicht: Spielerzahl, Server-Tickrate, offene Admin-Rufe, aktiver Layer, Live-Feed und Layer-Steuerung.',
        'Heimdall genel bakış: oyuncu sayısı, sunucu TPS, açık admin çağrıları, aktif layer, canlı akış ve layer kontrolü.'),
      s(heimdall2, 'browser', 'panel.example.com/#metrics',
        'System health of game server, RCON, bridge, storage and webhook, with 24-hour player and TPS charts.',
        'Systemzustand von Gameserver, RCON, Bridge, Speicher und Webhook, mit 24-Stunden-Spieler- und TPS-Diagramm.',
        'Oyun sunucusu, RCON, bridge, depolama ve webhook sağlığı; 24 saatlik oyuncu ve TPS grafikleri.'),
      s(heimdall3, 'browser', 'panel.example.com/#analytics',
        'Analytics: match stats, weekly goals and a population heat map by weekday and hour.',
        'Analytik: Matchstatistik, Wochenziele und eine Populations-Heatmap nach Wochentag und Stunde.',
        'Analitik: maç istatistikleri, haftalık hedefler ve gün-saat bazında popülasyon ısı haritası.'),
      s(heimdall4, 'browser', 'panel.example.com/#plugins',
        'Plugin manager: toggles and settings grouped by purpose, applied with one restart.',
        'Plugin-Verwaltung: Schalter und Einstellungen nach Zweck gruppiert, mit einem Neustart übernommen.',
        'Plugin yönetimi: amaca göre gruplanmış aç/kapa ve ayarlar, tek yeniden başlatmayla uygulanır.'),
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
      s(squadjs, 'bare', undefined,
        'Terminal log of the plugins at work — welcome, team balance, spawnkill guard — followed by a passing test run.',
        'Terminal-Log der Plugins bei der Arbeit – Begrüßung, Team-Balance, Spawnkill-Schutz – und ein grüner Testlauf.',
        'Eklentilerin terminal günlüğü — karşılama, takım dengesi, spawnkill koruması — ve başarılı bir test çalıştırması.'),
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
    kind: 'real',
    shots: [
      s(ff1, 'browser', 'localhost:5173/companies/…',
        'FF dashboard: current position with a high shortfall risk, the scheduled 30-day minimum and the projected balance against the buffer.',
        'FF-Dashboard: aktuelle Liquidität mit hohem Engpassrisiko, geplantes 30-Tage-Minimum und Saldoprognose gegen den Puffer.',
        'FF paneli: yüksek nakit açığı riskiyle güncel durum, 30 günlük planlı en düşük bakiye ve tampona karşı bakiye projeksiyonu.'),
      s(ff2, 'browser', 'localhost:5173/companies/…',
        'What-if result drawn over the projection, the walk-forward track record and the itemised risk drivers.',
        'Was-wäre-wenn-Ergebnis über der Prognose, Walk-forward-Bilanz und die einzelnen Risikotreiber.',
        'Projeksiyon üzerinde "ya şöyle olursa" sonucu, ileriye dönük geçmiş başarı ve kalem kalem risk etkenleri.'),
      s(ff3, 'browser', 'localhost:5173/companies/…',
        'What-if panel: collect one receivable early, defer the VAT payment, and the gap disappears.',
        'Was-wäre-wenn: eine Forderung früher einziehen, die USt-Zahlung schieben – und die Lücke verschwindet.',
        '"Ya şöyle olursa" paneli: bir alacağı erken tahsil et, KDV ödemesini ertele; açık kapanıyor.'),
      s(ff4, 'browser', 'localhost:5173/companies/…/backtest',
        'Walk-forward backtest: accuracy, precision, recall and ROC AUC, with predicted probability per scored date.',
        'Walk-forward-Backtest: Accuracy, Precision, Recall und ROC AUC, mit vorhergesagter Wahrscheinlichkeit je Stichtag.',
        'İleriye dönük backtest: doğruluk, kesinlik, duyarlılık ve ROC AUC; her tarih için tahmin edilen olasılık.'),
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
    kind: 'real',
    shots: [
      s(treffy1, 'phone', undefined,
        'Treffy discover tab: upcoming events with date and place.',
        'Treffy, Entdecken: kommende Events mit Datum und Ort.',
        'Treffy Keşfet sekmesi: tarih ve yeriyle yaklaşan etkinlikler.'),
      s(treffy2, 'phone', undefined,
        'Event detail: time, place, capacity, join rule, and links to participants, tasks and check-in.',
        'Eventdetail: Zeit, Ort, Kapazität, Beitrittsregel und Links zu Teilnehmenden, Aufgaben und Check-in.',
        'Etkinlik detayı: saat, yer, kapasite, katılım kuralı; katılımcılar, görevler ve check-in bağlantıları.'),
      s(treffy3, 'phone', undefined,
        'The event’s needs list: who brings what, and how much is still open.',
        'Bedarfsliste des Events: wer was mitbringt und was noch offen ist.',
        'Etkinliğin ihtiyaç listesi: kim ne getiriyor, ne kadarı hâlâ açık.'),
      s(treffy4, 'phone', undefined,
        'Check-in QR code the organiser shows at the door.',
        'Check-in-QR-Code, den die Organisation am Eingang zeigt.',
        'Düzenleyicinin girişte gösterdiği check-in QR kodu.'),
      s(treffy5, 'phone', undefined,
        'Profile with joined events, created events and claimed tasks.',
        'Profil mit besuchten und erstellten Events und übernommenen Aufgaben.',
        'Katıldığı, oluşturduğu etkinlikler ve üstlendiği görevlerle profil.'),
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
    kind: 'real',
    shots: [
      s(toplumail1, 'bare', undefined,
        'Toplu Mail main screen: campaigns on the left; subject, sender, recipients and send status on the right.',
        'Toplu-Mail-Hauptansicht: Kampagnen links; Betreff, Absender, Empfänger und Versandstatus rechts.',
        'Toplu Mail ana ekranı: solda kampanyalar; sağda konu, gönderen, alıcılar ve gönderim durumu.'),
      s(toplumail2, 'bare', undefined,
        'Send report: every recipient with status and time, exportable to Excel.',
        'Versandbericht: jede Empfängerin und jeder Empfänger mit Status und Zeit, als Excel exportierbar.',
        'Gönderim raporu: her alıcı durum ve saatiyle, Excel’e aktarılabilir.'),
      s(toplumail3, 'bare', undefined,
        'Campaign editor in five steps: general, recipients, message, attachments, summary.',
        'Kampagneneditor in fünf Schritten: Allgemein, Empfänger, Text, Anhänge, Übersicht.',
        'Beş adımlı kampanya düzenleyici: genel, alıcılar, mail metni, ekler, özet.'),
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
    kind: 'real',
    shots: [
      s(qr1, 'browser', 'localhost/ogretmen/yoklama',
        'Teacher view, course management: create a course, list the courses you teach.',
        'Lehreransicht, Kursverwaltung: Kurs anlegen, eigene Kurse auflisten.',
        'Öğretmen ekranı, ders yönetimi: ders oluştur, verdiğin dersleri listele.'),
      s(qr2, 'browser', 'localhost/ogretmen/yoklama',
        'Attendance for one lesson: who came, who was absent, who was excused.',
        'Anwesenheit einer Stunde: wer da war, wer fehlte, wer entschuldigt war.',
        'Bir dersin yoklaması: kim geldi, kim gelmedi, kim izinli.'),
      s(qr3, 'browser', 'localhost/ogretmen/qr_olustur',
        'The QR code for a lesson date, ready for full screen on the projector.',
        'QR-Code für einen Stundentermin, bereit für den Vollbildmodus am Beamer.',
        'Ders tarihi için QR kod; projeksiyonda tam ekran için hazır.'),
      s(qr4, 'browser', 'localhost/',
        'Sign-in with a student / academic switch.',
        'Anmeldung mit Umschalter Studierende / Lehrende.',
        'Öğrenci / akademisyen seçimli giriş ekranı.'),
    ],
    text: {
      en: 'Graduation project: classroom attendance by QR code. The teacher shows a code, students scan it with their school number, the list fills itself.',
      de: 'Abschlussprojekt: Anwesenheit per QR-Code. Die Lehrkraft zeigt einen Code, Studierende scannen ihn mit ihrer Matrikelnummer, die Liste füllt sich selbst.',
      tr: 'Bitirme projesi: QR kodla derste yoklama. Öğretmen kodu gösterir, öğrenciler okul numarasıyla okutur, liste kendiliğinden dolar.',
    },
  },
];
