import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import { AuthLayout } from './components/auth/AuthLayout';
import { SignIn } from './components/auth/SignIn';
import { SignUp } from './components/auth/SignUp';
import { ForgotPassword } from './components/auth/ForgotPassword';
import { AskAI } from './components/features/AskAI';
import { StudyReminder } from './components/features/StudyReminder';
import PrivateRoute from './components/auth/PrivateRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={
            <AuthLayout>
              <SignIn />
            </AuthLayout>
          } />
          <Route path="/signup" element={
            <AuthLayout>
              <SignUp />
            </AuthLayout>
          } />
          <Route path="/forgot-password" element={
            <AuthLayout>
              <ForgotPassword />
            </AuthLayout>
          } />
          <Route path="/ask-ai" element={
            <PrivateRoute>
              <AskAI />
            </PrivateRoute>
          } />
          <Route path="/reminders" element={
            <PrivateRoute>
              <StudyReminder />
            </PrivateRoute>
          } />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;