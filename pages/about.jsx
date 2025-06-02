import SeoHead from '../components/SeoHead';
import Navbar from '../components/Navbar';
import About from '../components/About';

export default function AboutPage() {
  return (
    <>
      <SeoHead title="About Me – Daniel" description="Who I am and what drives my creative work." />
      <Navbar />
      <About />
    </>
  );
}
