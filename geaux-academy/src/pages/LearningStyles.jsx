// src/pages/LearningStyles.jsx
import { motion } from 'framer-motion';

const LearningStyles = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Learning Styles</h1>
      {/* Add your learning styles page content here */}
    </motion.div>
  );
};

export default LearningStyles;