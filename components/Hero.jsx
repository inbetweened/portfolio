import { motion } from 'framer-motion';

export default function Hero({ onCTA }) {
  return (
    <motion.section
      className="flex flex-col items-center justify-center min-h-screen text-center px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl sm:text-6xl font-bold mb-4">Creative Portfolio</h2>
      <p className="text-lg sm:text-xl max-w-xl">
        A showcase of my animation, design and development work.
      </p>
      <button
        className="mt-8 px-6 py-3 bg-black text-white rounded-xl shadow-lg hover:bg-gray-800 transition"
        onClick={onCTA}
      >
        Entdecke mehr
      </button>
    </motion.section>
  );
}
