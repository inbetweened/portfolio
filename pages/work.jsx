import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../styles/Work.module.css';
import Navbar from '../components/Navbar';
import SeoHead from '../components/SeoHead';

gsap.registerPlugin(ScrollTrigger);

export default function WorkPage() {
  const cardsRef = useRef([]);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // GSAP animation for each card
    if (cardsRef.current.length > 0) {
      gsap.fromTo(
        cardsRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: scrollContainerRef.current,
            start: 'top 80%',
            scrub: false,
          },
        }
      );
    }

    // Horizontal scroll with mousewheel
    const container = scrollContainerRef.current;
    const handleWheel = (e) => {
      if (container) {
        e.preventDefault();
        container.scrollLeft += e.deltaY * 2.5;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  const projects = [
    { title: 'Projekt A', image: 'https://via.placeholder.com/570x320?text=Projekt+A' },
    { title: 'Projekt B', image: 'https://via.placeholder.com/570x320?text=Projekt+B' },
    { title: 'Projekt C', image: 'https://via.placeholder.com/570x320?text=Projekt+C' },
    { title: 'Projekt D', image: 'https://via.placeholder.com/570x320?text=Projekt+D' },
  ];

  return (
    <>
      <SeoHead title="Work – Daniel" description="My selected works and projects." />
      <Navbar />
      <section className={styles.workSection}>
        <div className={styles.scrollContainer} ref={scrollContainerRef}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={styles.card}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <img src={project.image} alt={project.title} className={styles.cardImage} />
              <h3 className={styles.cardTitle}>{project.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
