export const pages = {
  home: {
    path: "/",
    title: "Home",
    description:
      "Patenti, corsi di guida e rinnovi a Mondovì. Scopri i percorsi di Autoscuola Subalpina e contatta la segreteria.",
  },
  scuola: {
    id: 672,
    path: "/chi-siamo/",
    title: "La scuola",
    group: "scuola",
    description:
      "Un gruppo di insegnanti e istruttori a Mondovì, dalla prima lezione di teoria alle guide su strada.",
    photo: "auto-autoscuola.jpg",
  },
  strutture: {
    id: 704,
    path: "/le-nostre-strutture/",
    title: "Le nostre strutture",
    group: "scuola",
    description:
      "Le aule, gli uffici e i mezzi che accompagnano la tua formazione.",
    photo: "aula-lezioni.jpg",
  },
  gallery: {
    id: 706,
    path: "/fotogallery/",
    title: "Fotogallery",
    group: "scuola",
    description:
      "Entra nella sede di Mondovì e guarda da vicino le auto, i ciclomotori e le moto della scuola.",
  },
  corsi: {
    id: 643,
    path: "/corsi/",
    title: "Corsi e patenti",
    group: "corsi",
    description:
      "Scegli il percorso che ti serve, dalla prima patente alla formazione per chi guida per lavoro.",
  },
  patenti: {
    id: 628,
    path: "/conseguimento-patenti/",
    title: "Conseguimento patenti",
    group: "corsi",
    description:
      "Ciclomotore, moto, auto e mezzi pesanti. Trova la tua categoria e consulta gli orari delle lezioni.",
    photo: "autoscuola-slide.jpg",
  },
  punti: {
    id: 647,
    path: "/recupero-punti/",
    title: "Recupero punti",
    group: "corsi",
    description:
      "Percorsi dedicati a chi ha perso punti sulla patente, con lezioni serali o orari da concordare.",
    photo: "aula-recupero-punti.jpg",
  },
  altri: {
    id: 649,
    path: "/altri-corsi/",
    title: "Altri corsi di guida",
    group: "corsi",
    description:
      "Guida accompagnata e guida sicura, con lezioni da concordare insieme agli istruttori.",
    photo: "zona-esame.jpg",
  },
  aula: {
    id: 743,
    path: "/corsi-in-aula/",
    title: "Corsi in aula",
    group: "corsi",
    description:
      "Studia la teoria con gli insegnanti della scuola e allenati sui quiz nelle postazioni multimediali.",
    photo: "aula-lezioni.jpg",
  },
  pratica: {
    id: 741,
    path: "/pratica/",
    title: "Lezioni di guida",
    group: "corsi",
    description:
      "Metti in pratica la teoria, al volante o in sella, con un istruttore al tuo fianco.",
    photo: "audi-subalpina.jpg",
  },
  servizi: {
    id: 621,
    path: "/servizi/",
    title: "Servizi",
    group: "servizi",
    description:
      "Rinnovi, documenti e pratiche per chi ha già la patente. La segreteria ti segue anche dopo l’esame.",
  },
  rinnovo: {
    id: 667,
    path: "/rinnovo-patente/",
    title: "Rinnovo patente",
    group: "servizi",
    description:
      "Richiedi la visita per il rinnovo della patente nella nostra sede di Mondovì.",
    photo: "ambulatorio.jpg",
  },
  cqc: {
    id: 702,
    path: "/cqc/",
    title: "Carta di qualificazione del conducente",
    short: "CQC",
    group: "servizi",
    description:
      "Formazione iniziale e aggiornamento della CQC per chi guida per professione.",
    photo: "cqc.jpg",
  },
  internazionale: {
    id: 698,
    path: "/patente-internazionale/",
    title: "Patente internazionale",
    group: "servizi",
    description:
      "Stai organizzando un viaggio all’estero? La segreteria segue le pratiche per il permesso internazionale di guida.",
    photo: "patente-internazionale.gif",
  },
  amministrazione: {
    id: 700,
    path: "/porto-d-armi/",
    title: "Porto d’armi",
    group: "servizi",
    description:
      "Informazioni amministrative e contatti della segreteria di Mondovì.",
  },
  sede: {
    id: 682,
    path: "/dove-siamo/",
    title: "Dove siamo",
    description:
      "Trovi la scuola in via Giovanni Battista Quadrone 1, a Mondovì, in provincia di Cuneo.",
  },
  info: {
    id: 779,
    path: "/contatti/",
    title: "Contattaci",
    description:
      "Scrivi alla segreteria per informazioni su corsi, iscrizioni, orari e pratiche.",
  },
};

export const groups = {
  scuola: ["scuola", "strutture", "gallery"],
  corsi: ["corsi", "patenti", "punti", "altri", "aula", "pratica"],
  servizi: ["servizi", "rinnovo", "cqc", "internazionale", "amministrazione"],
};

export const photos = [
  ["ufficio-accoglienza.jpg", "L’ingresso e il banco accoglienza", "La sede"],
  ["aula-teoria.jpg", "L’aula di teoria e i modelli didattici", "Le aule"],
  ["auto-autoscuola.jpg", "Le auto della scuola a Mondovì", "I mezzi"],
  ["ambulatorio.jpg", "L’ambulatorio per le visite in sede", "La sede"],
  ["ciclomotori.jpg", "I ciclomotori per le esercitazioni", "I mezzi"],
  ["ufficio-segreteria.jpg", "Gli uffici della segreteria", "La sede"],
  ["motociclette.jpg", "Le moto della scuola", "I mezzi"],
];

export const slides = [
  {
    photo: "audi-subalpina.jpg",
    alt: "Un’Audi bianca sullo sfondo delle montagne al tramonto",
    label: "Autoscuola a Mondovì",
    title: "La tua strada",
    accent: "inizia qui.",
    description:
      "Dalla prima lezione al giorno dell’esame, impariamo a guidare insieme. A Mondovì, un passo alla volta.",
    action: "Scopri i corsi",
    target: "corsi",
    secondary: "La nostra scuola",
    other: "scuola",
    caption: "Al volante",
  },
  {
    photo: "autoscuola-slide.jpg",
    alt: "Le auto della scuola davanti alla collina di Mondovì",
    label: "La scuola e i mezzi",
    title: "Impara con",
    accent: "noi.",
    description:
      "Conosci gli spazi, gli istruttori e i mezzi con cui prepararti alla guida.",
    action: "Visita la scuola",
    target: "strutture",
    secondary: "Fotogallery",
    other: "gallery",
    caption: "La nostra flotta",
  },
  {
    photo: "zona-esame.jpg",
    alt: "Area di esercitazione con le montagne sullo sfondo",
    label: "Lezioni di guida",
    title: "Dalla teoria",
    accent: "alla strada.",
    description:
      "Sali in sella o mettiti al volante. Con un istruttore, ogni guida ha il suo obiettivo.",
    action: "Scopri le guide",
    target: "pratica",
    secondary: "Tutti i corsi",
    other: "corsi",
    caption: "L’area di esercitazione",
  },
  {
    photo: "regalo-patente-slide.jpg",
    alt: "Una torta di compleanno con il regalo patente",
    label: "Regala la patente",
    title: "Un regalo",
    accent: "di libertà.",
    description:
      "Per un compleanno o un diploma puoi regalare il corso di teoria, le guide o una parte del percorso.",
    action: "Chiedi informazioni",
    target: "info",
    subject: "Regala la patente",
    secondary: "Il pacchetto regalo",
    other: "home",
    hash: "#regalo",
    caption: "Regala la patente",
  },
];

export const email = "info@autoscuolasubalpinamondovi.it";
export const tel = "tel:+39017442167";
export const address = "Via Giovanni Battista Quadrone 1, 12084 Mondovì (CN)";
export const maps =
  "https://www.google.com/maps/dir/?api=1&destination=Autoscuola%20Subalpina%2C%20Via%20Giovanni%20Battista%20Quadrone%201%2C%20Mondov%C3%AC";
const basePath = (process.env.SITE_BASE_PATH || "").replace(/\/+$/, "");
if (!/^(?:\/[a-zA-Z0-9._-]+)*$/.test(basePath) || basePath.split("/").some(segment => segment === "." || segment === "..")) {
  throw new Error("SITE_BASE_PATH must be an absolute URL path.");
}
export const sitePath = (path) => basePath + path;
export const original = sitePath("/assets/original/");
export const href = (key) => sitePath(pages[key].path);
export const contact = (subject) =>
  href("info") + "?oggetto=" + encodeURIComponent(subject);
export const esc = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
