import React from 'react';
// REMOVE BrowserRouter and Router import here.
// Only keep Routes and Route for defining your application's routes.
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AgenticWorkflowsPage from './pages/services/AgenticWorkflowsPage';
import AIEducationPage from './pages/services/AIEducationPage';
import MisinformationCombatPage from './pages/services/MisinformationCombatPage';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services/agentic-workflows" element={<AgenticWorkflowsPage />} />
        <Route path="/services/ai-education" element={<AIEducationPage />} />
        <Route path="/services/misinformation-combat" element={<MisinformationCombatPage />} />
      </Routes>
    </div>
  );
}

export default App;