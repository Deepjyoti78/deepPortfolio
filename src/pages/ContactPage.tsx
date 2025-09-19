// src/pages/ContactPage.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Copy } from 'lucide-react';

// --- Reusable Motion Card Component ---
const MotionCard = ({ children, className, bgColor }: { children: React.ReactNode; className?: string; bgColor?: string }) => (
  <motion.div
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className={`p-5 rounded-2xl border border-black/10 card-neu-shadow relative ${className}`}
    style={{ backgroundColor: bgColor || '#FFFFFF', '--card-bg-hex': bgColor || '#FFFFFF' } as React.CSSProperties}
  >
    {children}
  </motion.div>
);

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [result, setResult] = useState('');
  const [copyText, setCopyText] = useState('Copy');
  
  const myEmail = "deepjyoti478@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setCopyText('Copied!');
    setTimeout(() => setCopyText('Copy'), 2000);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formDataObject = new FormData(event.currentTarget);
    formDataObject.append("access_key", "YOUR_ACCESS_KEY_HERE"); // <-- PASTE YOUR WEB3FORMS KEY HERE

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataObject
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setResult(''), 5000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    // This parent div allows the main background from App.tsx to show through
    <div>
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">

          {/* --- Left Column: Contact Details --- */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            
            {/* Card 1: Email */}
            <MotionCard bgColor="#E4EFFF" className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
                Get in touch
              </span>
              <div className="flex justify-between items-start mb-3">
                  <div>
                      <h3 className="text-lg font-bold text-slate-800">Email</h3>
                      <p className="text-sm text-slate-600 break-all">{myEmail}</p>
                  </div>
                  <div className="bg-black/5 p-2 rounded-full">
                    <Mail className="w-5 h-5 text-slate-600 flex-shrink-0" />
                  </div>
              </div>
              <button 
                onClick={handleCopyEmail} 
                className="mt-auto w-full text-sm font-semibold bg-white/70 p-2 rounded-lg border border-black/10 hover:bg-white transition-colors flex items-center justify-center gap-2"
              >
                <Copy className="w-4 h-4" />
                {copyText}
              </button>
            </MotionCard>
            
            {/* Card 2: GitHub Link */}
            <motion.a
              href="https://github.com/Deepjyoti78"
              target="_blank"
              rel="noopener noreferrer"
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="block p-4 rounded-2xl border border-black/10 card-neu-shadow relative"
              style={{ backgroundColor: '#F0FFF4', '--card-bg-hex': '#F0FFF4' } as React.CSSProperties}
            >
                <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-slate-800">GitHub</span>
                    <div className="bg-black/5 p-2 rounded-full">
                        <Github className="h-5 w-5 text-slate-600" />
                    </div>
                </div>
            </motion.a>
            
            {/* Card 3: LinkedIn Link */}
            <motion.a
              href="https://www.linkedin.com/in/deep-jyoti-das-4148bb31a/"
              target="_blank"
              rel="noopener noreferrer"
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="block p-4 rounded-2xl border border-black/10 card-neu-shadow relative"
              style={{ backgroundColor: '#FEE2E2', '--card-bg-hex': '#FEE2E2' } as React.CSSProperties}
            >
                <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-slate-800">LinkedIn</span>
                    <div className="bg-black/5 p-2 rounded-full">
                        <Linkedin className="h-5 w-5 text-slate-600" />
                    </div>
                </div>
            </motion.a>
          </div>
          
          {/* --- Right Column: Contact Form --- */}
          <div className="lg:col-span-3">
            <MotionCard className="h-full flex flex-col" bgColor="#FFF5D6">
              <h2 className="text-2xl font-bold mb-4 text-slate-900">Send a Message</h2>
              <form onSubmit={onSubmit} className="space-y-4 flex flex-col flex-grow">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" name="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required placeholder="Your Name" className="w-full p-3 bg-white/70 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition" />
                  <input type="email" name="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required placeholder="Your Email" className="w-full p-3 bg-white/70 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition" />
                </div>
                <textarea name="message" rows={5} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required placeholder="Your message..." className="w-full p-3 bg-white/70 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition flex-grow"></textarea>
                <button type="submit" className="w-full p-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors">
                  Send Message
                </button>
                {result && <p className="text-center font-medium text-slate-700 pt-1">{result}</p>}
              </form>
            </MotionCard>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;