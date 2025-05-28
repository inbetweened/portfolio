import { useRef } from 'react';
import gsap from 'gsap';
import styles from '../styles/AnimatedLink.module.css';

export default function AnimatedLink({ href, children }) {
  const linkRef = useRef(null);

  const handleEnter = () => {
    gsap.to(linkRef.current, { y: -3, duration: 0.3, ease: 'power3.out' });
  };

  const handleLeave = () => {
    gsap.to(linkRef.current, { y: 0, duration: 0.3, ease: 'power3.out' });
  };

  return (
    <a
      href={href}
      className={styles.link}
      ref={linkRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {children}
    </a>
  );
}
