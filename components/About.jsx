import styles from '../styles/About.module.css';

export default function About({ aboutRef }) {
  return (
    <section id="aboutme" ref={aboutRef} className={styles.about}>
      <h2 className={styles.heading}>About Me</h2>
      <p className={styles.text}>
        I’m Daniel, a creative mind with a passion for animation, motion graphics
        and interactive design. I love creating dynamic, visual stories that feel
        alive.
      </p>
    </section>
  );
}
