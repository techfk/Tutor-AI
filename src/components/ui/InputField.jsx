import React from 'react';
import { motion } from 'framer-motion';

export const InputField = ({ label, type, value, onChange, error }) => {
  return (
    <div className="relative">
      <motion.label
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="block text-sm font-medium text-gray-300 mb-1"
      >
        {label}
      </motion.label>
      <motion.input
        whileFocus={{ scale: 1.02 }}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 bg-gray-700/50 border border-blue-500/20 rounded-lg 
                 text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                 focus:ring-blue-500/50 focus:border-transparent transition-all duration-200"
      />
      {error && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-400 text-sm mt-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};