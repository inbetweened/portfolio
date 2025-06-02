import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from '../styles/Work.module.css';
import Image from 'next/image';

export default function WorkPage() {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      }
    );
  }, []);

  const projects = [
    {
      title: 'Project One',
      description: 'Creative campaign design',
      image: '/project1.jpg',
      link: '/projects/one',
    },
    {
      title: 'Project Two',
      description: 'Web animation showcase',
      image: '/project2.jpg',
      link: '/projects/two',
    },
    {
      title: 'Project Three',
      description: 'Interactive UI concept',
      image: '/project3.jpg',
      link: '/projects/three',
    },
  ];

  return (
    <section className={styles.workWrapper}>
      <h2 className={styles.heading}>My Work</h2>
      <div className={styles.horizontalScroll}>
        {projects.map((project, index) => (
          <a
            key={project.title}
            href={project.link}
            className={styles.card}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={570}
              height={320}
              className={styles.image}
            />
            <div className={styles.cardContent}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
