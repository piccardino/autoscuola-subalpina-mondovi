const $ = (selector, root = document) => root.querySelector(selector);
const all = (selector, root = document) => [...root.querySelectorAll(selector)];

function navigation() {
  const nav = $("#site-nav");
  const toggle = $(".menu-toggle");
  const triggers = all(".nav-trigger", nav);
  function closeGroups(except) {
    for (const trigger of triggers) {
      if (trigger === except) continue;
      trigger.setAttribute("aria-expanded", "false");
      document.getElementById(trigger.getAttribute("aria-controls")).hidden =
        true;
    }
  }
  function setMobile(open) {
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Chiudi il menu" : "Apri il menu");
    if (!open) closeGroups();
  }
  toggle.addEventListener("click", () =>
    setMobile(!nav.classList.contains("open")),
  );
  for (const trigger of triggers) {
    trigger.addEventListener("click", () => {
      const open = trigger.getAttribute("aria-expanded") !== "true";
      closeGroups(trigger);
      trigger.setAttribute("aria-expanded", String(open));
      document.getElementById(trigger.getAttribute("aria-controls")).hidden =
        !open;
    });
  }
  document.addEventListener("click", (event) => {
    if (event.target.closest(".nav a") || !event.target.closest(".head-in")) setMobile(false);
    else if (!event.target.closest(".nav-group")) closeGroups();
  });
  nav.addEventListener("focusout", (event) => {
    if (event.relatedTarget && !nav.contains(event.relatedTarget))
      closeGroups();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    const active = triggers.find(
      (b) => b.getAttribute("aria-expanded") === "true",
    );
    if (active) {
      closeGroups();
      active.focus();
    } else if (nav.classList.contains("open")) {
      setMobile(false);
      toggle.focus();
    }
  });
  matchMedia("(max-width:820px)").addEventListener("change", () =>
    setMobile(false),
  );
}

function carousel(hero) {
  const frames = all("[data-frame]", hero);
  const segments = all("[data-slide]", hero);
  let current = 0;
  function show(index) {
    current = (index + frames.length) % frames.length;
    frames.forEach((frame, i) => {
      frame.hidden = i !== current;
    });
    segments.forEach((btn, i) =>
      btn.setAttribute("aria-pressed", String(i === current)),
    );
    $("[data-index]", hero).textContent = String(current + 1).padStart(2, "0");
    const caption = segments[current]
      .getAttribute("aria-label")
      .split(", ")
      .slice(1)
      .join(", ");
    $("[data-caption]", hero).textContent = caption;
    $("[data-slide-status]", hero).textContent =
      "Diapositiva " + (current + 1) + " di " + frames.length + ". " + caption;
  }
  $("[data-prev]", hero).addEventListener("click", () => show(current - 1));
  $("[data-next]", hero).addEventListener("click", () => show(current + 1));
  segments.forEach((btn, i) => btn.addEventListener("click", () => show(i)));
  hero.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      show(current + (event.key === "ArrowRight" ? 1 : -1));
      if (document.activeElement.closest("[hidden]")) hero.focus();
    }
  });
  let start;
  hero.addEventListener(
    "touchstart",
    (event) => {
      start = event.changedTouches[0];
    },
    { passive: true },
  );
  hero.addEventListener(
    "touchend",
    (event) => {
      if (!start) return;
      const end = event.changedTouches[0],
        dx = end.clientX - start.clientX,
        dy = end.clientY - start.clientY;
      if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.5)
        show(current + (dx < 0 ? 1 : -1));
      start = null;
    },
    { passive: true },
  );
}

function photoGallery(dialog) {
  const photos = all("[data-photo]");
  const filters = all("[data-filter]");
  let current, opener;
  const visible = () => photos.filter((photo) => !photo.hidden);
  function display(photo) {
    current = photo;
    const source = $("img", photo),
      img = $("img", dialog);
    img.src = source.src;
    img.alt = source.alt;
    $("[data-photo-title]", dialog).textContent = source.alt;
    $("[data-photo-count]", dialog).textContent =
      visible().indexOf(photo) + 1 + " / " + visible().length;
  }
  function step(delta) {
    const items = visible();
    display(
      items[(items.indexOf(current) + delta + items.length) % items.length],
    );
  }
  filters.forEach((btn) =>
    btn.addEventListener("click", () => {
      filters.forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
      photos.forEach((photo) => {
        photo.hidden =
          btn.dataset.filter !== "Tutte" &&
          photo.dataset.group !== btn.dataset.filter;
      });
    }),
  );
  photos.forEach((photo) =>
    photo.addEventListener("click", () => {
      opener = photo;
      display(photo);
      dialog.showModal();
      document.body.style.overflow = "hidden";
      $(".close-light", dialog).focus();
    }),
  );
  $(".close-light", dialog).addEventListener("click", () => dialog.close());
  $("[data-photo-prev]", dialog).addEventListener("click", () => step(-1));
  $("[data-photo-next]", dialog).addEventListener("click", () => step(1));
  dialog.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault();
      step(e.key === "ArrowRight" ? 1 : -1);
    }
  });
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) dialog.close();
  });
  dialog.addEventListener("close", () => {
    document.body.style.overflow = "";
    opener?.focus();
  });
}

function contactForm(form) {
  const id = form.dataset.form,
    renewal = id === "670";
  const date = form.elements.namedItem("preferred-date");
  const status = $(".form-status", form),
    submit = $("button[type=submit]", form);
  const requestedSubject = new URLSearchParams(location.search).get("oggetto");
  if (!renewal && requestedSubject)
    form.elements.namedItem("your-subject").value = requestedSubject;
  if (date) {
    const now = new Date();
    const today = new Intl.DateTimeFormat("sv-SE", {
      timeZone: "Europe/Rome",
    }).format(now);
    date.min = today;
    function validDate() {
      const chosen = date.value ? new Date(date.value + "T12:00:00Z") : null;
      date.setCustomValidity(
        chosen && chosen.getUTCDay() !== 2
          ? "Scegli un martedì per la visita in sede."
          : "",
      );
    }
    date.addEventListener("input", validDate);
    date.addEventListener("change", validDate);
  }
  function error(message) {
    status.classList.add("error");
    status.textContent = message + " ";
    const alternative = document.createElement("a");
    alternative.href = "tel:+39017442167";
    alternative.textContent = "Chiama lo 0174 42167";
    const mail = document.createElement("a");
    mail.href =
      "mailto:info@autoscuolasubalpinamondovi.it?subject=" +
      encodeURIComponent(
        renewal
          ? "Rinnovo patente"
          : form.elements.namedItem("your-subject")?.value || "Informazioni",
      );
    mail.textContent = "scrivi via email";
    status.append(alternative, " oppure ", mail, ".");
  }
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (submit.disabled || !form.reportValidity()) return;
    submit.disabled = true;
    form.setAttribute("aria-busy", "true");
    status.classList.remove("error");
    status.textContent = "Invio in corso…";
    const data = new FormData(form);
    if (date) {
      // The original optional date field has a server-side upper bound of 2020.
      // Preserve the preferred appointment in the message delivered to the office.
      if (date.value) {
        const formatted = date.value.split("-").reverse().join("/");
        data.set(
          "your-message",
          "Data indicativa richiesta: " +
            formatted +
            "\n\n" +
            (data.get("your-message") || ""),
        );
      }
      data.delete("preferred-date");
    }
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 45000);
    try {
      const url =
        "https://www.autoscuolasubalpinamondovi.it/index.php?rest_route=/contact-form-7/v1/contact-forms/" +
        id +
        "/feedback";
      const response = await fetch(url, {
        method: "POST",
        body: data,
        credentials: "omit",
        signal: controller.signal,
      });
      if (!response.ok) throw new Error("HTTP " + response.status);
      const result = await response.json();
      if (result.status === "mail_sent") {
        form.reset();
        status.textContent = renewal
          ? "Richiesta inviata. La segreteria ti contatterà per confermare data e orario."
          : "Messaggio inviato alla segreteria.";
      } else if (result.status === "validation_failed") {
        const issues = result.invalidFields || result.invalid_fields || [];
        const messages = issues.map((issue) => {
          let name = issue.field;
          if (!name && typeof issue.into === "string")
            name = issue.into.split(".").filter(Boolean).pop();
          const field = name && form.elements.namedItem(name);
          const label = field?.labels?.[0]?.childNodes[0]?.textContent
            ?.trim()
            .replace(/ *\*$/, "");
          return [label, issue.message].filter(Boolean).join(" — ");
        });
        error(messages.join(" ") || "Controlla i campi del modulo e riprova.");
      } else {
        error("Il servizio della segreteria non ha confermato l’invio.");
      }
    } catch {
      error(
        "Impossibile verificare la consegna della richiesta. Puoi contattare la segreteria per una conferma.",
      );
    } finally {
      clearTimeout(timeout);
      submit.disabled = false;
      form.removeAttribute("aria-busy");
    }
  });
}
navigation();
if ($(".hero")) carousel($(".hero"));
if ($(".lightbox")) photoGallery($(".lightbox"));
all("form[data-form]").forEach(contactForm);
