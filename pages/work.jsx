import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from '../styles/Work.module.css';
import Navbar from '../components/Navbar';
import SeoHead from '../components/SeoHead';

gsap.registerPlugin(ScrollTrigger);

export default function WorkPage() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(card,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: card,
            start: 'left center',
            horizontal: true,
            scroller: '.scrollContainer',
          },
          duration: 0.8,
          ease: 'power3.out',
        });
    });
  }, []);

  const projects = [
    { title: 'Projekt A', image: '/images/project-a.jpg' },
    { title: 'Projekt B', image: '/images/project-b.jpg' },
    { title: 'Projekt C', image: '/images/project-c.jpg' },
    { title: 'Projekt D', image: '/images/project-d.jpg' },
  ];

  return (
    <>
      <SeoHead title="Work – Daniel" description="My selected works and projects." />
      <Navbar />
      <section className={styles.workSection}>
        <div className={styles.scrollContainer}>
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
