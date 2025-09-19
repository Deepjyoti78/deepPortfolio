// // src/components/ContactLinkCard.tsx
// import React from 'react';

// interface ContactLinkCardProps {
//   href: string;
//   icon: string;
//   title: string;
//   description: string;
//   color: string;
// }

// const ContactLinkCard: React.FC<ContactLinkCardProps> = ({ href, icon, title, description, color }) => {
//   return (
//         <div
//           className={`border-2 border-black rounded-xl p-4 ${color} ${colSpan} ${rowSpan} card-neu-shadow`}
//           style={{ '--card-bg-hex': color.replace('bg-[', '').replace(']', '') } as React.CSSProperties}
//         >
//     <a
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       className={`relative has-outward-shadow card-border-fix rounded-xl p-6 ${color} flex items-center gap-4 transition-transform duration-200 hover:scale-105`}
//       style={{ '--card-bg-hex': color.replace('bg-[', '').replace(']', '') } as React.CSSProperties}
//     >
//       <img src={icon} alt={title} className="w-10 h-10" />
//       <div>
//         <h3 className="font-bold text-lg text-gray-800">{title}</h3>
//         <p className="text-sm text-gray-600">{description}</p>
//       </div>
//     </a>
//     </div>
//   );
// };

// export default ContactLinkCard;
