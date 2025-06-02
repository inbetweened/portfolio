import styles from '../styles/Contact.module.css';

export default function Contact({ contactRef }) {
  return (
    <section id="contact" ref={contactRef} className={styles.contact}>
      <h2 className={styles.heading}>Contact</h2>
      <p className={styles.text}>
        Get in touch via <a href="mailto:hi@bydaniel.co">hi@bydaniel.co</a>
      </p>
    </section>
  );
}
