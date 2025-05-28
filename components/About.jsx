import styles from '../styles/About.module.css';

export default function About({ aboutRef }) {
  return (
    <section id="aboutme" ref={aboutRef} className={styles.about}>
      <h2 className={styles.heading}>About Me</h2>
      <p className={styles.text}>
        Hallo ich bin Dani
      </p>
    </section>
  );
}
