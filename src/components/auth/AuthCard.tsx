import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import type { AuthMode } from '../../types/auth';
import { BrandingPanel } from './BrandingPanel';
import { AuthTabs } from './AuthTabs';
import { LoginForm } from './LoginForm';
import { SignupForm } from './SignupForm';
import { DiagonalTransition } from './DiagonalTransition';

interface AuthCardProps {
  initialMode?: AuthMode;
}

export const AuthCard: React.FC<AuthCardProps> = ({ initialMode = 'login' }) => {
  const [mode, setMode] = useState<AuthMode>(initialMode);
  const shouldReduceMotion = useReducedMotion();

  const handleSetMode = (newMode: AuthMode) => {
    setMode(newMode);
  };

  // Coordinated Production Motion Easing & Timing
  const easeCurve = [0.33, 1, 0.68, 1] as const;
  const transitionDuration = shouldReduceMotion ? 0.2 : 0.7;

  return (
    <div className="w-full max-w-[1040px] lg:max-w-[1100px] h-full max-h-[580px] sm:max-h-[620px] lg:max-h-[650px] my-auto px-2 sm:px-3">
      {/* OVERALL CONTAINER: Glassmorphic Floating Split Card */}
      <div className="relative bg-white/95 backdrop-blur-xl rounded-[24px] sm:rounded-[28px] shadow-[0_24px_50px_-12px_rgba(4,36,19,0.14)] border border-white/80 overflow-hidden h-full flex flex-col md:flex-row">
        
        {/* DESKTOP LAYOUT (md and above) - Sliding Dual Half Panels */}
        <div className="hidden md:block absolute inset-0 w-full h-full">
          {/* LEFT SIDE — HERO BRANDING PANEL (50% Width) */}
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full z-20"
            initial={false}
            animate={{
              x: mode === 'login' ? '0%' : '100%',
            }}
            transition={{
              duration: transitionDuration,
              ease: easeCurve,
            }}
          >
            <BrandingPanel />
            <DiagonalTransition mode={mode} />
          </motion.div>

          {/* RIGHT SIDE — FORM PANEL (50% Width) */}
          <motion.div
            className="absolute top-0 left-1/2 w-1/2 h-full z-10 p-6 sm:p-8 lg:p-10 overflow-y-auto flex flex-col justify-between bg-[#fcfdfd]/95 backdrop-blur-md"
            initial={false}
            animate={{
              x: mode === 'login' ? '0%' : '-100%',
            }}
            transition={{
              duration: transitionDuration,
              ease: easeCurve,
            }}
          >
            <AuthTabs mode={mode} onSelectMode={handleSetMode} />

            <div className="relative flex-1 flex items-center justify-center py-1">
              <AnimatePresence mode="wait" initial={false}>
                {mode === 'login' ? (
                  <motion.div
                    key="login-form-desktop"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="w-full max-w-sm"
                  >
                    <LoginForm onSwitchToSignup={() => handleSetMode('signup')} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="signup-form-desktop"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="w-full max-w-md"
                  >
                    <SignupForm onSwitchToLogin={() => handleSetMode('login')} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* MOBILE & TABLET LAYOUT (< md) - Stacked layout */}
        <div className="md:hidden w-full flex flex-col">
          {/* Mobile Header Banner */}
          <div className="w-full bg-gradient-to-br from-[#042413] via-[#094726] to-[#06331b] p-6 text-white text-center relative overflow-hidden">
            <div className="flex justify-center mb-3">
              <img src="/lms_logo.png" alt="Manvaasam" className="h-10 w-auto object-contain brightness-0 invert" />
            </div>
            <h2 className="text-xl font-bold text-white">
              From College <span className="text-[#4ade80]">to Corporate</span>
            </h2>
            <p className="text-xs text-emerald-200/90 mt-1 font-medium">Learn. Grow. Get Placed.</p>
          </div>

          {/* Mobile Form Container */}
          <div className="p-6 bg-white flex-1 overflow-y-auto">
            <AuthTabs mode={mode} onSelectMode={handleSetMode} />
            <AnimatePresence mode="wait">
              {mode === 'login' ? (
                <motion.div
                  key="login-form-mobile"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <LoginForm onSwitchToSignup={() => handleSetMode('signup')} />
                </motion.div>
              ) : (
                <motion.div
                  key="signup-form-mobile"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <SignupForm onSwitchToLogin={() => handleSetMode('login')} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
};
