import React from 'react';
import { AuthProvider } from './src/context/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './src/pages/Home';
import { Login } from './src/pages/Login';
import { Signup } from './src/pages/Signup';
import { Dashboard } from './src/pages/Dashboard';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="relative min-h-screen overflow-x-hidden bg-dark-bg selection:bg-brand-500/30 selection:text-brand-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>

          {/* ElevenLabs Chat Widget */}
          <elevenlabs-convai agent-id="agent_2501keft323ffdav0ef55zb60pcx"></elevenlabs-convai>
        </div>
      </Router>
    </AuthProvider>
  );
}