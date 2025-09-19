// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <div className="w-full min-h-screen bg-[#FAFAF6] pb-12 md:pb-24 relative overflow-hidden">
      <NavBar />
      <div className="bg-dots"></div>
      
      {/* --- IMPROVEMENT --- */}
      {/* This ensures all your pages render on top of the dotted background */}
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;