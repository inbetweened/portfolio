import Navbar from '@/components/Navbar';

export default function About() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Navbar />
      <main className="p-6 pt-24 text-center">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p>Hi, I’m Daniel. I create motion design and animated experiences that breathe life into digital storytelling.</p>
      </main>
    </div>
  );
}
