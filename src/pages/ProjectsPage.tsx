// src/pages/ProjectsPage.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';

// --- Project Data (remains the same) ---
const projects = [
  {
    id: 1,
    title: "TodoApp",
    description: "A Todo application built with React.js to manage daily tasks. Includes features like adding, deleting, and marking tasks as completed, with state management using React hooks and local storage for persistence.",
    image: "/todoapp.png",
    tech: ["React"],
    liveUrl: "https://todo-app-delta-dusky.vercel.app/",
    githubUrl: "https://github.com/Deepjyoti78/TodoApp",
    mainCardBg: "#FFF5D6", 
  },
  {
    id: 2,
    title: "Password Generator",
    description: "A password generator built with React.js that allows users to create strong and customizable passwords by selecting length and character types (uppercase, lowercase, numbers, symbols).",
    image: "/passwordgenerator.png",
    tech: ["React"],
    liveUrl: "https://passwordgeneratordeep.vercel.app/",
    githubUrl: "https://github.com/Deepjyoti78/passwordGenerator",
    mainCardBg: "#F1F7FE",
  },
  {
    id: 3,
    title: "Currency Converter",
    description: "A currency converter built with React.js that allows users to convert values between different currencies using real-time exchange rates.",
    image: "/currency.png",
    tech: ["HTML", "CSS", "JavaScript", "DOM"],
    liveUrl: "#",
    githubUrl: "#",
    mainCardBg: "#E0F2F1",
  },
];

// --- Reusable Motion Card Wrapper ---
const MotionCard = ({ children, className, bgColor }: { children: React.ReactNode; className?: string; bgColor?: string }) => (
  <motion.div
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className={`p-5 rounded-2xl border border-black/10 card-neu-shadow relative ${className}`}
    style={{ backgroundColor: bgColor || '#FFFFFF', '--card-bg-hex': bgColor || '#FFFFFF' } as React.CSSProperties}
  >
    {children}
  </motion.div>
);

const ProjectsPage: React.FC = () => {
  return (
    <div>
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        <div className="space-y-12">
          {projects.map(project => (
            // --- CHANGE: Simplified the grid from 12 to 10 columns ---
            <div key={project.id} className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-stretch">
              
              {/* --- Main Project Card --- */}
              {/* --- CHANGE: Removed the starting offset --- */}
              <div className="lg:col-span-6">
                <MotionCard className="overflow-hidden h-full flex flex-col" bgColor={project.mainCardBg}>
                    <div className="w-full rounded-lg border border-black/10 overflow-hidden mb-4 flex-shrink-0">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-64 object-cover object-top"
                        />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                    
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map(t => (
                            <span key={t} className="bg-white/60 backdrop-blur-sm text-slate-800 text-xs font-medium px-3 py-1 rounded-full border border-black/10">
                                {t}
                            </span>
                        ))}
                    </div>
                </MotionCard>
              </div>

              {/* --- Side Cards (Description & Links) --- */}
              <div className="lg:col-span-4 flex flex-col gap-5">
                
                {/* Description Card */}
                <MotionCard bgColor="#E4EFFF" className="flex-grow flex flex-col">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
                    Project Overview
                  </span>
                  <p className="text-slate-700 text-base leading-relaxed">
                    {project.description}
                  </p>
                </MotionCard>
                
                {/* Live Preview Link Card */}
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="block p-4 rounded-2xl border border-black/10 card-neu-shadow relative"
                  style={{ backgroundColor: '#F0FFF4', '--card-bg-hex': '#F0FFF4' } as React.CSSProperties}
                >
                    <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-slate-800">Live Preview</span>
                        <div className="bg-black/5 p-2 rounded-full">
                            <ArrowUpRight className="h-5 w-5 text-slate-600" />
                        </div>
                    </div>
                </motion.a>
                
                {/* GitHub Link Card */}
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="block p-4 rounded-2xl border border-black/10 card-neu-shadow relative"
                  style={{ backgroundColor: '#FEE2E2', '--card-bg-hex': '#FEE2E2' } as React.CSSProperties}
                >
                    <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-slate-800">GitHub Repo</span>
                        <div className="bg-black/5 p-2 rounded-full">
                            <Github className="h-5 w-5 text-slate-600" />
                        </div>
                    </div>
                </motion.a>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default ProjectsPage;