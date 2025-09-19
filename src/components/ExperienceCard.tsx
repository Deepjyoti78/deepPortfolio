// src/components/ExperienceCard.tsx
import React from "react";

interface ExperienceEntry {
  title: string;
  subtitle: string;
  year: string;
  details: string[];
}
interface ExperienceCardProps {
  title: string;
  tag: string;
  color: string;
  experienceData: {
    left: ExperienceEntry[];
    right: ExperienceEntry[];
  };
  colSpan?: string;
  rowSpan?: string;
}

const renderExperienceEntry = (exp: ExperienceEntry) => (
  <div key={exp.title}>
    <div className="flex justify-between items-start mb-1">
      <h3 className="font-bold text-base text-slate-800">{exp.title}</h3>
      <span className="bg-white/70 text-slate-700 text-xs font-semibold px-2 py-0.5 rounded-md border border-black/10 ml-2">
        {exp.year}
      </span>
    </div>
    <p className="text-slate-500 text-sm italic mb-2">{exp.subtitle}</p>
    <ul className="list-disc list-inside text-slate-600 space-y-1 text-sm">
      {exp.details.map((point, idx) => (
        <li key={idx}>{point}</li>
      ))}
    </ul>
  </div>
);

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  tag,
  color,
  experienceData,
  colSpan = "",
  rowSpan = "",
}) => (
  <div
      className={`p-5 rounded-2xl border border-black/10 card-neu-shadow h-full flex flex-col ${color} ${colSpan} ${rowSpan}`}
      style={{ '--card-bg-hex': color.replace('bg-[', '').replace(']', '') } as React.CSSProperties}
    >
    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">{tag}</span>
    <h2 className="text-2xl font-bold text-slate-900 mb-4">{title}</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
      <div className="flex flex-col gap-y-4">
        {(experienceData?.left ?? []).map((exp) => renderExperienceEntry(exp))}
      </div>
      
      <div className="flex flex-col gap-y-4">
        {(experienceData?.right ?? []).map((exp) => renderExperienceEntry(exp))}
      </div>
    </div>
  </div>
);

export default ExperienceCard;