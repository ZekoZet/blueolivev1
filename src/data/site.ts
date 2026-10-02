// Zentrale Inhalte von Blue Olive Lab. Eigene Texte auf Basis der Positionierung.
// PLATZHALTER sind mit "TODO" markiert und in ENTSCHEIDUNGEN.md aufgeführt.

export const site = {
  name: 'Blue Olive Lab',
  tagline: 'Webdesign & Creative Development',
  owner: 'Panajotis Zekos',
  url: 'https://blue-olive.online',
  domain: 'blue-olive.online',
  street: 'Finsterer Weg 13-1',
  zip: '72131',
  city: 'Ofterdingen',
  // TODO: echte E-Mail-Adresse eintragen
  email: 'kontakt@blue-olive.online',
  title: 'Blue Olive Lab – Webdesign & Creative Development aus Ofterdingen',
  description:
    'Maßgeschneidertes High-End-Webdesign, UI/UX-Konzeption in Figma und Frontend-Entwicklung mit Astro, TypeScript und Tailwind CSS – mit Fokus auf 100/100 Lighthouse, ruckelfreies Scrollen und Barrierefreiheit.',
};

export const topBar = {
  text: 'Neu im Standard: 100/100 Lighthouse-Ziel in jedem Projekt',
  href: '#leistungen',
  meta: ['Ofterdingen · Remote', 'DE'],
};

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; text: string }[];
}

export const nav: NavItem[] = [
  {
    label: 'Leistungen',
    href: '#leistungen',
    children: [
      { label: 'Webdesign', href: '#leistungen', text: 'Individuelle Gestaltung statt Template' },
      { label: 'UI/UX-Konzeption', href: '#ablauf', text: 'Klickbare Prototypen in Figma' },
      { label: 'Frontend-Entwicklung', href: '#leistungen', text: 'Astro, TypeScript & Tailwind CSS' },
      { label: 'Performance & SEO', href: '#weitere-leistungen', text: 'Core Web Vitals im grünen Bereich' },
    ],
  },
  { label: 'Ablauf', href: '#ablauf' },
  { label: 'Branchen', href: '#branchen' },
  { label: 'Preise', href: '#preise' },
  { label: 'FAQ', href: '#faq' },
];

export const cta = { label: 'Projekt starten', href: '#kontakt' };
export const ctaSecondary = { label: 'Kontakt', href: '#kontakt' };

export const hero = {
  badge: 'Webdesign & Creative Development',
  title: 'Webdesign, das performt.',
  text: 'Maßgeschneiderte Websites – von der UI/UX-Konzeption in Figma bis zur schlanken Umsetzung mit Astro, TypeScript und Tailwind CSS. Gebaut für 100/100 in Lighthouse, ruckelfreies Scrollen und echte Barrierefreiheit.',
  primary: { label: 'Projekt starten', href: '#kontakt' },
  secondary: { label: 'Leistungen ansehen', href: '#leistungen' },
  nodes: ['Fi', 'As', 'TS', 'Tw', 'Gs', '100'],
  nodeLabels: ['Figma', 'Astro', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Lighthouse 100'],
};

export const explain = {
  tabs: ['Was ich mache', 'Wie ich arbeite'],
  title: 'Websites, die Ihre Marke tragen – und in Sekundenbruchteilen laden.',
  panels: [
    {
      lead: 'Blue Olive Lab gestaltet und entwickelt Websites, die präzise zu Ihrer Marke passen und technisch kompromisslos sauber sind.',
      text: 'Keine Baukästen, keine überladenen Themes: Jede Seite entsteht individuell – mit klarer Informationsarchitektur, durchdachter Typografie und Code, der nur lädt, was wirklich gebraucht wird.',
    },
    {
      lead: 'Vom ersten Gespräch bis zum Livegang arbeite ich direkt mit Ihnen – ohne Agentur-Umwege und mit festen Ansprechpartnern.',
      text: 'Zuerst entsteht ein klickbarer Prototyp in Figma, den Sie vor der Entwicklung erleben und abstimmen. Danach folgen Umsetzung, Tests auf echten Geräten und die Veröffentlichung auf Ihrem Hosting.',
    },
  ],
  cardTitle: 'Blue Olive Lab: Design trifft Performance.',
  chips: [
    ['UI/UX-Konzeption', 'Figma-Prototypen', 'Webdesign', 'Designsysteme', 'Responsive Design', 'Mikro-Interaktionen'],
    ['Astro', 'TypeScript', 'Tailwind CSS', 'GSAP-Animationen', 'Self-hosted Fonts', 'Bildoptimierung'],
    ['Lighthouse 100', 'Core Web Vitals', 'Barrierefreiheit', 'Technisches SEO', 'Strukturierte Daten', 'STRATO & IONOS'],
  ],
};

export const bento = {
  badge: 'Leistungen',
  title: 'Premium-Qualität statt Standard-Template',
  items: [
    { key: 'lighthouse', title: '100/100 in Lighthouse', text: 'Performance, Barrierefreiheit, Best Practices und SEO – gemessen und optimiert, nicht geschätzt.' },
    { key: 'figma', title: 'UI/UX in Figma', text: 'Klickbare Prototypen, bevor eine Zeile Code entsteht. Sie sehen und testen Ihre Website vorab.' },
    { key: 'a11y', title: 'Barrierefreiheit', text: 'Semantisches HTML, Kontraste nach WCAG, Tastaturbedienung und Screenreader-Tests.' },
    { key: 'scroll', title: 'Zero-Jank-Scrolling', text: 'Animationen nur über transform und opacity – flüssig auch auf schwächeren Geräten.' },
    { key: 'system', title: 'Design-Tokens & Systeme', text: 'Farben, Typografie und Abstände zentral gepflegt – Erweiterungen bleiben konsistent.' },
    { key: 'responsive', title: 'Responsive auf jedem Gerät', text: 'Vom Smartphone im Hochformat bis zum 4K-Monitor – jedes Layout bewusst gestaltet.' },
    { key: 'code', title: 'Sauberer, statischer Code', text: 'Astro erzeugt reine HTML-Seiten. Kein Datenbank-Ballast, minimale Angriffsfläche, schnelles Hosting.' },
  ],
};

export const globe = {
  badge: 'Standort',
  title: 'Aus Ofterdingen. Für Projekte überall.',
  text: 'Persönlich vor Ort im Raum Tübingen und Reutlingen – und remote für Projekte in ganz Deutschland und darüber hinaus.',
};

export const projectCheck = {
  badge: 'Projekt-Check',
  title: 'Starten Sie Ihr Projekt',
  text: 'Vier klare Schritte – von der ersten Idee bis zur schnellen, barrierefreien Website.',
  cardTitle: 'Ihr Weg zur neuen Website',
  steps: [
    { title: 'Erstgespräch', text: 'Ziele, Zielgruppe und Umfang klären – unverbindlich.' },
    { title: 'Konzept & Figma', text: 'Struktur, Design und klickbarer Prototyp zur Abstimmung.' },
    { title: 'Entwicklung', text: 'Umsetzung mit Astro, TypeScript und Tailwind CSS.' },
    { title: 'Launch & Betreuung', text: 'Tests, Veröffentlichung und auf Wunsch laufende Pflege.' },
  ],
  placeholder: 'Beschreiben Sie Ihr Projekt in einem Satz …',
  note: 'Ihre Nachricht wird erst beim Absenden in Ihrem E-Mail-Programm geöffnet.',
  tags: ['Figma', 'Astro', 'TypeScript', 'Tailwind', 'GSAP', 'Sharp', 'SEO', 'WCAG'],
};

export const industries = {
  badge: 'Branchen',
  title: 'Eine Arbeitsweise für unterschiedliche Branchen',
  items: [
    { key: 'gastro', title: 'Gastronomie', points: ['Speisekarten, die auf dem Handy gut lesbar sind', 'Filialfinder mit Karte und Route', 'Öffnungszeiten und Angebote schnell pflegbar'] },
    { key: 'craft', title: 'Handwerk', points: ['Referenzen mit großen, schnell ladenden Bildern', 'Klare Kontaktwege und Anfrageformulare', 'Lokale Sichtbarkeit durch technisches SEO'] },
    { key: 'estate', title: 'Immobilien & Gutachter', points: ['Seriöser, ruhiger Auftritt mit klarer Struktur', 'Leistungsseiten mit Ablauf und Unterlagen', 'Barrierefreie Formulare'] },
    { key: 'creative', title: 'Fotografie & Kreative', points: ['Portfolios mit optimierten Bildformaten', 'Galerien ohne Ladeverzögerung', 'Individuelle Animationen und Übergänge'] },
    { key: 'retail', title: 'Handel', points: ['Produktseiten mit Fokus auf Ladezeit', 'Strukturierte Daten für Suchergebnisse', 'Verlässliche Darstellung auf allen Geräten'] },
    { key: 'startup', title: 'Startups & Agenturen', points: ['Landingpages für Kampagnen und Launches', 'Designsysteme zum Weiterbauen', 'Frontend-Umsetzung von Figma-Entwürfen'] },
  ],
};

// TODO: Preise sind Beispielwerte – bitte durch eigene Preise ersetzen
export const pricing = {
  modes: ['Einmalig', 'Mit Betreuung'],
  title: 'Klare Pakete für Ihre neue Website',
  plans: [
    {
      name: 'Onepager',
      price: [1490, 1490],
      monthly: [0, 39],
      features: ['Eine Seite mit bis zu 6 Sektionen', 'Design-Konzept in Figma', 'Responsive & barrierefrei', 'Ziel: 100/100 Lighthouse'],
    },
    {
      name: 'Business-Website',
      price: [3490, 3490],
      monthly: [0, 69],
      featured: true,
      features: ['Bis zu 8 Unterseiten', 'Klickbarer Figma-Prototyp', 'GSAP-Animationen & Mikro-Interaktionen', 'Technisches SEO & strukturierte Daten'],
    },
    {
      name: 'Premium-Website',
      price: [6900, 6900],
      monthly: [0, 119],
      features: ['Umfang nach Konzept', 'Individuelles Designsystem', 'Interaktive Elemente & Karten', 'Persönliche Einweisung & Übergabe'],
    },
  ],
  button: 'Anfragen',
  notes: ['Alle Pakete als Festpreis nach dem Erstgespräch.', 'Hosting bei STRATO, IONOS oder Ihrem bestehenden Anbieter.'],
};

export const faq = {
  title: 'Häufig gestellte Fragen',
  items: [
    { q: 'Was bedeutet „100/100 in Lighthouse“?', a: 'Lighthouse ist das Prüfwerkzeug von Google, das auch hinter PageSpeed Insights steht. Es bewertet Performance, Barrierefreiheit, Best Practices und SEO. Ich optimiere jede Website darauf, in allen vier Kategorien die volle Punktzahl zu erreichen – gemessen auf Mobilgeräten und am Desktop.' },
    { q: 'Warum Astro statt WordPress?', a: 'Astro erzeugt fertige HTML-Seiten ohne Datenbank und ohne unnötiges JavaScript. Das macht Websites besonders schnell, sicher und günstig im Hosting. Inhalte lassen sich trotzdem bequem pflegen.' },
    { q: 'Wie läuft ein Projekt ab?', a: 'Nach einem unverbindlichen Erstgespräch entsteht ein Konzept mit klickbarem Prototyp in Figma. Erst wenn Sie zufrieden sind, beginnt die Entwicklung. Zum Schluss teste ich auf echten Geräten und veröffentliche die Website auf Ihrem Hosting.' },
    { q: 'Wie lange dauert die Umsetzung?', a: 'Ein Onepager ist meist in zwei bis drei Wochen fertig, eine Business-Website in vier bis sechs Wochen. Den genauen Zeitplan legen wir im Erstgespräch fest.' },
    { q: 'Kann ich Inhalte später selbst ändern?', a: 'Ja. Texte und Bilder liegen strukturiert vor und lassen sich einfach anpassen. Auf Wunsch übernehme ich die Pflege im Rahmen der Betreuung.' },
    { q: 'Ist meine Website barrierefrei?', a: 'Barrierefreiheit ist fester Bestandteil jedes Projekts: semantische Struktur, ausreichende Kontraste, Tastaturbedienung, Fokus-Stile und Tests mit Screenreadern.' },
  ],
};

export const contactCta = {
  title: 'Lassen Sie uns über Ihr Projekt sprechen',
  text: 'Erzählen Sie mir von Ihrem Vorhaben. Gemeinsam finden wir heraus, wie Ihre neue Website aussehen kann – und was sie für Ihre Kundinnen und Kunden leisten soll.',
  button: 'Erstgespräch anfragen',
};

export const services = {
  title: 'Weitere Leistungen von Blue Olive Lab',
  items: [
    { key: 'relaunch', title: 'Relaunch & Redesign', text: 'Bestehende Websites modernisieren – schneller, klarer, barrierefrei.' },
    { key: 'landing', title: 'Landingpages', text: 'Fokussierte Seiten für Kampagnen, Produkte und Veranstaltungen.' },
    { key: 'audit', title: 'Performance-Audit', text: 'Analyse Ihrer Website mit konkreten Maßnahmen für bessere Ladezeiten.' },
    { key: 'a11y', title: 'Barrierefreiheits-Check', text: 'Prüfung nach WCAG mit priorisierter Liste zur Umsetzung.' },
    { key: 'care', title: 'Wartung & Hosting-Betreuung', text: 'Updates, Inhaltsänderungen und Veröffentlichung bei STRATO oder IONOS.' },
    { key: 'system', title: 'Figma-Designsysteme', text: 'Komponenten und Tokens als Grundlage für konsistente Erweiterungen.' },
  ],
  more: 'Mehr erfahren',
};

export const footer = {
  text: 'Maßgeschneidertes Webdesign und Frontend-Entwicklung mit Fokus auf Performance, Barrierefreiheit und Premium-Ästhetik.',
  columns: [
    { title: 'Leistungen', links: [['Webdesign', '#leistungen'], ['UI/UX-Konzeption', '#ablauf'], ['Frontend-Entwicklung', '#leistungen'], ['Performance-Audit', '#weitere-leistungen'], ['Wartung', '#weitere-leistungen']] },
    { title: 'Studio', links: [['Ablauf', '#ablauf'], ['Branchen', '#branchen'], ['Preise', '#preise'], ['FAQ', '#faq']] },
  ],
  badges: ['Lighthouse 100', 'Barrierefrei entwickelt', 'Made in Ofterdingen'],
  quick: { title: 'Schnellanfrage: Wir melden uns mit einem Terminvorschlag.', placeholder: 'Ihre E-Mail-Adresse' },
  copyright: `© ${new Date().getFullYear()} Blue Olive Lab · Panajotis Zekos`,
};
