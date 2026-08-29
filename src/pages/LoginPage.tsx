import React, { useEffect } from 'react';
import type { AuthMode } from '../types/auth';
import { AuthCard } from '../components/auth/AuthCard';

interface LoginPageProps {
  initialMode?: AuthMode;
}

export const LoginPage: React.FC<LoginPageProps> = ({ initialMode = 'login' }) => {
  useEffect(() => {
    document.title = 'Manvaasam LMS — From College to Corporate';
  }, []);

  return (
    <div className="relative h-screen w-full max-h-screen overflow-hidden bg-[#f4f7f5] flex flex-col justify-between items-center selection:bg-emerald-600 selection:text-white font-sans antialiased p-2 sm:p-4">
      {/* AURORAMORPHIC AMBIENT BACKGROUND MESH */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Glowing Emerald Aurora Mesh 1 */}
        <div className="absolute -top-[15%] left-[15%] w-[650px] h-[650px] bg-emerald-400/18 rounded-full blur-[150px] animate-pulse-subtle" />
        {/* Glowing Mint Aurora Mesh 2 */}
        <div className="absolute -bottom-[15%] right-[10%] w-[700px] h-[700px] bg-green-300/18 rounded-full blur-[160px] animate-pulse-subtle" style={{ animationDelay: '2s' }} />
        {/* Subtle Lime Aurora Mesh 3 */}
        <div className="absolute top-[35%] right-[25%] w-[450px] h-[450px] bg-lime-300/12 rounded-full blur-[140px]" />
      </div>

      {/* Subtle Micro-Dot Background Grid */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-15 z-0"
        style={{
          backgroundImage: `radial-gradient(#10b981 0.75px, transparent 0.75px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      {/* Main Content Area — Fits card dynamically */}
      <main className="relative z-10 flex-1 w-full min-h-0 flex items-center justify-center my-auto">
        <AuthCard initialMode={initialMode} />
      </main>

      {/* Footer Branding — Always visible at bottom without scrolling */}
      <footer className="relative z-10 py-1.5 sm:py-2 text-center text-xs sm:text-[13px] font-semibold text-[#15803d] tracking-[0.18em] uppercase font-sans flex-shrink-0">
        <p className="flex items-center justify-center gap-2 drop-shadow-2xs">
          <span>MANVAASAM</span>
          <span>–</span>
          <span>LEARN</span>
          <span>•</span>
          <span>GROW</span>
          <span>•</span>
          <span>GET PLACED</span>
          <img src="/lms_logo.png" alt="Sprout Icon" className="h-4 sm:h-5 w-auto inline-block object-contain ml-0.5" />
        </p>
      </footer>
    </div>
  );
};
