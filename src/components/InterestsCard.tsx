// src/components/InterestsCard.tsx
import React from 'react';

interface InterestItem {
  id: string;
  icon: string;
  text: string;
}
interface InterestsCardProps {
  title: string;
  tag: string;
  color: string;
  interestsData: InterestItem[];
  colSpan?: string;
  rowSpan?: string;
}

const InterestsCard: React.FC<InterestsCardProps> = ({
  title,
  tag,
  color,
  interestsData,
  colSpan = "",
  rowSpan = "",
}) => {
  return (
    <div
      className={`p-5 rounded-2xl border border-black/10 card-neu-shadow h-full ${color} ${colSpan} ${rowSpan}`}
      style={{ '--card-bg-hex': color.replace('bg-[', '').replace(']', '') } as React.CSSProperties}
    >
      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">{tag}</span>
      <h2 className="text-2xl font-bold text-slate-900 mb-4">{title}</h2>

      <div className="grid grid-cols-3 gap-2">
        {interestsData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center text-center p-2 rounded-lg bg-white/60"
          >
            <img 
              src={item.icon} 
              alt={item.text} 
              className="w-7 h-7 mb-1 object-contain"
            />
            <span className="text-xs font-semibold text-slate-700">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterestsCard;