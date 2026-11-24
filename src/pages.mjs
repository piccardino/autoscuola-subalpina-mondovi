import {
  pages,
  href,
  contact,
  photos,
  email,
  tel,
  maps,
  original,
  esc,
} from "./catalog.mjs";
import {
  ic,
  btn,
  eyebrow,
  hero,
  intro,
  accordion,
  card,
  contactBand,
  form,
  imageAlts,
} from "./components.mjs";

const paragraph = (s) => "<p>" + s + "</p>";
const link = (s, url) =>
  '<a class="textlink" href="' +
  esc(url) +
  '">' +
  s +
  " " +
  ic("right") +
  "</a>";
const picture = (name, alt, cls = "") =>
  '<img class="' +
  cls +
  '" loading="lazy" src="' +
  original +
  name +
  '" alt="' +
  esc(alt) +
  '">';
const clearHeading = (label, title) =>
  eyebrow(label) + "<h2>" + title + "</h2>";
function cards(items) {
  return (
    '<div class="cards">' +
    items.map((args) => card(...args)).join("") +
    "</div>"
  );
}
const courseCards = [
  [
    "patenti",
    "Patenti",
    "Dai ciclomotori ai mezzi pesanti. Categorie e orari delle lezioni.",
    "autoscuola-slide.jpg",
  ],
  [
    "punti",
    "Punti patente",
    "Corsi di recupero per patenti ordinarie e professionali.",
    "aula-recupero-punti.jpg",
  ],
  [
    "altri",
    "In strada",
    "Guida accompagnata e guida sicura con orari concordati.",
    "zona-esame.jpg",
  ],
  [
    "aula",
    "Teoria",
    "Lezioni multimediali e postazioni per esercitarsi sui quiz.",
    "aula-lezioni.jpg",
  ],
  [
    "pratica",
    "Pratica",
    "Esercitazioni e guide su strada con un istruttore.",
    "motociclette.jpg",
  ],
];
const serviceCards = [
  [
    "rinnovo",
    "Visita in sede",
    "Documenti e richiesta di appuntamento per il rinnovo.",
    "ambulatorio.jpg",
  ],
  [
    "cqc",
    "Guida professionale",
    "Formazione iniziale, aggiornamento e pratiche CQC.",
    "cqc.jpg",
  ],
  [
    "internazionale",
    "Guidare all’estero",
    "Assistenza per il permesso internazionale di guida.",
    "patente-internazionale.gif",
  ],
];
const sections = (body, cls = "") =>
  '<section class="section ' +
  cls +
  '"><div class="wrap">' +
  body +
  "</div></section>";
const pathTile = (key, icon, kicker, title, body) =>
  `<a class="path-tile" href="${href(key)}"><div class="tile-icon">${ic(icon)}</div><span class="tile-category">${kicker}</span><h3>${title}</h3><p>${body}</p><span class="tile-arrow">${ic("up")}</span></a>`;
export function home() {
  return (
    `<div class="home-lead">
      ${hero()}
      <section class="home-contact" id="scrivi" tabindex="-1" aria-labelledby="scrivi-title">
        <div class="home-contact-heading">${ic("mail")}<h2 id="scrivi-title">Scrivi alla segreteria</h2></div>
        ${form()}
      </section>
    </div>` +
    sections(
      `<div class="section-heading"><div>${eyebrow("Corsi e servizi")}<h2>Da dove vuoi <em>partire?</em></h2></div>${link("Tutti i servizi", href("servizi"))}</div>
  <div class="paths">${pathTile("patenti", "wheel", "Formazione", "Prendere la patente", "Corsi di teoria e guide per auto, moto e mezzi pesanti.")}${pathTile("rinnovo", "card", "Pratiche", "Rinnovare la patente", "Richiedi la visita medica direttamente in sede.")}${pathTile("punti", "route", "Corsi dedicati", "Recuperare punti", "Percorsi di recupero per patenti ordinarie e professionali.")}</div>`,
      "paths-section",
    ) +
    sections(
      `<div class="school-split"><figure class="school-photo">${picture("autoscuola-slide.jpg", imageAlts["autoscuola-slide.jpg"])}<figcaption>${ic("pin")} Mondovì, Piemonte</figcaption></figure><div>${eyebrow("La nostra scuola")}<h2>Ci trovi a <em>Mondovì.</em></h2><p>In via Quadrone ci sono la segreteria, le aule per la teoria e l’ambulatorio per i rinnovi. Fuori dall’aula ti aspettano le guide con i nostri istruttori.</p>${btn("Conosci la scuola", href("scuola"))}</div></div>`,
      "white",
    ) +
    sections(
      `<div class="extras"><article id="regalo"><div>${eyebrow("Un’idea regalo")}<h2>Regala la patente.</h2><p>Per un compleanno o un diploma puoi offrire l’iscrizione, i libri, le lezioni di teoria o le guide. In segreteria puoi scegliere anche un contributo parziale.</p>${link("Informazioni sul regalo", contact("Regala la patente"))}</div>${picture("regalo-patente.jpg", "Il regalo patente per il compleanno")}</article><article class="letter"><div>${eyebrow("Una voce dalla scuola")}<blockquote>«Mi avete trasmesso la stessa quantità di serenità e cortesia…»</blockquote><p>Monica, allieva dell’autoscuola</p>${link("Leggi la lettera di Monica (PDF)", original + "lettera-monica.pdf")}</div></article></div>`,
    ) +
    contactBand()
  );
}
function infoAside(title, body, subject) {
  return `<aside class="info-aside">${ic("mail")}<h3>${title}</h3><p>${body}</p>${link("Scrivi alla segreteria", contact(subject))}<a class="aside-phone" href="${tel}">${ic("phone")}0174 42167</a></aside>`;
}
const detail = (
  key,
  title,
  body,
  asideTitle = "Hai una domanda?",
  asideBody = "La segreteria può aiutarti con iscrizioni, documenti e disponibilità.",
) =>
  intro(key) +
  sections(
    `<div class="content-grid"><article class="prose"><h2>${title}</h2>${body}</article>${infoAside(asideTitle, asideBody, pages[key].title)}</div>`,
  ) +
  contactBand(pages[key].title);
function notices(title, text) {
  return `<div class="note-box">${ic("book")}<div><h3>${title}</h3><p>${text}</p></div></div>`;
}
function rows(list) {
  return (
    '<div class="row-links">' +
    list
      .map(
        ([k, name, sub]) =>
          `<a href="${href(k)}"><div><strong>${name}</strong><span>${sub}</span></div>${ic("right")}</a>`,
      )
      .join("") +
    "</div>"
  );
}
function school() {
  return (
    intro("scuola") +
    sections(
      `<div class="content-grid"><article class="prose"><h2>In aula e su strada</h2><p>Alla Subalpina lavorano insegnanti di teoria e istruttori di guida. In aula si affrontano le regole della circolazione e si provano i quiz al computer. Durante le guide si torna sugli stessi argomenti nelle situazioni che incontri ogni giorno.</p><p>La segreteria segue anche rinnovi, conversioni, duplicati, riclassificazioni e pratiche di trasferimento di proprietà.</p>${rows(
        [
          ["strutture", "Le nostre strutture", "Le aule, gli uffici e i mezzi"],
          ["gallery", "Fotogallery", "Le fotografie della scuola"],
        ],
      )}</article><aside class="fidelity">${picture("chi-siamo.png", "La Fidelity Card originale di Autoscuola Subalpina")}<h3>Fidelity Card</h3><p>Puoi richiederla in ufficio. Lo sconto dipende dal servizio scelto.</p>${link("Chiedi della Fidelity Card", contact("Fidelity Card"))}</aside></div>`,
    ) +
    contactBand("La scuola")
  );
}
function buildings() {
  return (
    intro("strutture") +
    sections(
      `<div class="section-heading">${clearHeading("Gli spazi", "Dentro l’autoscuola")}</div><div class="cards">${[
        [
          "aula-lezioni.jpg",
          "Le aule",
          "Lezioni multimediali, postazioni per i quiz e modelli meccanici da osservare da vicino.",
        ],
        [
          "ufficio-accoglienza.jpg",
          "Gli uffici",
          "Qui trovi la segreteria per iscrizioni, informazioni sui corsi e pratiche della patente.",
        ],
        [
          "auto-autoscuola.jpg",
          "I mezzi",
          "Auto, motocicli e ciclomotori a disposizione per le esercitazioni pratiche.",
        ],
      ]
        .map(
          ([img, h, p]) =>
            `<article class="photo-card"><div class="card-photo">${picture(img, imageAlts[img])}</div><div class="card-info"><h3>${h}</h3><p>${p}</p></div></article>`,
        )
        .join(
          "",
        )}</div><div class="after-grid">${btn("Apri la fotogallery", href("gallery"))}</div>`,
    ) +
    contactBand("Le nostre strutture")
  );
}
function gallery() {
  return (
    intro("gallery") +
    sections(`<div class="filters" role="group" aria-label="Filtra fotografie">${["Tutte", "La sede", "Le aule", "I mezzi"].map((x, i) => `<button data-filter="${x}" aria-pressed="${!i}">${x}</button>`).join("")}</div>
  <div class="gallery">${photos.map(([img, title, group], i) => `<button type="button" class="photo-item" data-photo="${i}" data-group="${group}" aria-label="Ingrandisci: ${title}"><span>${picture(img, title)}<b>${ic("expand")}</b></span><strong>${title}</strong></button>`).join("")}</div>
  <dialog class="lightbox" aria-label="Fotografia ingrandita"><div class="light-inner"><button class="close-light round" aria-label="Chiudi fotografia">${ic("close")}</button><img alt=""><div class="light-bar"><div><small data-photo-count></small><p data-photo-title></p></div><div><button class="round" data-photo-prev aria-label="Foto precedente">${ic("left")}</button><button class="round" data-photo-next aria-label="Foto successiva">${ic("right")}</button></div></div></div></dialog>`) +
    contactBand("Fotogallery")
  );
}
function courseList() {
  return (
    intro("corsi") +
    sections(
      `<div class="section-heading">${clearHeading("Formazione", "I nostri corsi")}</div>${cards(courseCards)}`,
    ) +
    contactBand("Corsi e patenti")
  );
}
const times = `<div class="table-wrap"><table><caption>Orari indicativi pubblicati dalla scuola</caption><thead><tr><th>Patente</th><th>Giorni</th><th>Orari</th></tr></thead><tbody>
<tr><th scope="row">AM</th><td>Lunedì e giovedì</td><td>17.00–18.00</td></tr><tr><th scope="row">AM</th><td>Venerdì</td><td>17.00–18.30</td></tr><tr><th scope="row">A1 e B</th><td>Lunedì e mercoledì</td><td>10.00–11.30 · 15.00–16.30 · 18.00–19.30</td></tr><tr><th scope="row">A1 e B</th><td>Martedì</td><td>19.30–21.00</td></tr><tr><th scope="row">A1 e B</th><td>Giovedì</td><td>18.00–19.30</td></tr><tr><th scope="row">A1 e B</th><td>Venerdì</td><td>10.00–11.30 · pomeriggio dalle 15.00</td></tr></tbody></table></div><p>Conferma il turno con la segreteria prima di venire. Per A2, A, mezzi pesanti e CQC il calendario viene concordato con la scuola.</p>`;
function licences() {
  const cats = [
    [
      "Ciclomotori · AM",
      "Il percorso per il ciclomotore comprende la preparazione teorica e le esercitazioni pratiche. Per un’iscrizione da minorenne contatta la segreteria insieme a un genitore o tutore.",
    ],
    [
      "Motocicli · A1, A2 e A",
      "Le categorie variano in base al motociclo e alla patente che possiedi. Indica alla segreteria la tua esperienza per individuare il percorso adatto.",
    ],
    [
      "Automobili · B",
      "Le lezioni in aula e i quiz preparano alla teoria. Con l’istruttore lavori su comandi, manovre e circolazione nel traffico.",
    ],
    [
      "Mezzi pesanti e rimorchi · C, D ed E",
      "Percorsi per il trasporto di merci, di persone e la guida con rimorchio. Porta la patente in possesso per verificare la categoria e le eventuali estensioni.",
    ],
    [
      "Guida professionale · CQC",
      "Per la carta di qualificazione sono disponibili corsi di formazione iniziale e aggiornamento.",
    ],
  ];
  return detail(
    "patenti",
    "Quale patente ti serve?",
    accordion(
      cats.map(([h, b], i) => [
        h,
        paragraph(b) +
          link(
            i === 4
              ? "Vai alla pagina CQC"
              : "Chiedi informazioni su questo corso",
            i === 4 ? href("cqc") : contact(h),
          ),
      ]),
    ) +
      `<h2 id="orari">Orari delle lezioni</h2>${times}<h2>Preparare l’iscrizione</h2><p>Tieni a portata di mano documento d’identità, codice fiscale e l’eventuale patente già in possesso. La segreteria ti indica le fototessere, la documentazione medica e i pagamenti richiesti per la tua categoria.</p>${link("Schede ufficiali delle patenti", "https://www.mit.gov.it/come-fare-per/patenti-mezzi-e-abilitazioni/patenti-mezzi-stradali")}`,
  );
}
function points() {
  return detail(
    "punti",
    "Scegli il corso per la tua categoria",
    `<p>Se hai perso parte dei punti puoi frequentare un corso di recupero. La scuola organizza lezioni in orario serale o da concordare con la segreteria.</p>` +
      accordion([
        [
          "Patenti AM, A e B",
          paragraph(
            "Per le categorie AM, A1, A2, A, B1, B e BE il corso consente di recuperare fino a 6 punti.",
          ) +
            link(
              "Chiedi il prossimo corso",
              contact("Recupero punti · patenti A e B"),
            ),
        ],
        [
          "Patenti e abilitazioni professionali",
          paragraph(
            "Per le categorie superiori e le abilitazioni professionali previste il recupero arriva fino a 9 punti. Comunica alla segreteria su quale titolo è stata registrata la decurtazione.",
          ) +
            link(
              "Informazioni sul corso professionale",
              contact("Recupero punti professionali"),
            ),
        ],
      ]) +
      `<h2>Prima di iscriverti</h2><p>Verifica il saldo sul Portale dell’Automobilista. La segreteria può indicarti la documentazione per il corso, le date, le regole di frequenza e il recupero delle assenze.</p>${link("Patente a punti sul sito del Ministero", "https://www.mit.gov.it/come-fare-per/patenti-mezzi-e-abilitazioni/patente-punti")}`,
  );
}
function additional() {
  return detail(
    "altri",
    "Guida accompagnata e guida sicura",
    accordion([
      [
        "Guida accompagnata",
        paragraph(
          "Un percorso per prepararsi alla guida accompagnata. Porta la patente in possesso e, per la pratica del minorenne, i documenti del tutore. La segreteria verifica i requisiti e concorda gli orari.",
        ) +
          link(
            "Chiedi della guida accompagnata",
            contact("Guida accompagnata"),
          ),
      ],
      [
        "Guida sicura",
        paragraph(
          "Per chi ha già la patente e desidera lavorare sulla propria guida con un istruttore. Le lezioni vengono programmate su appuntamento.",
        ) + link("Chiedi della guida sicura", contact("Guida sicura")),
      ],
    ]),
  );
}
function classes() {
  return detail(
    "aula",
    "La teoria in autoscuola",
    `<p>Durante le lezioni affronti segnaletica, precedenze e comportamento su strada. Le postazioni multimediali permettono di esercitarsi con i quiz e rivedere con l’insegnante gli argomenti più difficili.</p>${notices("Scegli il tuo turno", "Gli orari cambiano in base alla categoria. Per AM, A1 e B puoi consultare il calendario indicativo e chiedere conferma del turno.")} ${link("Consulta gli orari delle lezioni", href("patenti") + "#orari")}`,
  );
}
function road() {
  return detail(
    "pratica",
    "Le guide con l’istruttore",
    `<p>La preparazione pratica si svolge con i mezzi della scuola. L’istruttore ti segue mentre prendi confidenza con i comandi, impari le manovre e affronti la circolazione su strada.</p>${notices("Organizzare una guida", "Indica alla segreteria la categoria di patente e le tue disponibilità per concordare la prossima lezione.")} ${rows(
      [
        [
          "gallery",
          "Guarda i mezzi della scuola",
          "Auto, motocicli e ciclomotori",
        ],
        ["altri", "Altri corsi di guida", "Guida sicura e guida accompagnata"],
      ],
    )}`,
  );
}
function serviceList() {
  const other = [
    "Rinnovo patente nautica",
    "Duplicato, conversione e riclassificazione della patente",
    "Pratiche presso la Commissione medica",
    "Permessi di guida",
    "Volture e trasferimenti di proprietà",
  ];
  return (
    intro("servizi") +
    sections(
      `<div class="section-heading">${clearHeading("In segreteria", "Pratiche e rinnovi")}</div>${cards(serviceCards)}<div class="content-grid below"><article class="prose"><h2>Altre pratiche</h2><div class="row-links">${other.map((s) => `<a href="${esc(contact(s))}"><strong>${s}</strong>${ic("up")}</a>`).join("")}<a href="${href("amministrazione")}"><strong>Porto d’armi</strong>${ic("right")}</a></div></article>${infoAside("Cerchi un corso?", "La scuola organizza anche corsi per il conseguimento delle patenti, lezioni di guida e recupero punti.", "Informazioni sui corsi")}</div>`,
    ) +
    contactBand("Servizi")
  );
}
function renewal() {
  return (
    intro("rinnovo", btn("Richiedi la visita", "#richiesta", "primary")) +
    sections(
      `<div class="content-grid"><article class="prose"><h2>La visita a Mondovì</h2><p>Il medico riceve in autoscuola il martedì su prenotazione. La segreteria conferma il giorno e l’orario della visita.</p><h3>Cosa preparare</h3><ul><li>Patente di guida</li><li>Documento d’identità</li><li>Una fototessera recente</li></ul><p>Se la tua pratica richiede documentazione aggiuntiva, la segreteria ti darà le indicazioni al momento della conferma.</p></article><aside class="info-aside">${ic("clock")}<h3>Prenotazioni</h3><p>Puoi chiamare la scuola oppure indicare nel modulo il martedì che preferisci.</p><a class="textlink" href="${tel}">0174 42167 ${ic("phone")}</a></aside></div><div class="form-panel" id="richiesta">${clearHeading("Rinnovo patente", "Richiedi un appuntamento")}<p>Indica la tua preferenza e, se vuoi, allega la fototessera. La segreteria ti ricontatterà.</p>${form("renew")}</div>`,
    )
  );
}
function qualification() {
  return detail(
    "cqc",
    "Percorsi CQC",
    accordion([
      [
        "Primo rilascio",
        paragraph(
          "Il percorso comprende lezioni di teoria e guida. Comunica alla segreteria se sei interessato al trasporto di merci o di persone.",
        ),
      ],
      [
        "Rinnovo e aggiornamento",
        paragraph(
          "La scuola organizza il corso di aggiornamento per il rinnovo della CQC. Tieni a portata di mano la carta in possesso e verifica con la segreteria la prossima disponibilità.",
        ),
      ],
      [
        "Duplicato, conversione e riclassificazione",
        paragraph(
          "Per queste pratiche la segreteria verifica il titolo già in possesso e indica l’iter pertinente.",
        ),
      ],
    ]) +
      `<h2>Per aprire la pratica</h2><p>Prepara documento d’identità, codice fiscale, patente e, per il rinnovo, la CQC in possesso. Chiedi in sede il numero di fototessere e i pagamenti aggiornati.</p>`,
  );
}
function international() {
  return detail(
    "internazionale",
    "Guidare all’estero",
    `<p>Per informazioni sul rilascio o sul rinnovo del permesso internazionale, indica la destinazione e la data prevista di partenza. La segreteria può verificare quale pratica serve per il tuo viaggio.</p>${notices("Quando contatti la scuola", "Tieni a disposizione la patente italiana e, se presente, il permesso internazionale già rilasciato.")}`,
  );
}
function office() {
  return detail(
    "amministrazione",
    "Informazioni in sede",
    `<p>Per le richieste amministrative relative a questo servizio puoi rivolgerti alla segreteria di via Giovanni Battista Quadrone 1 a Mondovì.</p>${btn("Contatta la segreteria", contact("Informazioni amministrative"))}`,
  );
}
function contactDetails() {
  return `<div class="contact-lines"><div>${ic("pin")}<div><strong>La sede</strong><p>Via Giovanni Battista Quadrone 1<br>12084 Mondovì (CN)</p></div></div><div>${ic("phone")}<div><strong>Telefono e fax</strong><a href="${tel}">0174 42167</a></div></div><div>${ic("mail")}<div><strong>Email</strong><a href="mailto:${email}">${email}</a></div></div></div>`;
}
function location() {
  return (
    intro("sede") +
    sections(
      `<div class="location-grid"><div class="prose"><h2>Vieni a trovarci</h2>${contactDetails()}${btn("Indicazioni stradali", maps, "primary", "up")}</div><div class="map-panel"><iframe loading="lazy" title="Mappa della sede a Mondovì" src="https://www.openstreetmap.org/export/embed.html?bbox=7.81129%2C44.39105%2C7.82649%2C44.39720&amp;layer=mapnik&amp;marker=44.394132%2C7.818890"></iframe><a href="https://www.openstreetmap.org/?mlat=44.394132&amp;mlon=7.818890#map=17/44.394132/7.818890">Apri la mappa di Mondovì ${ic("up")}</a></div></div>`,
    ) +
    contactBand("La sede di Mondovì")
  );
}
function contacts() {
  return (
    intro("info") +
    sections(
      `<div class="content-grid contact-grid"><div class="form-panel compact">${clearHeading("Richiesta informazioni", "Scrivi alla segreteria")}${form()}</div><aside class="contact-address"><h2>Altri recapiti</h2>${contactDetails()}${link("Come raggiungerci", href("sede"))}<div class="renew-link"><strong>Devi rinnovare la patente?</strong>${link("Richiedi la visita", href("rinnovo") + "#richiesta")}</div></aside></div>`,
    )
  );
}
export const renderers = {
  home,
  scuola: school,
  strutture: buildings,
  gallery,
  corsi: courseList,
  patenti: licences,
  punti: points,
  altri: additional,
  aula: classes,
  pratica: road,
  servizi: serviceList,
  rinnovo: renewal,
  cqc: qualification,
  internazionale: international,
  amministrazione: office,
  sede: location,
  info: contacts,
};
