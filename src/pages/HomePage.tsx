// src/pages/HomePage.tsx
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// Component Imports
import PortfolioCard from '../components/PortfolioCard';
import SkillsCard from '../components/SkillsCard';
import EducationCard from '../components/EducationCard';
import ContactCard from '../components/ContactCard';
import ExperienceCard from '../components/ExperienceCard';
import InterestsCard from '../components/InterestsCard';

// Data for icons
const iconUrls = {
  javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  cplusplus: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  react: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  tailwind: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  node: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  express: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  figma: 'https://api.iconify.design/logos/figma.svg',
  photoshop: 'https://api.iconify.design/logos/adobe-photoshop.svg',
  age: 'https://api.iconify.design/material-symbols/calendar-today-outline.svg',
  email: 'https://api.iconify.design/material-symbols/mail-outline.svg',
  phone: 'https://api.iconify.design/material-symbols/phone-in-talk-outline.svg',
  indiaFlag: 'https://api.iconify.design/twemoji/flag-india.svg',
  gaming: 'https://api.iconify.design/fluent-emoji-flat/video-game.svg',
  traveling: 'https://api.iconify.design/fluent-emoji-flat/airplane.svg',
  cycling: 'https://api.iconify.design/fluent-emoji-flat/bicycle.svg',
  coding: 'https://api.iconify.design/fluent-emoji-flat/laptop.svg',
  photography: 'https://api.iconify.design/fluent-emoji-flat/camera-with-flash.svg',
  music: 'https://api.iconify.design/fluent-emoji-flat/guitar.svg',
  movies: 'https://api.iconify.design/fluent-emoji-flat/clapper-board.svg',
  reading: 'https://api.iconify.design/fluent-emoji-flat/open-book.svg',
};

// Data for grid items with responsive colSpans
const initialPortfolioItems = [
  { 
    id: 1, 
    title: "Deepjyoti Das", 
    description: [ 
      "Developer based in Delhi, India, focused on creating user-centric web applications.", 
      "Third-year Computer Science student at GGSIPU with hands-on experience in MERN stack.", 
      "Web & open-source enthusiast, learning DSA in C++ and diving into UI/UX design.",  
    ],
    tag: "About Myself", 
    color: "bg-[#FBF2D7]", 
    colSpan: "sm:col-span-2 lg:col-span-3", 
    rowSpan: "lg:row-span-1", 
    profileImage: "/123.jpg", 
  },
  { 
    id: 2, 
    title: "Education", 
    tag: "Academics", 
    color: "bg-[#DDEADF]", 
    colSpan: "sm:col-span-2 lg:col-span-2", 
    educationData: [ 
      { title: "B.Tech, CSE", details: "Guru Gobind Singh Indraprastha University, New Delhi", year: "2023-2027" }, 
      { title: "High School", details: "Kendriya Vidyalaya No.1, Assam", year: "2022" }, 
    ], 
  },
  { 
    id: 3, 
    title: "Skills", 
    tag: "My Stack", 
    color: "bg-[#FEE2D5]", 
    colSpan: "sm:col-span-2 lg:col-span-3", 
    rowSpan: "lg:row-span-2", 
    skillsData: [ { category: "Languages", items: [ { name: "JavaScript", icon: iconUrls.javascript }, { name: "C++", icon: iconUrls.cplusplus }, { name: "Python", icon: iconUrls.python }, ], }, { category: "Frontend", items: [ { name: "React", icon: iconUrls.react }, { name: "Tailwind", icon: iconUrls.tailwind }, { name: "HTML", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' }, { name: "CSS", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' }, ], }, { category: "Backend", items: [ { name: "Node.js", icon: iconUrls.node }, { name: "Express", icon: iconUrls.express }, ], }, { category: "Design & Tools", items: [ { name: "Figma", icon: iconUrls.figma }, { name: "Git", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }, ], }, ], 
  },
  { 
    id: 4, 
    title: "Interests", 
    tag: "Hobbies", 
    color: "bg-[#E4D7F0]", 
    colSpan: "sm:col-span-2 lg:col-span-2", 
    interestsData: [ { id: 'gaming', icon: iconUrls.gaming, text: "Gaming" }, { id: 'traveling', icon: iconUrls.traveling, text: "Traveling" }, { id: 'cycling', icon: iconUrls.cycling, text: "Coding" }, { id: 'photography', icon: iconUrls.photography, text: "Photography" }, { id: 'music', icon: iconUrls.music, text: "Music" }, { id: 'movies', icon: iconUrls.movies, text: "Reading" }, ], 
  },
  { 
    id: 5, 
    title: "I enjoy creating software solutions.", 
    description: "", 
    tag: "Passion", 
    color: "bg-[#F3DCE3]", 
    colSpan: "lg:col-span-2", 
  },
  { 
    id: 6, 
    title: "Experience", 
    tag: "Career", 
    color: "bg-[#DDEEFE]", 
    colSpan: "sm:col-span-2 lg:col-span-5", 
    experienceData: { left: [ { title: "Hackathon Project", subtitle: "GeeksforGeeks, Noida", year: "2024", details: [ "Developed 'Time Capsulator,' a full-stack MERN application.", "Engineered a seamless frontend-backend flow under deadlines.", ], }, { title: "UI/UX Lead", subtitle: "Robogyan Society, GGSIPU", year: "2024-Present", details: [ "Led all design initiatives for events.", "Mentored junior members in design principles.", ], }, ], right: [ { title: "Personal Projects", subtitle: "Self-Directed", year: "Ongoing", details: [ "Built multiple interactive web apps.", "Applied skills in HTML, CSS, and JavaScript.", ], }, { title: "Design Participant", subtitle: "Pixel Flow 2.0, IIIT Bangalore", year: "2024", details: [ "Gained hands-on experience in UI/UX challenges.", "Enhanced skills in design workflows.", ], }, ], }, 
  },
  { 
    id: 7, 
    title: "Contact Details", 
    tag: "Information", 
    color: "bg-[#F0FFF4]", 
    colSpan: "sm:col-span-2 lg:col-span-5", 
    contactItems: [ { id: 'email', icon: iconUrls.email, text: "deepjyoti478@gmail.com", link: "mailto:deepjyoti478@gmail.com" }, { id: 'phone', icon: iconUrls.phone, text: "+91 9899052055", link: "tel:+918822558069" }, { id: 'location', icon: iconUrls.indiaFlag, text: "India" }, ], 
  },
];

const HomePage: React.FC = () => {
  const [items, setItems] = useState(initialPortfolioItems);
  const gridContainerRef = useRef(null);

  // State and effect to detect touch device for disabling drag on mobile
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkForTouch = () => window.matchMedia('(pointer: coarse)').matches;
    setIsTouchDevice(checkForTouch());
  }, []);

  // Function to handle reordering
  const handleMove = (itemId: number, direction: 'up' | 'down') => {
    const index = items.findIndex((item) => item.id === itemId);
    if (index === -1) return;
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= items.length) return;
    const newItems = [...items];
    [newItems[index], newItems[newIndex]] = [newItems[newIndex], newItems[index]];
    setItems(newItems);
  };

  // Function to render the correct card component
  const renderCard = (item: any) => {
    if (item.skillsData) return <SkillsCard {...item} />;
    if (item.educationData) return <EducationCard {...item} />;
    if (item.experienceData) return <ExperienceCard {...item} />;
    if (item.interestsData) return <InterestsCard {...item} />;
    if (item.contactItems) return <ContactCard {...item} />;
    return <PortfolioCard {...item} />;
  };

  return (
    <div className="relative z-10 mx-auto max-w-[1000px] px-4 py-24 sm:px-6 lg:px-8">
      <div ref={gridContainerRef} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className={`relative ${item.colSpan || ''} ${item.rowSpan || ''}`}
            layout
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            
            // This is the fix: Only enable drag on non-touch devices
            drag={!isTouchDevice} 
            
            dragConstraints={gridContainerRef}
            dragSnapToOrigin
            whileDrag={{ scale: 1.05, zIndex: 50, cursor: 'grabbing' }}
          >
            {renderCard(item)}
            
            <div className="absolute top-2 right-2 z-20 flex space-x-1 opacity-0 transition-opacity hover:opacity-100 focus-within:opacity-100">
              <button
                onClick={() => handleMove(item.id, 'up')}
                disabled={index === 0}
                className="rounded-full bg-black/40 p-1 text-white backdrop-blur-sm transition-colors hover:bg-black/60 disabled:opacity-30"
                aria-label="Move item up"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
              </button>
              <button
                onClick={() => handleMove(item.id, 'down')}
                disabled={index === items.length - 1}
                className="rounded-full bg-black/40 p-1 text-white backdrop-blur-sm transition-colors hover:bg-black/60 disabled:opacity-30"
                aria-label="Move item down"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
