import React from "react";
import { motion } from "framer-motion";

// Variants for the parent and children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, // Delay each child item
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 2.0 },
  },
};

const RevealWrapper = ({ children, isStaggered = false, className = "" }) => {
  if (isStaggered) {
    return (
      <motion.div
        className={className}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        exit={{ opacity: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {Array.isArray(children) ? (
          children.map((child, index) => (
            <motion.div key={index} variants={childVariants}>
              {child}
            </motion.div>
          ))
        ) : (
          <motion.div variants={childVariants}>{children}</motion.div>
        )}
      </motion.div>
    );
  }

  // Default fade-in for non-staggered usage
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2.0 }}
      exit={{ opacity: 0 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default RevealWrapper;
