import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    if (menuOpen) {
      gsap.to(menuRef.current, { x: 0, duration: 0.5, ease: 'power3.out' });
      gsap.fromTo(
        linksRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, delay: 0.2, duration: 0.4 }
      );
    } else {
      gsap.to(menuRef.current, { x: '-100%', duration: 0.4, ease: 'power2.in' });
    }
  }, [menuOpen]);

  const navItems = ['Work', 'About Me', 'Contact'];

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>Daniel</div>
        <div className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
          <div />
          <div />
          <div />
        </div>
      </nav>

      <div ref={menuRef} className={styles.menu}>
        <ul>
          {navItems.map((item, index) => (
            <li
              key={item}
              ref={(el) => (linksRef.current[index] = el)}
              onClick={() => setMenuOpen(false)}
            >
              <a href={`#${item.replace(/ /g, '').toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
