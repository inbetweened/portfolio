import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, scale: 0.95, y: 50 },
      { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    );
  }, []);

  return (
    <section ref={heroRef} className={styles.hero}>
      <h1 className={styles.title}>Hello World!</h1>
      <p className={styles.subtitle}>
        Subtitle smth smth
      </p>
    </section>
  );
}
