import styles from '../styles/Work.module.css';

export default function Work({ cardsRef }) {
  return (
    <section id="work" className={styles.work}>
      <h2 className={styles.heading}>Work</h2>
      <div className={styles.grid}>
        {[0, 1, 2].map((_, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className={styles.card}
          />
        ))}
      </div>
    </section>
  );
}
