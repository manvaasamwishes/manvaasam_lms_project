import React from 'react';
import type { AuthMode } from '../../types/auth';

interface DiagonalTransitionProps {
  mode: AuthMode;
}

export const DiagonalTransition: React.FC<DiagonalTransitionProps> = ({ mode }) => {
  const isLogin = mode === 'login';

  return (
    <div
      className={`absolute inset-y-0 ${
        isLogin ? 'right-[-24px] sm:right-[-28px]' : 'left-[-24px] sm:left-[-28px]'
      } w-[50px] sm:w-[58px] pointer-events-none z-30 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]`}
    >
      {/* Refined Elegant Green Ribbon Overlay */}
      <svg
        className="absolute inset-y-0 h-full w-full drop-shadow-md transition-all duration-700 pointer-events-none"
        viewBox="0 0 100 600"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="manvaasam-green-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#65a30d" />
            <stop offset="40%" stopColor="#22c55e" />
            <stop offset="80%" stopColor="#15803d" />
            <stop offset="100%" stopColor="#064e3b" />
          </linearGradient>
          <filter id="ribbon-soft-shadow" x="-30%" y="-10%" width="160%" height="120%">
            <feDropShadow
              dx={isLogin ? "-2" : "2"}
              dy="2"
              stdDeviation="3"
              floodColor="#042413"
              floodOpacity="0.25"
            />
          </filter>
        </defs>

        <path
          d={
            isLogin
              ? 'M 0,0 L 45,0 L 85,290 Q 88,300 85,310 L 45,600 L 0,600 L 32,310 Q 34,300 32,290 Z'
              : 'M 100,0 L 55,0 L 15,290 Q 12,300 15,310 L 55,600 L 100,600 L 68,310 Q 66,300 68,290 Z'
          }
          fill="url(#manvaasam-green-grad)"
          filter="url(#ribbon-soft-shadow)"
          className="transition-all duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]"
        />
      </svg>

    </div>
  );
};
