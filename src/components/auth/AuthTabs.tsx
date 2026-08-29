import React from 'react';
import type { AuthMode } from '../../types/auth';

interface AuthTabsProps {
  mode: AuthMode;
  onSelectMode: (mode: AuthMode) => void;
}

export const AuthTabs: React.FC<AuthTabsProps> = ({ mode, onSelectMode }) => {
  return (
    <div className="flex justify-end mb-1.5 sm:mb-2 font-sans">
      <div 
        className="inline-flex items-center p-0.5 sm:p-1 bg-gray-100/80 border border-gray-200/70 rounded-full gap-0.5"
        role="tablist"
        aria-label="Authentication Options"
      >
        <button
          role="tab"
          type="button"
          aria-selected={mode === 'login'}
          onClick={() => onSelectMode('login')}
          className={`px-3.5 sm:px-4 py-1 text-xs transition-all duration-200 focus:outline-none cursor-pointer ${
            mode === 'login'
              ? 'bg-white text-[#15803d] font-semibold shadow-2xs rounded-full border border-gray-200/80'
              : 'text-gray-500 hover:text-gray-800 font-medium'
          }`}
        >
          Login
        </button>

        <button
          role="tab"
          type="button"
          aria-selected={mode === 'signup'}
          onClick={() => onSelectMode('signup')}
          className={`px-4 sm:px-5 py-1.5 text-xs sm:text-sm transition-all duration-200 focus:outline-none cursor-pointer ${
            mode === 'signup'
              ? 'bg-white text-[#15803d] font-semibold shadow-2xs rounded-full border border-gray-200/80'
              : 'text-gray-500 hover:text-gray-800 font-medium'
          }`}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};
