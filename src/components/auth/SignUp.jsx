import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { NeonButton } from '../ui/NeonButton';
import { InputField } from '../ui/InputField';

export const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign up logic here
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
        Create Account
      </motion.h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField
          type="text"
          label="Full Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

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

        <InputField
          type="password"
          label="Confirm Password"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        />

        <NeonButton type="submit" fullWidth>
          Sign Up
        </NeonButton>

        <p className="text-center text-gray-400 mt-4">
          Already have an account?{' '}
          <Link to="/signin" className="text-blue-400 hover:text-blue-300">
            Sign In
          </Link>
        </p>
      </form>
    </motion.div>
  );
};