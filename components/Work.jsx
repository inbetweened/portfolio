import SeoHead from '../components/SeoHead';
import Navbar from '../components/Navbar';
import Work from '../components/Work';

export default function WorkPage() {
  return (
    <>
      <SeoHead title="Work – Daniel" description="A collection of my favorite projects and case studies." />
      <Navbar />
      <Work />
    </>
  );
}
