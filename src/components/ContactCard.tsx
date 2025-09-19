// src/components/ContactCard.tsx
import React from 'react';

interface ContactItem {
  id: string;
  icon?: string;
  text: string;
  link?: string;
}
interface ContactCardProps {
  title: string;
  tag: string;
  color: string;
  contactItems: ContactItem[];
  colSpan?: string;
  rowSpan?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  title,
  tag,
  color,
  contactItems,
  colSpan = "",
  rowSpan = "",
}) => {
  return (
    <div
      className={`p-4 rounded-2xl border border-black/10 card-neu-shadow h-full ${color} ${colSpan} ${rowSpan}`}
    >
      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">{tag}</span>
      
      {/* --- This is the only change --- */}
      {/* A new flex container aligns the title and the boxes on the same row */}
      <div className="flex flex-wrap items-center gap-4">
        {/* Title (no longer has margin-bottom) */}
        <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
        
        {/* The container for the boxes remains the same */}
        <div className="flex flex-wrap items-center gap-3">
          {contactItems.map((item) => (
            <a
              key={item.id}
              href={item.link || undefined}
              target={item.link?.startsWith('http') ? '_blank' : undefined}
              rel={item.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
              // --- The original styling of your boxes is preserved ---
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 text-slate-800 border border-black/10 hover:bg-white transition-colors text-sm font-semibold"
            >
              {item.icon && (
                <img src={item.icon} alt={item.text} className="w-5 h-5 object-contain" />
              )}
              <span>{item.text}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;