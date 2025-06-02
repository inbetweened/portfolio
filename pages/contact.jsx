import Navbar from '../components/Navbar';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Navbar />
      <main className="p-6 pt-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact</h1>
        <p>Reach out at <a href="mailto:hi@bydaniel.co" className="underline">hi@bydaniel.co</a></p>
      </main>
    </div>
  );
}
