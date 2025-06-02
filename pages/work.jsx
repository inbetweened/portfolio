// pages/work.jsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import SeoHead from '../components/SeoHead';
import styles from '../styles/WorkPage.module.css';
import { useRouter } from 'next/router';

if (typeof window !== 'undefined' && gsap && ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    title: 'Projekt Eins',
    description: 'Kurzer Text über Projekt Eins.',
    slug: 'projekt-eins',
    color: '#FFC6C7'
  },
  {
    title: 'Projekt Zwei',
    description: 'Kurzer Text über Projekt Zwei.',
    slug: 'projekt-zwei',
    color: '#C6F1FF'
  },
  {
    title: 'Projekt Drei',
    description: 'Kurzer Text über Projekt Drei.',
    slug: 'projekt-drei',
    color: '#D4FFC6'
  }
];

export default function WorkPage() {
  const containerRef = useRef(null);
  const panelsRef = useRef([]);
  const router = useRouter();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(panelsRef.current, {
        xPercent: -100 * (projects.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (projects.length - 1),
          end: () => `+=${containerRef.current.offsetWidth}`
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <SeoHead title="Work – Daniel" description="Showcase meiner Projekte" />
      <Navbar />
      <section className={styles.container} ref={containerRef}>
        <div className={styles.inner}>
          {projects.map((project, i) => (
            <div
              key={i}
              ref={(el) => (panelsRef.current[i] = el)}
              className={styles.panel}
              style={{ backgroundColor: project.color }}
              onClick={() => router.push(`/projects/${project.slug}`)}
            >
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
