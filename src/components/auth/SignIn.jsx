import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { NeonButton } from '../ui/NeonButton';
import { InputField } from '../ui/InputField';

export const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in logic here
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-blue-500/20"
    >
      <motion.h2 
        className="text-3xl font-bold text-center mb-8 text-blue-400"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
      >
        Sign In
      </motion.h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField
          type="email"
          label="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <InputField
          type="password"
          label="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />

        <NeonButton type="submit" fullWidth>
          Sign In
        </NeonButton>

        <div className="flex items-center justify-between mt-4">
          <Link to="/forgot-password" className="text-sm text-blue-400 hover:text-blue-300">
            Forgot Password?
          </Link>
          <Link to="/signup" className="text-sm text-blue-400 hover:text-blue-300">
            Create Account
          </Link>
        </div>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-600"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-800 text-gray-400">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <NeonButton variant="outline" onClick={() => {}}>
            Google
          </NeonButton>
          <NeonButton variant="outline" onClick={() => {}}>
            GitHub
          </NeonButton>
        </div>
      </form>
    </motion.div>
  );
};