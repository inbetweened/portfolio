// pages/work.jsx

import { useRef } from 'react';
import SeoHead from '../components/SeoHead';
import Navbar from '../components/Navbar';
import Work from '../components/Work';

export default function WorkPage() {
  const cardsRef = useRef([]);

  return (
    <>
      <SeoHead
        title="My Work – Daniel"
        description="A selection of my design and animation work."
      />
      <Navbar />
      <Work cardsRef={cardsRef} />
    </>
  );
}
