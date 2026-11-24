import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { pages, esc, href, original, sitePath } from "./catalog.mjs";
import { header, footer, btn } from "./components.mjs";
import { renderers } from "./pages.mjs";

const out = fileURLToPath(new URL("../dist/", import.meta.url));
async function versionedAsset(filename) {
  const contents = await readFile(resolve(out, "assets", filename));
  const revision = createHash("sha256").update(contents).digest("hex").slice(0, 12);
  return sitePath("/assets/" + filename) + "?v=" + revision;
}
const [stylesheet, siteScript] = await Promise.all([
  versionedAsset("site.css"),
  versionedAsset("site.js"),
]);
const ids = Object.fromEntries(
  Object.values(pages)
    .filter((p) => p.id)
    .map((p) => [p.id, sitePath(p.path)]),
);
const legacy =
  'const q=new URLSearchParams(location.search),id=q.get("page_id")||q.get("p"),paths=' +
  JSON.stringify(ids) +
  ';if(Object.hasOwn(paths,id)){q.delete("page_id");q.delete("p");location.replace(paths[id]+(q.size?"?"+q:"")+location.hash)}';
function documentPage(key, body, missing = false) {
  const p = pages[key] || {
    title: "Pagina non trovata",
    description: "Questa pagina non è disponibile.",
  };
  const serifPreload = key === "home"
    ? `<link rel="preload" as="font" href="${sitePath("/assets/fonts/instrument-serif-italic.woff2")}" type="font/woff2" crossorigin>`
    : "";
  const title =
    key === "home"
      ? "Autoscuola Subalpina Mondovì · Patenti, corsi e rinnovi"
      : p.title + " · Autoscuola Subalpina Mondovì";
  return (
    "<!doctype html>\n" +
    `<html lang="it" id="top"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)}</title><meta name="description" content="${esc(p.description)}"><meta name="theme-color" content="#1a2425"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(p.description)}"><meta property="og:type" content="website"><meta property="og:locale" content="it_IT"><link rel="icon" type="image/png" href="${original}logo-emblema.png">${key === "home" || missing ? "<script>{" + legacy + "}</script>" : ""}<link rel="preload" as="font" href="${sitePath("/assets/fonts/dm-sans.woff2")}" type="font/woff2" crossorigin>${serifPreload}<link rel="stylesheet" href="${stylesheet}"><script defer src="${siteScript}"></script></head><body>${header(key)}<main id="contenuto">${body}</main>${footer()}</body></html>`
  );
}
async function save(path, body) {
  const dest = resolve(out, path);
  await mkdir(dirname(dest), { recursive: true });
  await writeFile(dest, body, "utf8");
}
for (const [key, p] of Object.entries(pages)) {
  await save(
    p.path.slice(1) + "index.html",
    documentPage(key, renderers[key]()),
  );
}
await save(
  "404.html",
  documentPage(
    "404",
    '<section class="intro"><div class="wrap section"><h1>Pagina non trovata</h1><p class="lead">Puoi ripartire dalla home o consultare i corsi della scuola.</p>' +
      btn("Torna alla home", href("home")) +
      "</div></section>",
    true,
  ),
);
await save("content/index.html", documentPage("home", renderers.home()));
const aliases = {
  "content/dove-siamo": "sede",
  "richiedi-informazioni": "info",
  info: "info",
  "chi-siamo/le-nostre-strutture": "strutture",
  "chi-siamo/fotogallery": "gallery",
  "corsi/conseguimento-patenti": "patenti",
  "corsi/recupero-punti": "punti",
  "corsi/altri-corsi": "altri",
  "corsi/corsi-in-aula": "aula",
  "corsi/pratica": "pratica",
  "servizi/rinnovo-patente": "rinnovo",
  "servizi/cqc": "cqc",
  "servizi/patente-internazionale": "internazionale",
  "servizi/porto-d-armi": "amministrazione",
};
for (const [from, key] of Object.entries(aliases)) {
  const p = pages[key];
  await save(
    from + "/index.html",
    '<!doctype html><html lang="it"><meta charset="utf-8"><title>' +
      esc(p.title) +
      "</title><script>location.replace(" +
      JSON.stringify(href(key)) +
      '+location.search+location.hash)</script><a href="' +
      href(key) +
      '">' +
      esc(p.title) +
      "</a></html>",
  );
}
console.log(Object.keys(pages).length + " pagine generate in " + out);
