import { motion } from 'framer-motion';

export default function Hero({ navbarRef }) {
  return (
    <motion.section
      className="flex flex-col items-center justify-center h-screen text-center px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl sm:text-6xl font-bold mb-4">Creative Portfolio</h2>
      <p className="text-lg sm:text-xl max-w-xl mb-6">
        A showcase of my animation, design and development work.
      </p>
      <button
        onClick={() => navbarRef.current?.openMenu()}
        className="px-6 py-3 bg-black text-white rounded-full text-lg hover:scale-105 transition"
      >
        Entdecke mehr →
      </button>
    </motion.section>
  );
}
