// pages/work.jsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import styles from '../styles/Work.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function WorkPage() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // GSAP horizontales Scrollen
    const sections = gsap.utils.toArray('.workCard');
    const totalWidth = containerRef.current.scrollWidth;

    gsap.to(containerRef.current, {
      x: () => -(totalWidth - window.innerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: () => `+=${totalWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Card-Animationen
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(card, {
        opacity: 0,
        y: 50,
      }, {
        opacity: 1,
        y: 0,
        delay: i * 0.2,
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
        },
      });
    });

    return () => ScrollTrigger.kill();
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.scrollContainerOuter}>
        <div className={styles.scrollContainerInner} ref={containerRef}>
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className={`workCard ${styles.card}`}
              onClick={() => window.location.href = `/projects/project-${i}`}
            >
              <h3>Project {i}</h3>
              <p>Short description of project {i} here.</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
