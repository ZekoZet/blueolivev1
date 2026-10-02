// Animations-Steuerung nach dem Referenzvideo (ohne Bibliothek, läuft auf allen Geräten).
//  1. Hero-Sequenz startet synchron zum Intro-Vorhang (bzw. sofort, wenn das Intro schon gesehen wurde)
//  2. [data-anim]-Elemente bekommen beim Hereinscrollen einmalig die Klasse .in (CSS übernimmt die Bewegung)
//  3. [data-stack]-Sektionen bleiben stehen, während die nächste Sektion darüber geschoben wird

const html = document.documentElement;
const motionOK = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

/* ---------- 1. Hero-Sequenz ---------- */
function playHero() {
  html.classList.add('hero-armed');
  // zwei Frames warten, damit der verborgene Startzustand gerendert ist
  requestAnimationFrame(() => requestAnimationFrame(() => html.classList.add('hero-play')));
}

if (motionOK) {
  const intro = document.querySelector<HTMLElement>('.intro');
  const introVisible = intro && getComputedStyle(intro).display !== 'none';
  if (introVisible) {
    let started = false;
    const start = () => {
      if (started) return;
      started = true;
      playHero();
    };
    // Start, sobald der Vorhang zu laufen beginnt (Fallback per Timer)
    intro.addEventListener('animationstart', (e) => {
      if (e.target === intro) start();
    });
    window.setTimeout(start, 2100);
  } else {
    playHero();
  }
} else {
  html.classList.add('hero-armed', 'hero-play');
}

/* ---------- 2. Einblenden beim Scrollen ---------- */
const targets = document.querySelectorAll<HTMLElement>('[data-anim]');
// Kinder gestaffelter Gruppen durchnummerieren (--si)
targets.forEach((el) => {
  if (el.dataset.anim === 'stagger' || el.dataset.anim === 'cards') {
    [...el.children].forEach((child, i) => (child as HTMLElement).style.setProperty('--si', String(i)));
  }
});

if (!motionOK || !('IntersectionObserver' in window)) {
  targets.forEach((el) => el.classList.add('in'));
} else {
  // Zugeschnittene Elemente (clip-path) zählen für den Browser nicht als sichtbar →
  // bei "pill" und "expand" stattdessen den Container beobachten.
  const owner = new Map<Element, HTMLElement[]>();
  targets.forEach((el) => {
    const watch = el.dataset.anim === 'pill' || el.dataset.anim === 'expand' ? (el.parentElement ?? el) : el;
    owner.set(watch, [...(owner.get(watch) ?? []), el]);
  });
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        owner.get(entry.target)?.forEach((el) => el.classList.add('in'));
        io.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.05 },
  );
  owner.forEach((_, watch) => io.observe(watch));
}

/* ---------- 3. Gestapelte Sektionen ---------- */
// Jede Sektion liegt über der vorigen (z-index nach Reihenfolge). [data-stack]-Sektionen sind sticky;
// ist eine Sektion höher als der Bildschirm, bleibt sie erst stehen, wenn ihr unteres Ende erreicht ist.
const sections = [...document.querySelectorAll<HTMLElement>('main > section, body > footer')];
const stacks = sections.filter((s) => s.hasAttribute('data-stack'));

sections.forEach((s, i) => {
  if (getComputedStyle(s).position === 'static') s.style.position = 'relative';
  s.style.zIndex = String(i + 1);
});

const layoutStacks = () => {
  const vh = window.innerHeight;
  stacks.forEach((s) => (s.style.top = `${Math.min(0, vh - s.offsetHeight)}px`));
};
layoutStacks();
if ('ResizeObserver' in window) {
  const ro = new ResizeObserver(layoutStacks);
  stacks.forEach((s) => ro.observe(s));
}
window.addEventListener('resize', layoutStacks, { passive: true });
