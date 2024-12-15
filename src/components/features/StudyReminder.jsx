import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { NeonButton } from '../ui/NeonButton';
import toast from 'react-hot-toast';

export const StudyReminder = () => {
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState({
    title: '',
    date: '',
    time: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Notification.permission === 'granted') {
      const reminderTime = new Date(`${newReminder.date} ${newReminder.time}`);
      const now = new Date();
      
      if (reminderTime > now) {
        const timeUntilReminder = reminderTime.getTime() - now.getTime();
        
        setTimeout(() => {
          new Notification('Study Reminder', {
            body: newReminder.title,
            icon: '/path-to-your-icon.png'
          });
        }, timeUntilReminder);

        setReminders([...reminders, { ...newReminder, id: Date.now() }]);
        setNewReminder({ title: '', date: '', time: '', description: '' });
        toast.success('Reminder set successfully!');
      }
    } else {
      Notification.requestPermission();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-blue-500/20"
      >
        <h2 className="text-3xl font-bold text-blue-400 mb-8">Study Reminders</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6 mb-8">
          <input
            type="text"
            placeholder="Reminder Title"
            value={newReminder.title}
            onChange={(e) => setNewReminder({ ...newReminder, title: e.target.value })}
            className="w-full bg-gray-700/50 border border-blue-500/20 rounded-lg p-3 text-white"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="date"
              value={newReminder.date}
              onChange={(e) => setNewReminder({ ...newReminder, date: e.target.value })}
              className="bg-gray-700/50 border border-blue-500/20 rounded-lg p-3 text-white"
            />
            <input
              type="time"
              value={newReminder.time}
              onChange={(e) => setNewReminder({ ...newReminder, time: e.target.value })}
              className="bg-gray-700/50 border border-blue-500/20 rounded-lg p-3 text-white"
            />
          </div>
          <textarea
            placeholder="Description"
            value={newReminder.description}
            onChange={(e) => setNewReminder({ ...newReminder, description: e.target.value })}
            className="w-full h-32 bg-gray-700/50 border border-blue-500/20 rounded-lg p-3 text-white"
          />
          <NeonButton type="submit" fullWidth>Set Reminder</NeonButton>
        </form>

        <div className="space-y-4">
          {reminders.map((reminder) => (
            <motion.div
              key={reminder.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-4 bg-gray-700/30 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-blue-400">{reminder.title}</h3>
              <p className="text-gray-300">
                {format(new Date(`${reminder.date} ${reminder.time}`), 'PPpp')}
              </p>
              <p className="text-gray-400 mt-2">{reminder.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};