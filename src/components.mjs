import {
  pages,
  groups,
  slides,
  esc,
  href,
  contact,
  email,
  tel,
  address,
  maps,
  original,
} from "./catalog.mjs";

const icons = {
  right: '<path d="M4 12h15m-6-6 6 6-6 6"/>',
  left: '<path d="M20 12H5m6-6-6 6 6 6"/>',
  up: '<path d="M5 19 19 5M7 5h12v12"/>',
  down: '<path d="m7 10 5 5 5-5"/>',
  pin: '<path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.3"/>',
  phone:
    '<path d="m7 3 3 5-2.8 2.3a15 15 0 0 0 6.5 6.5L16 14l5 3c.1 2.5-1.5 4-4 4C9 20 4 15 3 7c0-2.5 1.5-4.1 4-4Z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',
  menu: '<path d="M3 7h18M3 12h18M3 17h18"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  wheel:
    '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2.3"/><path d="M3.5 9.5c6.5-2.7 10.5-2.7 17 0M4 13l5 1.6 1.7 6m9.3-7.6-5 1.6-1.7 6"/>',
  card: '<rect x="2.5" y="5" width="19" height="14" rx="2"/><circle cx="8" cy="10.5" r="1.6"/><path d="M5.3 15.5c.5-2.1 4.9-2.1 5.4 0M14 10h4m-4 4h3"/>',
  route:
    '<circle cx="5" cy="7" r="2"/><circle cx="19" cy="17" r="2"/><path d="M7 7h8a2.5 2.5 0 0 1 0 5H9a2.5 2.5 0 1 0 0 5h8"/>',
  book: '<path d="M3 5c3.6-1.3 6-.7 9 1.4 3-2.1 5.4-2.7 9-1.4v14c-3.8-1.1-6.3-.7-9 1-2.7-1.7-5.2-2.1-9-1Zm9 1.4V20"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  expand: '<path d="M14 3h7v7m0-7-8 8M10 21H3v-7m0 7 8-8"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',
  gift: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M5 12v9h14v-9M12 8v13"/><path d="M12 8H8a2.5 2.5 0 1 1 2.2-3.7Zm0 0h4a2.5 2.5 0 1 0-2.2-3.7Z"/>',
};
export function ic(name, cls = "") {
  return `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`;
}
export function btn(text, url, type = "primary", icon = "right") {
  return `<a class="btn ${type}" href="${esc(url)}">${text}${ic(icon)}</a>`;
}
export function eyebrow(text) {
  return `<p class="eyebrow"><i></i>${text}</p>`;
}
export const logo = () =>
  `<img class="logo" src="${original}logo-subalpina.png" width="400" height="88" alt="Autoscuola Subalpina">`;
const short = (key) => pages[key].short || pages[key].title;
function navItem(key, current) {
  return `<a href="${href(key)}"${key === current ? ' aria-current="page"' : ""}>${short(key)}</a>`;
}
function navGroup(key, name, current) {
  return `<div class="nav-group"><button class="nav-trigger ${pages[current]?.group === key ? "active" : ""}" type="button" aria-expanded="false" aria-controls="menu-${key}">${name}${ic("down")}</button><div class="dropdown" id="menu-${key}" hidden>${groups[key].map((k) => navItem(k, current)).join("")}</div></div>`;
}
export function header(current) {
  return `<a class="skip" href="#contenuto">Vai al contenuto</a><div class="utility"><div class="wrap utility-in"><a href="${href("sede")}">${ic("pin")}Mondovì (CN)<span class="street"> · Via G. B. Quadrone 1</span></a><div><a href="${tel}">${ic("phone")}0174 42167</a><a class="utility-email" href="mailto:${email}">${ic("mail")}${email}</a></div></div></div>
  <header class="mast"><div class="wrap head-in"><a href="${href("home")}" class="brand" aria-label="Autoscuola Subalpina, home">${logo()}</a>
  <button class="menu-toggle" type="button" aria-label="Apri il menu" aria-controls="site-nav" aria-expanded="false">${ic("menu")}${ic("close")}</button>
  <nav class="nav" id="site-nav" aria-label="Navigazione principale">${navItem("home", current)}${navGroup("scuola", "La scuola", current)}${navGroup("corsi", "Corsi e patenti", current)}${navGroup("servizi", "Servizi", current)}${navItem("sede", current)}<a class="nav-contact" href="${current === "home" ? "#scrivi" : href("info")}" ${current === "info" ? 'aria-current="page"' : ""}>Contattaci ${ic("up")}</a></nav></div></header>`;
}
export function footer() {
  return `<footer><div class="wrap"><div class="footer-grid"><div><a href="${href("home")}" class="brand">${logo()}</a><p>Via Giovanni Battista Quadrone 1<br>12084 Mondovì (CN)</p><a class="textlink" href="${esc(maps)}">Indicazioni stradali ${ic("up")}</a></div><div><h2>La scuola</h2>${["scuola", "strutture", "gallery", "sede"].map((k) => navItem(k)).join("")}</div><div><h2>Corsi e servizi</h2>${["corsi", "servizi", "rinnovo", "punti", "cqc"].map((k) => navItem(k)).join("")}</div><div><h2>Contatti</h2><a href="${tel}">0174 42167</a><a href="mailto:${email}">${email}</a><a href="${href("info")}">Scrivi alla segreteria</a><a href="https://www.facebook.com/autoscuola.subalpina">Facebook ${ic("up")}</a></div></div>
  <div class="footer-base"><span>Autoscuola Subalpina · P. IVA 02897490047</span><a href="#top">Torna su ↑</a></div></div></footer>`;
}
export function crumb(key) {
  const p = pages[key];
  return `<nav class="crumb" aria-label="Percorso"><a href="${href("home")}">Home</a><span>/</span>${p.group && p.group !== key ? `<a href="${href(p.group)}">${short(p.group)}</a><span>/</span>` : ""}<span aria-current="page">${short(key)}</span></nav>`;
}
export function intro(key, action = "") {
  const p = pages[key];
  return `<section class="intro"><div class="wrap">${crumb(key)}<div class="intro-row"><div>${eyebrow(p.group ? short(p.group) : "Autoscuola Subalpina")}<h1>${p.title}</h1><p class="lead">${p.description}</p>${action}</div>${p.photo ? `<figure class="intro-photo"><img src="${original + p.photo}" alt="${esc(imageAlts[p.photo] || p.title)}" fetchpriority="high"></figure>` : ""}</div></div></section>`;
}
export const imageAlts = {
  "autoscuola-slide.jpg": "Le tre auto della scuola davanti a Mondovì",
  "audi-subalpina.jpg": "Audi bianca in un paesaggio di montagna",
  "motociclette.jpg": "Motocicletta per le esercitazioni",
  "auto-autoscuola.jpg": "Le auto della scuola a Mondovì",
  "ambulatorio.jpg": "Ambulatorio per le visite in sede",
  "aula-recupero-punti.jpg": "Postazioni per lo studio e i quiz",
  "aula-lezioni.jpg": "Aula di teoria con modelli didattici",
  "aula-teoria.jpg": "Aula di teoria",
  "zona-esame.jpg": "Area per le esercitazioni pratiche",
  "ufficio-accoglienza.jpg": "Banco accoglienza della segreteria",
  "cqc.jpg": "Facsimile della carta di qualificazione",
  "patente-internazionale.gif": "Esempio di permesso internazionale di guida",
  "ufficio-segreteria.jpg": "La segreteria di Mondovì",
};
export function contactBand(subject = "Informazioni") {
  return `<aside class="contact-band"><div class="wrap band-inner"><div>${eyebrow("La segreteria")}<h2>Parliamone insieme.</h2><p>Passa in sede a Mondovì o scrivici per saperne di più.</p></div>${btn("Contatta la scuola", contact(subject), "light", "up")}</div></aside>`;
}
export function accordion(entries) {
  return `<div class="accordions">${entries.map(([title, body]) => `<details><summary>${title}${ic("plus")}</summary><div class="answer">${body}</div></details>`).join("")}</div>`;
}
export function card(key, label, description, image, icon = "right") {
  const p = pages[key];
  return `<a class="photo-card" href="${href(key)}"><div class="card-photo"><img loading="lazy" src="${original + image}" alt="${esc(imageAlts[image] || "")}"></div><div class="card-info"><p class="card-label">${label}</p><h3>${p.short || p.title}${ic(icon)}</h3><p>${description}</p></div></a>`;
}
export function hero() {
  return `<section class="hero" aria-roledescription="carosello" aria-label="In evidenza" tabindex="0"><div class="frames">${slides.map((s, i) => `<div class="hero-frame" data-frame="${i}" ${i ? "hidden" : ""}><img class="hero-img" src="${original + s.photo}" alt="${esc(s.alt)}" ${i ? 'loading="lazy"' : 'fetchpriority="high"'}><div class="hero-shade"></div><div class="wrap hero-wrap"><div class="hero-copy">${eyebrow(s.label)}<${i ? "h2" : "h1"} class="hero-title">${s.title}<em>${s.accent}</em></${i ? "h2" : "h1"}><p class="hero-desc">${s.description}</p><div class="hero-actions">${btn(s.action, s.subject ? contact(s.subject) : href(s.target), "gold")}${btn(s.secondary, href(s.other) + (s.hash || ""), "ghost", "up")}</div></div></div></div>`).join("")}</div>
  <div class="hero-controls wrap"><div class="slide-index"><span data-index>01</span><div class="segments">${slides.map((s, i) => `<button type="button" aria-label="Mostra diapositiva ${i + 1}, ${s.caption}" aria-pressed="${!i}" data-slide="${i}"><i></i></button>`).join("")}</div><span class="total">04</span></div>
  <div class="slide-switch"><span class="slide-name" data-caption>${slides[0].caption}</span><button aria-label="Diapositiva precedente" data-prev>${ic("left")}</button><button aria-label="Diapositiva successiva" data-next>${ic("right")}</button></div></div><span class="sr-only" aria-live="polite" data-slide-status></span></section>`;
}
export function form(kind = "info") {
  const renew = kind === "renew";
  const id = renew ? "670" : "5";
  return `<form class="contact-form" data-form="${id}" action="https://www.autoscuolasubalpinamondovi.it/${renew ? "?page_id=667" : "?page_id=779"}#wpcf7-f${id}-o1" method="post" enctype="multipart/form-data">
  ${Object.entries({
    _wpcf7: id,
    _wpcf7_version: "5.0.1",
    _wpcf7_locale: "it_IT",
    _wpcf7_unit_tag: "wpcf7-f" + id + "-o1",
    _wpcf7_container_post: "0",
  })
    .map(([k, v]) => `<input type="hidden" name="${k}" value="${v}">`)
    .join("")}
  <p class="form-note">I campi con * sono obbligatori.</p><div class="fields"><label>Nome e cognome *<input name="your-name" required autocomplete="name"></label><label>Email *<input name="your-email" type="email" required autocomplete="email"></label>
  ${renew ? `<label>Telefono<input name="tel-640" type="tel" autocomplete="tel"></label><label>Martedì preferito<input name="preferred-date" type="date" aria-describedby="date-hint"><small id="date-hint">La data sarà confermata dalla segreteria.</small></label><label class="full">Fototessera o allegato<input name="file-204" type="file" accept=".jpg,.jpeg,.png,.gif,.pdf"><small>File JPG, PNG, GIF o PDF.</small></label>` : `<label class="full">Oggetto *<input name="your-subject" required></label>`}
  <label class="full">${renew ? "Note per la visita" : "Messaggio"}<textarea name="your-message" rows="4"></textarea></label></div>
  <div class="form-end"><button class="btn primary" type="submit">${renew ? "Invia la richiesta di visita" : "Invia il messaggio"}${ic("right")}</button><p class="form-status" role="status" aria-live="polite"></p></div>${renew ? "<noscript><p>Per indicare una data di visita, scrivila nelle note.</p></noscript>" : ""}</form>`;
}
