/* Shared header + footer for the KLATT prototype.
   Navigation gemäß Briefing KLATT_Prototyp_Briefing_Claude_Design.md
   Reihenfolge: Knowledge Center · Für Ihre Branche · Förderanlagen · Ihr Projekt · Warum KLATT · Referenzen · [Ersteinschätzung →]
   Vertrieb: Markus Bergs, Robert Mayer, Florian Pöckl */

const NAV_ITEMS = [
  { id: "knowledge",        href: "knowledge.html",        label: "Knowledge Center" },
  { id: "branchen",         href: "branchen.html",         label: "Für Ihre Branche" },
  { id: "foerderanlagen",   href: "foerderanlagen.html",   label: "Förderanlagen" },
  { id: "ihr-projekt",      href: "ihr-projekt.html",      label: "Ihr Projekt" },
  { id: "warum-klatt",      href: "warum-klatt.html",      label: "Warum KLATT" },
  { id: "referenzen",       href: "referenzen.html",       label: "Referenzen" },
];

function renderHeader(activeId = "") {
  const links = NAV_ITEMS.map(n =>
    `<a href="${n.href}" data-id="${n.id}"${n.id === activeId ? ' class="active"' : ''}>${n.label}</a>`
  ).join("");

  document.body.insertAdjacentHTML("afterbegin", `
  <div class="topstrip">
    <div class="container row">
      <div class="topstrip-left">HÖRMANN&nbsp;Klatt Conveyors GmbH · Neumarkt am Wallersee · +43 6216 200 20-0</div>
      <div class="lang">
        <a href="#" class="lang-active">DE</a>
        <a href="#" class="lang-inactive" title="Englische Version folgt">EN</a>
      </div>
    </div>
  </div>
  <header class="site-header">
    <div class="container row header-inner">
      <a href="index.html" class="logo-link" aria-label="HÖRMANN Klatt — Startseite">
        <img src="assets/logo_hoermann_klatt.png" alt="HÖRMANN Klatt Conveyors" height="40">
      </a>
      <nav class="nav-links" aria-label="Hauptnavigation">${links}</nav>
      <div class="nav-right">
        <a href="kontakt.html" class="btn btn-cta-header">Ersteinschätzung&nbsp;→</a>
      </div>
      <button class="nav-burger" aria-label="Menü öffnen" onclick="document.querySelector('.nav-links').classList.toggle('open')">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>`);
}

function renderFooter() {
  document.body.insertAdjacentHTML("beforeend", `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <img src="assets/logo_hoermann_klatt_inverse.png" alt="HÖRMANN Klatt Conveyors" height="36">
          <p>Ihr Systempartner für individuelle Fördertechniklösungen.<br>
             Mechanik und Steuerung aus einer Hand — von der Planung bis zum Service.</p>
          <p class="footer-address">
            HÖRMANN Klatt Conveyors GmbH<br>
            Köstendorferstraße 7A<br>
            5202 Neumarkt am Wallersee<br>
            Österreich<br>
            <a href="tel:+43621620020">+43 6216 200 20-0</a><br>
            <a href="mailto:office@klatt.at">office@klatt.at</a>
          </p>
        </div>
        <div class="footer-col">
          <h4>Förderanlagen</h4>
          <a href="foerderanlagen.html">Übersicht</a>
          <a href="palettenfoerderanlagen.html">Palettenförderanlagen</a>
          <a href="behaelterfoerderanlagen.html">Behälterförderanlagen</a>
          <a href="containerfoerderanlagen.html">Containerförderanlagen</a>
          <a href="gepaeckfoerderanlagen.html">Gepäckförderanlagen</a>
          <a href="post-paketfoerderanlagen.html">Post- &amp; Paketförderanlagen</a>
          <a href="holzpaketfoerderanlagen.html">Holzpaketförderanlagen</a>
          <a href="altkartonagen-folientransport.html">Altkartonagen- &amp; Folientransport</a>
          <a href="sonderfoerderanlagen.html">Sonderförderanlagen</a>
        </div>
        <div class="footer-col">
          <h4>Für Ihre Branche</h4>
          <a href="branchen.html">Alle Branchen</a>
          <a href="branchen-pharma.html">Pharma &amp; Medizintechnik</a>
          <a href="branchen-logistik.html">Logistik &amp; Lager</a>
          <a href="branchen-lebensmittel.html">Lebensmittel &amp; Getränke</a>
          <a href="branchen-krankenhaus.html">Krankenhaus &amp; Klinik</a>
          <a href="branchen-flughafen.html">Flughafen</a>
          <a href="branchen-post-paket.html">Post &amp; Paketdienste</a>
          <a href="branchen-holzindustrie.html">Holzindustrie</a>
          <a href="branchen-industrie.html">Industrie &amp; Produktion</a>
          <a href="branchen-baustoff.html">Baustoff &amp; Handel</a>
        </div>
        <div class="footer-col">
          <h4>Unternehmen</h4>
          <a href="warum-klatt.html">Warum KLATT</a>
          <a href="ihr-projekt.html">Ihr Projekt</a>
          <a href="scope-partner.html">Für Integratoren</a>
          <a href="referenzen.html">Referenzen</a>
          <a href="knowledge.html">Knowledge Center</a>
          <a href="knowledge.html#buyers-guide">Buyers Guide (PDF)</a>
        </div>
        <div class="footer-col">
          <h4>Kontakt</h4>
          <p class="footer-address" style="color:#ced1d4;font-size:13px;font-weight:300;line-height:1.7">
            HÖRMANN Klatt Conveyors GmbH<br>
            Köstendorferstraße 7A<br>
            5202 Neumarkt am Wallersee<br>
            Österreich
          </p>
          <p class="footer-address" style="color:#ced1d4;font-size:13px;font-weight:300;line-height:1.9;margin-top:8px">
            <a href="tel:+43621620020">+43 6216 200 20-0</a><br>
            <a href="mailto:office@klatt.at">office@klatt.at</a><br>
            <a href="https://www.hoermann-klatt.com" target="_blank" rel="noopener">www.hoermann-klatt.com</a>
          </p>
        </div>
      </div>
      <div class="footer-legal">
        <div>© 2026 HÖRMANN Klatt Conveyors GmbH — Ein Unternehmen der HÖRMANN Gruppe</div>
        <div class="footer-legal-links">
          <a href="#">Impressum</a>
          <a href="#">Datenschutz</a>
          <a href="#">AGB</a>
        </div>
      </div>
    </div>
  </footer>`);
}
