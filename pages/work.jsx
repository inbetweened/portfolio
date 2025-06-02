import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from '../styles/Work.module.css';
import Navbar from '../components/Navbar';
import SeoHead from '../components/SeoHead';

export default function WorkPage() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
          },
        }
      );
    });
  }, []);

  const cards = [
    {
      title: 'Project One',
      image: '/project1.jpg',
      description: 'A creative project exploring dynamic visuals and interaction.'
    },
    {
      title: 'Project Two',
      image: '/project2.jpg',
      description: 'An experimental build focusing on animation and style.'
    },
    {
      title: 'Project Three',
      image: '/project3.jpg',
      description: 'Merging storytelling and clean UI with motion.'
    }
  ];

  return (
    <>
      <SeoHead title="Work – Daniel" description="A showcase of past creative projects and designs." />
      <Navbar />
      <section className={styles.horizontalScroll}>
        <div className={styles.scrollContainer}>
          {cards.map((card, index) => (
            <div
              key={index}
              className={styles.card}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <img src={card.image} alt={card.title} className={styles.image} />
              <div className={styles.textContainer}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
