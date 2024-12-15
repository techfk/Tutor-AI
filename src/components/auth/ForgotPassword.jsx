import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { resetPassword } from '../../services/firebase';
import { InputField } from '../ui/InputField';
import { NeonButton } from '../ui/NeonButton';
import toast from 'react-hot-toast';

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await resetPassword(email);
    
    if (error) {
      toast.error(error);
    } else {
      toast.success('Password reset email sent!');
      navigate('/signin');
    }
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-blue-500/20"
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">Reset Password</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <NeonButton type="submit" fullWidth>Send Reset Link</NeonButton>
        <button
          onClick={() => navigate('/signin')}
          className="w-full text-blue-400 hover:text-blue-300 text-sm mt-4"
        >
          Back to Sign In
        </button>
      </form>
    </motion.div>
  );
};