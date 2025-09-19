// src/components/SkillsCard.tsx
import React from "react";

interface SkillItem {
  name: string;
  icon?: string;
}
interface SkillCategory {
  category: string;
  items: SkillItem[];
}
interface SkillsCardProps {
  title: string;
  tag: string;
  color: string;
  skillsData: SkillCategory[];
  colSpan?: string;
  rowSpan?: string;
}

const SkillsCard: React.FC<SkillsCardProps> = ({
  title,
  tag,
  color,
  skillsData,
  colSpan = "",
  rowSpan = "",
}) => (
    <div
      className={`p-5 rounded-2xl border border-black/10 card-neu-shadow h-full flex flex-col ${color} ${colSpan} ${rowSpan}`}
      style={{ '--card-bg-hex': color.replace('bg-[', '').replace(']', '') } as React.CSSProperties}
    >
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">{tag}</span>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">{title}</h2>
      </div>

      {/* --- CHANGE: Reverted to a 2-column grid for a shorter, more balanced card --- */}
      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillsData.map((skillCategory) => (
          <div key={skillCategory.category} className="bg-white/60 rounded-lg p-3">
            <h3 className="font-bold text-base text-slate-800 mb-3">{skillCategory.category}</h3>
            <div className="flex flex-wrap items-center gap-2">
              {skillCategory.items.map((item) => (
                <div key={item.name} className="flex items-center gap-2 bg-white p-1.5 pr-3 rounded-full shadow-sm border border-black/5">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-6 h-6 object-contain"
                  />
                  <span className="text-sm font-medium text-slate-800">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
);

export default SkillsCard;