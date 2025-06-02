import SeoHead from '../components/SeoHead';
import Navbar from '../components/Navbar';
import About from '../components/Work';

export default function AboutPage() {
  return (
    <>
      <SeoHead title="About Me – Daniel" description="Who I am and what drives my creative work." />
      <Navbar />
      <About />
    </>
  );
}
