import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function animateCards(cards) {
  cards.forEach((card, index) => {
    if (card) {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60, skewY: 5 },
        {
          opacity: 1,
          y: 0,
          skewY: 0,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          duration: 0.6,
          delay: index * 0.1,
          ease: 'power2.out',
        }
      );
    }
  });
}

export function parallaxEffects(about, contact) {
  if (about) {
    gsap.to(about, {
      yPercent: -10,
      scrollTrigger: {
        trigger: about,
        start: 'top bottom',
        scrub: true,
      },
    });
  }

  if (contact) {
    gsap.to(contact, {
      yPercent: -5,
      scrollTrigger: {
        trigger: contact,
        start: 'top bottom',
        scrub: true,
      },
    });
  }
}
