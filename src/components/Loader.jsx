// components/Loader.jsx
import { motion } from 'framer-motion';

const Loader = ({ setLoading }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      onAnimationComplete={() => setLoading(false)}
      className="fixed inset-0 bg-gradient-to-br from-blue-600 to-purple-500 flex items-center justify-center"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="w-16 h-16 border-4 border-white rounded-full border-t-transparent"
      />
    </motion.div>
  );
};

export default Loader;