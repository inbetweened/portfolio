import Head from 'next/head';
import { useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

export default function Home() {
  const navbarRef = useRef();

  return (
    <>
      <Head>
        <title>Dani</title>
      </Head>

      <Navbar ref={navbarRef} />
      <main>
        <Hero navbarRef={navbarRef} />
      </main>
    </>
  );
}
