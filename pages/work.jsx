import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Navbar from '../components/Navbar';
import SeoHead from '../components/SeoHead';
import styles from '../styles/Work.module.css';

export default function WorkPage() {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <>
      <SeoHead title="Work – Daniel" description="Selected creative projects by Daniel." />
      <Navbar />
      <section className={styles.work}>
        <h2 className={styles.heading}>Selected Projects</h2>
        <div className={styles.container}>
          {[1, 2, 3].map((i, index) => (
            <a key={i} href={`/projects/project-${i}`} className={styles.card} ref={(el) => (cardsRef.current[index] = el)}>
              <div className={styles.imagePlaceholder}>
                <p>Project {i}</p>
              </div>
              <div className={styles.caption}>Short description of Project {i}</div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
