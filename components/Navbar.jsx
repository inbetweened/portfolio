import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import AnimatedLink from './AnimatedLink';
import styles from '../styles/Navbar.module.css';
import { motion } from 'framer-motion'; // NEU

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const burgerLines = useRef([]);
  const linksRef = useRef([]);

  useEffect(() => {
    if (menuOpen) {
      gsap.to(menuRef.current, { x: 0, duration: 0.5, ease: 'power3.out' });
      gsap.fromTo(
        linksRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: 'power3.out',
          delay: 0.2,
        }
      );
      gsap.to(burgerLines.current[0], { rotate: 45, y: 8, duration: 0.3 });
      gsap.to(burgerLines.current[1], { opacity: 0, duration: 0.3 });
      gsap.to(burgerLines.current[2], { rotate: -45, y: -8, duration: 0.3 });
    } else {
      gsap.to(menuRef.current, { x: '-100%', duration: 0.4, ease: 'power2.in' });
      gsap.to(burgerLines.current[0], { rotate: 0, y: 0, duration: 0.3 });
      gsap.to(burgerLines.current[1], { opacity: 1, duration: 0.3 });
      gsap.to(burgerLines.current[2], { rotate: 0, y: 0, duration: 0.3 });
    }
  }, [menuOpen]);

  const navItems = [
    { label: 'Work', path: '/work' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <nav className={styles.nav}>
        <a href="/" className={styles.logo}>Dani</a>
        <div className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
          <div ref={(el) => (burgerLines.current[0] = el)} />
          <div ref={(el) => (burgerLines.current[1] = el)} />
          <div ref={(el) => (burgerLines.current[2] = el)} />
        </div>
      </nav>

      {/* 🔥 Animierte Linie unter dem Navbar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          height: '2px',
          background: '#111',
          transformOrigin: 'left',
          margin: '4px 1rem 0 1rem'
        }}
      />

      <div ref={menuRef} className={styles.menu}>
        <ul>
          {navItems.map((item, index) => (
            <li key={item.label} ref={(el) => (linksRef.current[index] = el)}>
              <AnimatedLink href={item.path}>
                {item.label}
              </AnimatedLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
