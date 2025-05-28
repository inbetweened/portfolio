// Projektstruktur: 
// pages/index.jsx
// components/Navbar.jsx, Hero.jsx, Work.jsx, About.jsx, Contact.jsx
// styles/globals.css
// animations/gsapAnimations.js

// Datei: pages/index.jsx
import Head from 'next/head';
import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Work from '../components/Work';
import About from '../components/About';
import Contact from '../components/Contact';
import { animateCards, parallaxEffects } from '../animations/gsapAnimations';

export default function Home() {
  const cardsRef = useRef([]);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    animateCards(cardsRef.current);
    parallaxEffects(aboutRef.current, contactRef.current);
  }, []);

  return (
    <>
      <Head>
        <title>Dani</title>
      </Head>
      <Navbar />
      <main>
        <Hero />
        <Work cardsRef={cardsRef} />
        <About aboutRef={aboutRef} />
        <Contact contactRef={contactRef} />
      </main>
    </>
  );
}
