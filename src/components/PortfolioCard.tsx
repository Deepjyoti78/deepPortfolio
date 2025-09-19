// src/components/PortfolioCard.tsx
import React from "react";

interface PortfolioCardProps {
  title: string;
  description?: string | string[];
  tag: string;
  color: string;
  colSpan?: string;
  rowSpan?: string;
  profileImage?: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  description,
  tag,
  color,
  colSpan = "",
  rowSpan = "",
  profileImage,
}) => (
  <div
    className={`p-5 rounded-2xl border border-black/10 card-neu-shadow h-full flex flex-col ${color} ${colSpan} ${rowSpan}`}
    style={{ '--card-bg-hex': color.replace('bg-[', '').replace(']', '') } as React.CSSProperties}
  >
    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">{tag}</span>

    {profileImage ? (
      <div className="flex-grow flex items-start justify-between gap-5">
        
        <div className="flex-1">
          {/* --- CHANGE: Increased margin-bottom for better spacing --- */}
          <h2 className="text-3xl font-bold text-slate-900 mb-6">{title}</h2>
          {Array.isArray(description) && (
            // --- CHANGE: Increased spacing between list items ---
            <ul className="space-y-3">
              {description.map((point, idx) => (
                <li key={idx} className="text-base text-slate-700 leading-relaxed list-disc list-inside">{point}</li>
              ))}
            </ul>
          )}
        </div>
        
        <div className="flex-shrink-0">
          <div className="p-1 bg-white/60 rounded-lg border border-black/10">
            <img
              src={profileImage}
              alt="Profile"
              className="w-43 h-62 rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    ) : (
      <div className="flex-grow flex items-center">
         <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
      </div>
    )}
  </div>
);

export default PortfolioCard;