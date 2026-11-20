import { motion } from 'framer-motion';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showWordmark?: boolean;
  className?: string;
}

export default function BrandLogo({ size = 'md', showWordmark = true, className = '' }: BrandLogoProps) {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
    xl: 'w-14 h-14',
  };

  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Precision AgileSquad Geometric Emblem */}
      <div className={`relative ${iconSizes[size]} shrink-0 group`}>
        {/* Ambient Backlight Glow on Hover */}
        <div className="absolute inset-0 rounded-xl bg-[#F04424] blur-[10px] opacity-40 group-hover:opacity-75 transition-opacity" />

        {/* Crisp Vector Badge */}
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10 drop-shadow-sm"
        >
          <defs>
            {/* Radiant Obsidian Warm Red-Orange Gradient */}
            <linearGradient id="as-badge-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF5722" />
              <stop offset="55%" stopColor="#F04424" />
              <stop offset="100%" stopColor="#C82808" />
            </linearGradient>

            {/* Subtle Top Rim Highlight */}
            <linearGradient id="as-rim-highlight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Squircle Badge Container */}
          <rect width="36" height="36" rx="9.5" fill="url(#as-badge-grad)" />
          <rect x="0.5" y="0.5" width="35" height="35" rx="9" stroke="url(#as-rim-highlight)" strokeWidth="1" />

          {/* Agile Sprint Velocity Delta + Squad Chevron Monogram */}
          {/* Primary Agile Chevron (Left Apex) */}
          <path
            d="M8.5 25.5L16.2 9.5C16.6 8.8 17.5 8.5 18.2 8.8C18.6 9 18.9 9.3 19.1 9.7L25 21.5H20.8L17.5 14.8L12.5 25.5H8.5Z"
            fill="white"
          />

          {/* Intersecting High-Velocity Sprint Arrow (Forming the S-flow and agile iteration cycle) */}
          <path
            d="M14.5 19L19.2 19C20.6 19 21.5 19.8 21.5 21C21.5 22.2 20.4 23.2 19 23.2H14L15.2 25.5H19.2C22.2 25.5 24.5 23.6 24.5 21C24.5 18.8 22.8 17.2 20.2 16.8L17.5 16.5L16.2 14L13.8 19H14.5Z"
            fill="white"
            fillOpacity="0.96"
          />

          {/* Squad Pulse Node (Center-Right Precision Coordinate) */}
          <circle cx="27" cy="9" r="2" fill="#FFE5D9" />
          <circle cx="27" cy="9" r="1.2" fill="#F04424" />
        </svg>
      </div>

      {/* Typography Wordmark */}
      {showWordmark && (
        <div className="flex items-baseline tracking-tight">
          <span className={`font-serif ${textSizes[size]} font-bold text-foreground`}>
            Agile<span className="text-[#F04424] italic font-serif">Squad</span>
          </span>
          <span className="hidden sm:inline-block ml-1.5 text-[9px] font-mono uppercase tracking-wider font-bold px-1.5 py-0.5 rounded bg-[#F04424]/10 text-[#F04424] border border-[#F04424]/20 align-top">
            Studio
          </span>
        </div>
      )}
    </div>
  );
}
