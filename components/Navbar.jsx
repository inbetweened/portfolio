import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import AnimatedLink from './AnimatedLink';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const burgerLines = useRef([]);
  const linksRef = useRef([]);

  useEffect(() => {
    if (menuOpen) {
      // Slide in menu
      gsap.to(menuRef.current, { x: 0, duration: 0.5, ease: 'power3.out' });

      // Animate links in
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

      // Animate burger to X
      gsap.to(burgerLines.current[0], { rotate: 45, y: 8, duration: 0.3 });
      gsap.to(burgerLines.current[1], { opacity: 0, duration: 0.3 });
      gsap.to(burgerLines.current[2], { rotate: -45, y: -8, duration: 0.3 });
    } else {
      // Slide out menu
      gsap.to(menuRef.current, { x: '-100%', duration: 0.4, ease: 'power2.in' });

      // Reset burger
      gsap.to(burgerLines.current[0], { rotate: 0, y: 0, duration: 0.3 });
      gsap.to(burgerLines.current[1], { opacity: 1, duration: 0.3 });
      gsap.to(burgerLines.current[2], { rotate: 0, y: 0, duration: 0.3 });
    }
  }, [menuOpen]);

  const navItems = [
    { name: 'Work', path: '/work' },
    { name: 'About Me', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          Dani
        </Link>
        <div className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
          <div ref={(el) => (burgerLines.current[0] = el)} />
          <div ref={(el) => (burgerLines.current[1] = el)} />
          <div ref={(el) => (burgerLines.current[2] = el)} />
        </div>
      </nav>

      <div ref={menuRef} className={styles.menu}>
        <ul>
          {navItems.map((item, index) => (
            <li key={item.name} ref={(el) => (linksRef.current[index] = el)}>
              <Link href={item.path} passHref>
                <AnimatedLink onClick={() => setMenuOpen(false)}>
                  {item.name}
                </AnimatedLink>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
