import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Shield, 
  ShieldCheck,
  UserCheck,
  SlidersHorizontal,
  User, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  ArrowLeft, 
  Key, 
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { adminLoginSchema, type AdminLoginFormData } from '../lib/validation/authSchemas';

export const AdminLoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.title = 'Manvaasam LMS — Administrator Portal';
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AdminLoginFormData>({
    resolver: zodResolver(adminLoginSchema),
    defaultValues: {
      adminIdentifier: '',
      adminPassword: '',
      securityPin: '',
      rememberAdmin: false,
    },
  });

  const onSubmit = async (data: AdminLoginFormData) => {
    try {
      setAuthError(null);
      console.log('Submitting Admin Credentials:', data);
      
      // Simulate API Admin Authentication Check
      await new Promise((resolve) => setTimeout(resolve, 950));
      
      setLoginSuccess(true);
    } catch (err) {
      console.error('Admin authentication failure:', err);
      setAuthError('Invalid administrator credentials or unauthorized access level.');
    }
  };

  return (
    <div className="relative h-screen w-full max-h-screen overflow-hidden bg-[#052F23] flex flex-col justify-between items-center selection:bg-[#64BB3C] selection:text-white font-sans antialiased p-3 sm:p-5 lg:p-8">
      {/* ATMOSPHERIC DEEP FOREST BACKGROUND WITH NATURAL LIGHTING & BOKEH DEPTH */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-gradient-to-br from-[#063B28] via-[#052F23] to-[#032015]">
        {/* Soft Central Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-[#2E7D32]/15 rounded-full blur-[180px]" />
        {/* Ambient Sprout Accent Light */}
        <div className="absolute top-[10%] right-[15%] w-[600px] h-[600px] bg-[#64BB3C]/10 rounded-full blur-[160px]" />

        {/* Natural Organic Foliage Silhouette Visual Integrated into Environment */}
        <svg 
          className="absolute -bottom-24 -right-16 w-[700px] h-[700px] text-[#64BB3C] opacity-[0.06] pointer-events-none" 
          viewBox="0 0 200 200" 
          fill="currentColor"
        >
          <path d="M45.7,17.9C60.2,4.8,84.1,2.5,103.5,12.7c22.8,12,35.9,37.2,33.3,62.8c-2.4,23.5-18.2,43.2-39.6,52.8 c-17.8,8-38.6,7.8-56.1-0.9C23.6,118.6,13,97.7,14.6,76.5C16.1,56.7,28.6,33.2,45.7,17.9z" />
        </svg>
        <svg 
          className="absolute -top-32 -left-20 w-[750px] h-[750px] text-[#2E7D32] opacity-[0.07] pointer-events-none rotate-180" 
          viewBox="0 0 200 200" 
          fill="currentColor"
        >
          <path d="M38.1,28.4C55.7,11.2,85.2,6.8,108.5,18.4c27.4,13.6,43.1,43.7,40,73.8c-2.9,27.6-21.9,50.8-47.5,62.1 c-21.4,9.4-46.3,9.2-67.3-1.1C11.6,141.9-1,117.4,0.9,92.5C2.7,69.2,17.7,41.6,38.1,28.4z" />
        </svg>
      </div>

      {/* Subtle Micro-Dot Texture Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-15 z-0"
        style={{
          backgroundImage: `radial-gradient(#64BB3C 0.75px, transparent 0.75px)`,
          backgroundSize: `30px 30px`,
        }}
      />

      {/* TOP SECONDARY NAVIGATION HEADER */}
      <header className="relative z-10 w-full max-w-6xl flex justify-between items-center py-1 flex-shrink-0">
        <Link
          to="/login"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/12 text-emerald-200/90 hover:text-white transition-all duration-200 text-xs font-medium shadow-sm group focus:outline-none focus:ring-2 focus:ring-[#64BB3C]/40"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-emerald-300 group-hover:-translate-x-0.5 transition-transform duration-200" />
          <span>Back to Student Portal</span>
        </Link>
      </header>

      {/* MAIN CONTENT AREA — DUAL ZONE EXECUTIVE LAYOUT ON DESKTOP */}
      <main className="relative z-10 flex-1 w-full max-w-6xl min-h-0 flex items-center justify-center my-auto py-2">
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-12 items-center">
          
          {/* LEFT ZONE — EXECUTIVE ADMIN BRANDING & VALUE INDICATORS (Desktop / Tablet) */}
          <motion.div 
            initial={shouldReduceMotion ? false : { opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
            className="hidden md:flex md:col-span-6 lg:col-span-6 flex-col justify-between space-y-6 text-left pr-2"
          >
            {/* Header Brand Subtitle */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2E7D32]/25 border border-[#64BB3C]/30 text-[#64BB3C] text-[11px] font-medium tracking-wider uppercase mb-3">
                <Shield className="w-3.5 h-3.5 text-[#64BB3C]" />
                <span>ADMINISTRATOR PORTAL</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-[1.15] font-sans">
                Powering Growth. <br />
                <span className="text-[#64BB3C]">Managing Impact.</span>
              </h1>
              
              <p className="text-sm sm:text-base text-emerald-100/80 mt-3 font-normal leading-relaxed max-w-md">
                Secure access to the Manvaasam administration ecosystem.
              </p>
            </div>

            {/* 3 ADMIN VALUE INDICATORS */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#042115]/60 border border-emerald-500/15 backdrop-blur-md">
                <div className="p-2.5 rounded-xl bg-[#2E7D32]/30 border border-[#64BB3C]/30 text-[#64BB3C] flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-white tracking-wide uppercase">SECURE ACCESS</h3>
                  <p className="text-xs text-emerald-200/70 font-normal mt-0.5">Enterprise-grade protection & auth safety</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#042115]/60 border border-emerald-500/15 backdrop-blur-md">
                <div className="p-2.5 rounded-xl bg-[#2E7D32]/30 border border-[#64BB3C]/30 text-[#64BB3C] flex-shrink-0">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-white tracking-wide uppercase">ROLE BASED</h3>
                  <p className="text-xs text-emerald-200/70 font-normal mt-0.5">Controlled, verified, authorized permissioning</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#042115]/60 border border-emerald-500/15 backdrop-blur-md">
                <div className="p-2.5 rounded-xl bg-[#2E7D32]/30 border border-[#64BB3C]/30 text-[#64BB3C] flex-shrink-0">
                  <SlidersHorizontal className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-white tracking-wide uppercase">SMART CONTROL</h3>
                  <p className="text-xs text-emerald-200/70 font-normal mt-0.5">Manage, monitor, and make institutional impact</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT ZONE — MAIN AUTHENTICATION CARD */}
          <motion.div 
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
            className="md:col-span-6 lg:col-span-6 flex justify-center md:justify-end w-full"
          >
            <div className="w-full max-w-[440px] sm:max-w-[470px] bg-[#042115]/95 backdrop-blur-2xl rounded-2xl sm:rounded-3xl shadow-[0_30px_80px_-15px_rgba(0,0,0,0.8)] border border-emerald-500/20 p-5 sm:p-7 flex flex-col justify-between">
              
              {/* 1. PROMINENT MANVAASAM BRAND ANCHOR LOGO & CARD HEADER */}
              <div className="text-center">
                <div className="relative flex justify-center mb-2.5">
                  <div className="absolute -top-6 w-64 h-28 bg-[#64BB3C]/18 rounded-full blur-2xl pointer-events-none" />
                  <img
                    src="/lms_logo.png"
                    alt="Manvaasam Seeds of Hope"
                    className="relative h-14 sm:h-18 lg:h-20 w-auto max-w-[280px] sm:max-w-[320px] object-contain brightness-0 invert drop-shadow-[0_4px_18px_rgba(0,0,0,0.65)]"
                  />
                </div>

                {/* Refined Administrator Access Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2E7D32]/25 border border-[#64BB3C]/30 text-[#64BB3C] text-[11px] font-medium tracking-wider uppercase mb-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#64BB3C]" />
                  <span>ADMINISTRATOR ACCESS</span>
                </div>

                {/* Heading & Concise Subtitle */}
                <h2 className="text-2xl sm:text-[26px] font-semibold text-white tracking-tight font-sans">
                  Administrator Portal
                </h2>
                <p className="text-xs sm:text-sm text-emerald-100/80 mt-0.5 font-normal leading-relaxed">
                  Secure access to the Manvaasam administration portal.
                </p>
              </div>

              {/* SUCCESS VERIFICATION STATE */}
              {loginSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="my-5 p-4 rounded-2xl bg-[#063B28] border border-[#64BB3C]/40 text-center text-white"
                >
                  <CheckCircle2 className="w-9 h-9 text-[#64BB3C] mx-auto mb-1.5" />
                  <h3 className="text-base font-semibold text-white mb-1">Administrator Access Verified</h3>
                  <p className="text-xs text-emerald-200/90 leading-relaxed font-normal">
                    Credentials validated successfully. Redirecting to administrator console...
                  </p>
                </motion.div>
              ) : (
                /* FORM FIELDS */
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 my-3" noValidate>
                  {/* AUTHENTICATION ERROR ALERT */}
                  {authError && (
                    <motion.div 
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 rounded-xl bg-red-950/90 border border-red-500/40 text-red-200 text-xs flex items-center gap-2 font-sans"
                    >
                      <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                      <span>{authError}</span>
                    </motion.div>
                  )}

                  {/* Admin Username or Email */}
                  <div>
                    <label className="block text-xs font-medium text-emerald-100/90 mb-1.5">
                      Admin Username or Email
                    </label>
                    <div className="relative rounded-xl">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-emerald-300/60">
                        <User className="h-4 w-4" />
                      </div>
                      <input
                        {...register('adminIdentifier')}
                        type="text"
                        placeholder="admin@manvaasam.org"
                        className={`block w-full rounded-xl border border-emerald-900/80 bg-[#02170e]/80 py-2.5 sm:py-3 pl-10 pr-4 text-xs sm:text-sm text-white placeholder-emerald-200/30 font-normal transition-all duration-200 focus:bg-[#021c11] focus:border-[#64BB3C] focus:outline-none focus:ring-2 focus:ring-[#64BB3C]/35 ${
                          errors.adminIdentifier ? 'border-red-400 ring-2 ring-red-400/20' : ''
                        }`}
                        aria-invalid={errors.adminIdentifier ? 'true' : 'false'}
                      />
                    </div>
                    {errors.adminIdentifier && (
                      <p className="mt-1 text-[11px] text-red-300 font-medium">
                        {errors.adminIdentifier.message}
                      </p>
                    )}
                  </div>

                  {/* Administrator Password */}
                  <div>
                    <label className="block text-xs font-medium text-emerald-100/90 mb-1.5">
                      Administrator Password
                    </label>
                    <div className="relative rounded-xl">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-emerald-300/60">
                        <Lock className="h-4 w-4" />
                      </div>
                      <input
                        {...register('adminPassword')}
                        type={showPassword ? 'text' : 'password'}
                        placeholder="••••••••••••"
                        className={`block w-full rounded-xl border border-emerald-900/80 bg-[#02170e]/80 py-2.5 sm:py-3 pl-10 pr-10 text-xs sm:text-sm text-white placeholder-emerald-200/30 font-normal transition-all duration-200 focus:bg-[#021c11] focus:border-[#64BB3C] focus:outline-none focus:ring-2 focus:ring-[#64BB3C]/35 ${
                          errors.adminPassword ? 'border-red-400 ring-2 ring-red-400/20' : ''
                        }`}
                        aria-invalid={errors.adminPassword ? 'true' : 'false'}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-emerald-300/60 hover:text-emerald-200 focus:outline-none transition-colors cursor-pointer"
                        tabIndex={0}
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                    {errors.adminPassword && (
                      <p className="mt-1 text-[11px] text-red-300 font-medium">
                        {errors.adminPassword.message}
                      </p>
                    )}
                  </div>

                  {/* Security Code / MFA (Prepared for Future Architecture) */}
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className="block text-xs font-medium text-emerald-100/90">
                        Security Code / MFA <span className="text-emerald-300/50 font-normal">(Optional)</span>
                      </label>
                    </div>
                    <div className="relative rounded-xl">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-emerald-300/60">
                        <Key className="h-4 w-4" />
                      </div>
                      <input
                        {...register('securityPin')}
                        type="text"
                        maxLength={6}
                        placeholder="6-digit verification code"
                        className="block w-full rounded-xl border border-emerald-900/80 bg-[#02170e]/80 py-2.5 sm:py-3 pl-10 pr-4 text-xs sm:text-sm text-white placeholder-emerald-200/30 font-mono tracking-wider transition-all duration-200 focus:bg-[#021c11] focus:border-[#64BB3C] focus:outline-none focus:ring-2 focus:ring-[#64BB3C]/35"
                      />
                    </div>
                  </div>

                  {/* Remember Admin Session & Need Access Help Link */}
                  <div className="flex items-center justify-between pt-1">
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                      <input
                        {...register('rememberAdmin')}
                        type="checkbox"
                        className="h-4 w-4 rounded border-emerald-800 bg-[#02170e] text-[#2E7D32] focus:ring-[#64BB3C] cursor-pointer"
                      />
                      <span className="text-xs text-emerald-100/80 font-normal">Remember admin session</span>
                    </label>

                    <a
                      href="#need-access-help"
                      onClick={(e) => {
                        e.preventDefault();
                        alert('Contact system administrator to request access credentials or password recovery.');
                      }}
                      className="text-xs font-medium text-[#64BB3C] hover:text-[#86efac] hover:underline transition-colors cursor-pointer"
                    >
                      Need access help?
                    </a>
                  </div>

                  {/* REFINED PRIMARY CTA BUTTON WITH ALL MICRO-STATES */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={shouldReduceMotion ? {} : { scale: 1.01 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.985 }}
                    className="w-full group relative flex items-center justify-center py-3 sm:py-3.5 px-6 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#2E7D32] to-[#1b5e20] hover:from-[#388e3c] hover:to-[#2e7d32] shadow-lg shadow-black/40 border border-emerald-400/20 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#64BB3C]/25 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer mt-3"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>VERIFYING CREDENTIALS...</span>
                      </div>
                    ) : (
                      <>
                        <span>ADMIN SIGN IN</span>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}

              {/* NEUTRAL SECURITY INFORMATION */}
              <div className="text-center pt-3 border-t border-emerald-900/60">
                <p className="text-[11px] text-emerald-200/60 font-normal font-sans">
                  Authorized administrators only • Secure administration portal
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </main>

      {/* FOOTER BRANDING */}
      <footer className="relative z-10 py-1.5 text-center text-xs font-medium text-emerald-200/60 tracking-[0.18em] uppercase font-sans flex-shrink-0">
        <p className="flex items-center justify-center gap-2">
          <span>MANVAASAM</span>
          <span>–</span>
          <span>ADMINISTRATOR PORTAL</span>
          <img src="/lms_logo.png" alt="Sprout Icon" className="h-4 w-auto inline-block object-contain brightness-0 invert" />
        </p>
      </footer>
    </div>
  );
};
