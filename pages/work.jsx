import SeoHead from '../components/SeoHead';
import Navbar from '../components/Navbar';
import Work from '../components/Work'; // ⬅️ das ist der richtige Import!

export default function WorkPage() {
  return (
    <>
      <SeoHead title="Work – Daniel" description="A selection of my creative projects." />
      <Navbar />
      <Work />
    </>
  );
}
