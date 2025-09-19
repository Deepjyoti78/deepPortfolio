import React from "react";
import { Download } from 'lucide-react'; // 1. Import the icon

interface EducationEntry {
  title: string;
  details: string;
  year: string;
}
interface EducationCardProps {
  title:string;
  tag: string;
  color: string;
  educationData: EducationEntry[];
  colSpan?: string;
  rowSpan?: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
  title,
  tag,
  color,
  educationData,
  colSpan = "",
  rowSpan = "",
}) => (
  <div
    className={`p-5 rounded-2xl border border-black/10 card-neu-shadow h-full flex flex-col ${color} ${colSpan} ${rowSpan}`}
    style={{ '--card-bg-hex': color.replace('bg-[', '').replace(']', '') } as React.CSSProperties}
  >
    <div>
      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
        {tag}
      </span>
      <h2 className="text-2xl font-bold text-slate-900 mb-4">{title}</h2>
    </div>

    <div className="flex flex-col">
      {educationData.map((edu, index) => (
        <div key={index} className="relative pl-6">
          
          <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-black/10 border-2 border-white/80"></div>
          
          {index < educationData.length - 1 && (
            <div className="absolute left-[5px] top-4 h-full w-px bg-black/10"></div>
          )}

          <div className="pb-6">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-base text-slate-800">{edu.title}</h3>
              <span className="bg-white/70 backdrop-blur-sm text-slate-700 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-black/10 whitespace-nowrap ml-2">
                {edu.year}
              </span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">{edu.details}</p>
          </div>
        </div>
      ))}
    </div>

    {/* --- 2. Added Spacer and Resume Button --- */}
    <div className="flex-grow"></div> {/* This spacer pushes the button to the bottom */}
    <div className="text-center mt-4">
        <a 
            href="/deepresumee.pdf" // IMPORTANT: Replace with the actual path to your resume PDF
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-slate-800 text-white font-bold text-sm py-2 px-5 rounded-full hover:bg-slate-900 transition-colors"
        >
            <Download size={16} />
            Download Resume
        </a>
    </div>

  </div>
);

export default EducationCard;