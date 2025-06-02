import Head from 'next/head';
import { useRef } from 'react';
import Navbar from '../components/Navbar';

export default function Home() {
  const navbarRef = useRef();

  return (
    <>
      <Head>
        <title>Dani</title>
      </Head>

      <Navbar ref={navbarRef} />

      <main className="flex flex-col items-center justify-center min-h-screen text-center p-6">
        <h1 className="text-5xl font-bold mb-6">Willkommen auf meinem Portfolio</h1>
        <p className="mb-10 text-lg">Ich bin Dani – Designer, Animator, Developer.</p>
        <button
          className="px-6 py-3 bg-black text-white rounded-full text-lg hover:scale-105 transition"
          onClick={() => navbarRef.current?.openMenu()}
        >
          Entdecke mehr →
        </button>
      </main>
    </>
  );
}
