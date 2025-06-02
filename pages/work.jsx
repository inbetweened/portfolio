import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from '../styles/Work.module.css';
import { useRouter } from 'next/router';

export default function WorkPage() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const router = useRouter();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = cardsRef.current;
    const totalWidth = containerRef.current.scrollWidth - window.innerWidth;

    gsap.to(containerRef.current, {
      x: () => `-${totalWidth}px`,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: () => `+=${totalWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    sections.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: card,
            containerAnimation: ScrollTrigger.getById('horizontal-scroll'),
            start: 'left center',
            toggleActions: 'play none none reset',
          },
        }
      );
    });
  }, []);

  const projects = [
    {
      title: 'Projekt Eins',
      description: 'Beschreibung für Projekt Eins',
      slug: 'projekt-eins',
    },
    {
      title: 'Projekt Zwei',
      description: 'Beschreibung für Projekt Zwei',
      slug: 'projekt-zwei',
    },
    {
      title: 'Projekt Drei',
      description: 'Beschreibung für Projekt Drei',
      slug: 'projekt-drei',
    },
  ];

  return (
    <section className={styles.scrollWrapper}>
      <div ref={containerRef} className={styles.horizontalScroll}>
        {projects.map((project, i) => (
          <div
            key={project.slug}
            className={styles.card}
            ref={(el) => (cardsRef.current[i] = el)}
            onClick={() => router.push(`/projects/${project.slug}`)}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
