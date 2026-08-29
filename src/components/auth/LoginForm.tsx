import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { User, ArrowRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { loginSchema } from '../../lib/validation/authSchemas';
import type { LoginFormData } from '../../types/auth';
import { PasswordInput } from './PasswordInput';
import { SocialLoginButtons } from './SocialLoginButtons';

interface LoginFormProps {
  onSwitchToSignup: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSwitchToSignup }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      identifier: '',
      password: '',
    },
  });

  const onSubmit = async (_data: LoginFormData) => {
    console.log('Login form submitted');
  };

  return (
    <div className="w-full max-w-sm mx-auto font-sans">
      {/* Heading */}
      <div className="mb-5 sm:mb-6">
        <h2 className="text-2xl sm:text-[28px] font-semibold text-gray-900 tracking-tight">
          Welcome back!
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed font-normal">
          Log in to access your courses and continue learning.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5 sm:space-y-4" noValidate>
        {/* Email or Username */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1.5">
            Email or Username
          </label>
          <div className="relative rounded-xl">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
              <User className="h-4 w-4" />
            </div>
            <input
              {...register('identifier')}
              type="text"
              placeholder="Enter your email or username"
              className={`block w-full rounded-xl border border-gray-200/90 bg-gray-50/70 py-2.5 sm:py-3 pl-10 pr-4 text-xs sm:text-sm text-gray-900 placeholder-gray-400 font-normal shadow-2xs transition-all duration-200 focus:bg-white focus:border-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-600/15 ${
                errors.identifier ? 'border-red-500 ring-4 ring-red-500/10' : ''
              }`}
              aria-invalid={errors.identifier ? 'true' : 'false'}
            />
          </div>
          {errors.identifier && (
            <p className="mt-1 text-[11px] text-red-600 font-medium">
              {errors.identifier.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <PasswordInput
            {...register('password')}
            label="Password"
            placeholder="Enter your password"
            error={errors.password?.message}
          />
          {/* Forgot Password */}
          <div className="flex justify-end mt-1.5">
            <button
              type="button"
              className="text-xs font-semibold text-[#15803d] hover:text-[#0e5c32] hover:underline focus:outline-none transition-colors cursor-pointer"
              onClick={() => console.log('Forgot password clicked')}
            >
              Forgot Password?
            </button>
          </div>
        </div>

        {/* Primary Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full group relative flex items-center justify-center py-3 sm:py-3.5 px-6 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#0e5c32] hover:bg-[#072a1a] shadow-md shadow-emerald-950/15 active:scale-[0.99] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-600/25 disabled:opacity-70 cursor-pointer mt-2"
        >
          <span>SIGN IN</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </button>

        {/* Social Login Buttons (Google & LinkedIn) */}
        <SocialLoginButtons />

        {/* Create Account Switch & Admin Portal Link */}
        <div className="text-center pt-1.5 space-y-1.5">
          <p className="text-xs text-gray-500 font-normal">
            Don't have an account?{' '}
            <button
              type="button"
              onClick={onSwitchToSignup}
              className="font-semibold text-[#15803d] hover:text-[#0c3823] hover:underline focus:outline-none transition-colors cursor-pointer"
            >
              Create account
            </button>
          </p>

          {/* Admin Portal Navigation Link (Subtle & Visually Secondary) */}
          <div className="pt-0.5">
            <Link
              to="/admin/login"
              className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-gray-400 hover:text-[#15803d] transition-colors duration-200 group focus:outline-none focus:underline"
            >
              <Shield className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#15803d] transition-colors" />
              <span>Admin Portal</span>
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
