import React from 'react';
import { motion } from 'framer-motion';

export const NeonButton = ({ children, variant = 'primary', fullWidth, ...props }) => {
  const baseStyles = "relative px-6 py-2 rounded-lg font-medium transition-all duration-200";
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 shadow-lg shadow-blue-500/50",
    outline: "bg-transparent text-blue-400 border border-blue-500/50 hover:border-blue-400"
  };
  
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 
                    hover:opacity-20 transition-opacity duration-200" />
    </motion.button>
  );
};