import React from 'react';
import { BookOpen, BarChart3, Briefcase } from 'lucide-react';

export const BrandingPanel: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-8 lg:p-9 text-white overflow-hidden select-none font-sans">
      {/* 2. PLANT & MOUNTAIN ARTWORK: Improved contrast & depth */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105 pointer-events-none"
        style={{
          backgroundImage: `url('/bg_image.jpeg')`,
        }}
      />

      {/* Refined Rich Dark Green Overlay — High contrast artwork visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#031d0f]/95 via-[#06331a]/78 to-[#031f10]/65 pointer-events-none" />

      {/* 1. MANVAASAM LOGO: Substantially LARGER, prominent & uncropped asset merged with background */}
      <div className="relative z-10 flex items-center pt-1 sm:pt-2">
        {/* Amplified Soft Ambient Aurora Glow behind Logo */}
        <div className="absolute -top-12 -left-12 w-96 h-64 bg-emerald-400/35 rounded-full blur-3xl pointer-events-none" />
        
        <img
          src="/lms_logo.png"
          alt="Manvaasam Seeds of Hope"
          className="relative h-24 sm:h-32 lg:h-36 w-auto max-w-[340px] sm:max-w-[420px] object-contain brightness-0 invert drop-shadow-[0_6px_24px_rgba(0,0,0,0.75)] transition-all duration-300 hover:scale-[1.02]"
        />
      </div>

      {/* HERO HEADLINE & SUBTEXT */}
      <div className="relative z-10 my-auto py-2">
        <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold tracking-tight text-white leading-[1.18]">
          From College <br />
          to <span className="font-bold text-[#4ade80] drop-shadow-xs">Corporate</span>
        </h1>

        {/* Thin Green Accent Line */}
        <div className="w-12 h-[3px] bg-[#4ade80] my-2.5 rounded-full shadow-xs" />

        <p className="text-xs sm:text-sm font-medium text-white tracking-wide">
          Learn. Grow. Get Placed.
        </p>

        <p className="text-[11px] sm:text-xs text-emerald-100/90 font-normal leading-relaxed mt-1 max-w-[260px]">
          Your journey to a successful career starts here.
        </p>
      </div>

      {/* 5. BOTTOM 3 FEATURE COLUMNS: Cleaner, flatter, borderless & premium */}
      <div className="relative z-10 grid grid-cols-3 gap-0 pt-3 border-t border-white/15">
        {/* Feature 1: Learn */}
        <div className="flex flex-col items-center text-center px-1 border-r border-white/15 group">
          <div className="w-8 h-8 rounded-full border border-[#4ade80]/80 bg-[#042413]/60 flex items-center justify-center mb-1 text-[#4ade80] shadow-xs group-hover:border-[#4ade80] group-hover:bg-[#073a1e] transition-all duration-200">
            <BookOpen className="w-4 h-4 stroke-[2.2]" />
          </div>
          <span className="text-xs font-semibold text-white">Learn</span>
          <span className="text-[10px] text-emerald-100/80 leading-tight mt-0.5 font-normal">
            Industry focused<br />courses
          </span>
        </div>

        {/* Feature 2: Grow */}
        <div className="flex flex-col items-center text-center px-1 border-r border-white/15 group">
          <div className="w-8 h-8 rounded-full border border-[#4ade80]/80 bg-[#042413]/60 flex items-center justify-center mb-1 text-[#4ade80] shadow-xs group-hover:border-[#4ade80] group-hover:bg-[#073a1e] transition-all duration-200">
            <BarChart3 className="w-4 h-4 stroke-[2.2]" />
          </div>
          <span className="text-xs font-semibold text-white">Grow</span>
          <span className="text-[10px] text-emerald-100/80 leading-tight mt-0.5 font-normal">
            Assess, improve<br />and upskill
          </span>
        </div>

        {/* Feature 3: Get Placed */}
        <div className="flex flex-col items-center text-center px-1 group">
          <div className="w-8 h-8 rounded-full border border-[#4ade80]/80 bg-[#042413]/60 flex items-center justify-center mb-1 text-[#4ade80] shadow-xs group-hover:border-[#4ade80] group-hover:bg-[#073a1e] transition-all duration-200">
            <Briefcase className="w-4 h-4 stroke-[2.2]" />
          </div>
          <span className="text-xs font-semibold text-white">Get Placed</span>
          <span className="text-[10px] text-emerald-100/80 leading-tight mt-0.5 font-normal">
            Top job opportunities<br />await you
          </span>
        </div>
      </div>
    </div>
  );
};
