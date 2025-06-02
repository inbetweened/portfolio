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

      {/* Hintergrund-Welle */}
      <svg
        className={styles.wave}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="red"
          d="M0,160L40,160C80,160,160,160,240,165.3C320,171,400,181,480,181.3C560,181,640,171,720,149.3C800,128,880,96,960,106.7C1040,117,1120,171,1200,192C1280,213,1360,203,1400,197.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}
