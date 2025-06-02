import Head from 'next/head';
import { useRef, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import gsap from 'gsap';

export default function Home() {
  const discoverBtnRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      discoverBtnRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, delay: 0.6, duration: 0.8, ease: 'power3.out' }
    );
  }, []);

  return (
    <>
      <Head>
        <title>Dani</title>
      </Head>

      <Navbar menuOpenExternally={openMenu} setMenuOpenExternally={setOpenMenu} />

      <main className="flex flex-col items-center justify-center h-screen text-center px-6">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4">Hey, I’m Dani</h1>
        <p className="text-lg sm:text-xl max-w-xl mb-6">A creative mind focused on motion, design and bold experiences.</p>
        
        <button
          ref={discoverBtnRef}
          onClick={() => setOpenMenu(true)}
          className="mt-4 px-6 py-3 bg-black text-white rounded-full shadow-md hover:scale-105 transition-transform"
        >
          Entdecke mehr
        </button>
      </main>
    </>
  );
}
