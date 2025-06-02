import { motion } from 'framer-motion';
import styles from '../styles/Hero.module.css';

export default function Hero({ navbarRef }) {
  return (
    <section className={styles.hero}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={styles.heroContent}
      >
        <h2>Dani</h2>
        <p>A showcase of my animation, design and development work.</p>
        <button onClick={() => navbarRef?.current?.openMenu()}>
          Entdecke mehr →
        </button>
      </motion.div>
    </section>
  );
}
