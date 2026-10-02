// GSAP nur auf Desktop mit feinem Zeiger (Maus/Trackpad) und ohne reduzierte Bewegung.
// Dynamischer Import → Handy & Tablet laden GSAP gar nicht (dort übernehmen CSS-Scroll-Timelines).
// Scroll-gekoppelte Effekte aus dem Referenzvideo:
//  – Globus steigt beim Scrollen auf und wächst
//  – Leuchtbogen im Kontakt-Aufruf steigt auf

const GUARD = '(min-width: 1024px) and (pointer: fine) and (prefers-reduced-motion: no-preference)';

export async function initMotion(): Promise<void> {
  if (!window.matchMedia(GUARD).matches) return;

  const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
  gsap.registerPlugin(ScrollTrigger);

  gsap.matchMedia().add(GUARD, () => {
    const globe = document.querySelector<HTMLElement>('[data-scroll="globe"]');
    if (globe) {
      gsap.fromTo(
        globe,
        { xPercent: -50, yPercent: 40, scale: 0.72 },
        {
          xPercent: -50,
          yPercent: 0,
          scale: 1,
          ease: 'none',
          scrollTrigger: { trigger: globe.closest('section'), start: 'top bottom', end: 'bottom bottom', scrub: 0.6 },
        },
      );
    }

    const arc = document.querySelector<HTMLElement>('[data-scroll="arc"]');
    if (arc) {
      gsap.fromTo(
        arc,
        { xPercent: -50, yPercent: 35, opacity: 0.4 },
        {
          xPercent: -50,
          yPercent: 0,
          opacity: 1,
          ease: 'none',
          scrollTrigger: { trigger: arc.closest('section'), start: 'top 85%', end: 'center center', scrub: 0.6 },
        },
      );
    }
  });
}
