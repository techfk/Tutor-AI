import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getGeminiResponse } from '../../services/gemini';
import { NeonButton } from '../ui/NeonButton';

export const AskAI = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const answer = await getGeminiResponse(question);
      setResponse(answer);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-blue-500/20"
      >
        <h2 className="text-3xl font-bold text-blue-400 mb-8">Ask AI Tutor</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full h-32 bg-gray-700/50 border border-blue-500/20 rounded-lg p-4 text-white"
            placeholder="Ask your question here..."
          />
          <NeonButton type="submit" fullWidth disabled={loading}>
            {loading ? 'Thinking...' : 'Ask Question'}
          </NeonButton>
        </form>
        {response && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 p-6 bg-gray-700/30 rounded-lg"
          >
            <pre className="text-white whitespace-pre-wrap">{response}</pre>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};