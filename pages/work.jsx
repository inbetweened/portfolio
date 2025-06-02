import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from '../styles/Work.module.css';

export default function Work() {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.6,
        ease: 'power3.out',
      }
    );
  }, []);

  const projects = [
    {
      title: 'Project One',
      description: 'A bold redesign of a portfolio site.',
      link: '/projects/project-one',
    },
    {
      title: 'Project Two',
      description: 'An animated product launch landing page.',
      link: '/projects/project-two',
    },
    {
      title: 'Project Three',
      description: 'Interactive showcase for a digital artist.',
      link: '/projects/project-three',
    },
  ];

  return (
    <section id="work" className={styles.workSection}>
      <h2 className={styles.heading}>My Work</h2>
      <div className={styles.cardScrollContainer}>
        <div className={styles.cardRow}>
          {projects.map((project, index) => (
            <a
              href={project.link}
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={styles.card}
            >
              <div className={styles.cardImage}></div>
              <div className={styles.cardContent}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
