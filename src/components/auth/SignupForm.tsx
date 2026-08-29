import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { User, Mail, AtSign, ArrowRight } from 'lucide-react';
import { signupSchema } from '../../lib/validation/authSchemas';
import type { SignupFormData } from '../../types/auth';
import { PasswordInput } from './PasswordInput';
import { SocialLoginButtons } from './SocialLoginButtons';

interface SignupFormProps {
  onSwitchToLogin: () => void;
}

export const SignupForm: React.FC<SignupFormProps> = ({ onSwitchToLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      fullName: '',
      email: '',
      username: '',
      password: '',
      terms: undefined,
    },
  });

  const onSubmit = async (_data: SignupFormData) => {
    console.log('Signup form submitted');
  };

  return (
    <div className="w-full max-w-md mx-auto font-sans">
      {/* Header */}
      <div className="mb-3.5 sm:mb-4">
        <h2 className="text-2xl sm:text-[26px] font-semibold text-gray-900 tracking-tight">
          Create your account
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed font-normal">
          Start your learning journey with Manvaasam today
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2.5 sm:space-y-3" noValidate>
        {/* Full Name & Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Full Name</label>
            <div className="relative rounded-xl">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <User className="h-4 w-4" />
              </div>
              <input
                {...register('fullName')}
                type="text"
                placeholder="John Doe"
                className={`block w-full rounded-xl border border-gray-200/90 bg-gray-50/70 py-2 sm:py-2.5 pl-9 pr-3 text-xs sm:text-sm text-gray-900 placeholder-gray-400 font-normal shadow-2xs transition-all duration-200 focus:bg-white focus:border-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-600/15 ${
                  errors.fullName ? 'border-red-500 ring-4 ring-red-500/10' : ''
                }`}
                aria-invalid={errors.fullName ? 'true' : 'false'}
              />
            </div>
            {errors.fullName && (
              <p className="mt-0.5 text-[11px] text-red-600 font-medium">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
            <div className="relative rounded-xl">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Mail className="h-4 w-4" />
              </div>
              <input
                {...register('email')}
                type="email"
                placeholder="name@example.com"
                className={`block w-full rounded-xl border border-gray-200/90 bg-gray-50/70 py-2 sm:py-2.5 pl-9 pr-3 text-xs sm:text-sm text-gray-900 placeholder-gray-400 font-normal shadow-2xs transition-all duration-200 focus:bg-white focus:border-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-600/15 ${
                  errors.email ? 'border-red-500 ring-4 ring-red-500/10' : ''
                }`}
                aria-invalid={errors.email ? 'true' : 'false'}
              />
            </div>
            {errors.email && (
              <p className="mt-0.5 text-[11px] text-red-600 font-medium">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Username */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Username</label>
          <div className="relative rounded-xl">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
              <AtSign className="h-4 w-4" />
            </div>
            <input
              {...register('username')}
              type="text"
              placeholder="Choose a username"
              className={`block w-full rounded-xl border border-gray-200/90 bg-gray-50/70 py-2 sm:py-2.5 pl-10 pr-3.5 text-xs sm:text-sm text-gray-900 placeholder-gray-400 font-normal shadow-2xs transition-all duration-200 focus:bg-white focus:border-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-600/15 ${
                errors.username ? 'border-red-500 ring-4 ring-red-500/10' : ''
              }`}
              aria-invalid={errors.username ? 'true' : 'false'}
            />
          </div>
          {errors.username && (
            <p className="mt-0.5 text-[11px] text-red-600 font-medium">
              {errors.username.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <PasswordInput
            {...register('password')}
            label="Password"
            placeholder="Create a strong password"
            error={errors.password?.message}
          />
        </div>

        {/* Terms Checkbox */}
        <div className="pt-0.5">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                {...register('terms')}
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
              />
            </div>
            <div className="ml-2 text-xs text-gray-600 font-normal">
              <label htmlFor="terms" className="cursor-pointer">
                I agree to the{' '}
                <a href="#terms" className="font-semibold text-[#15803d] hover:text-[#0e5c32] underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#privacy" className="font-semibold text-[#15803d] hover:text-[#0e5c32] underline">
                  Privacy Policy
                </a>
              </label>
            </div>
          </div>
          {errors.terms && (
            <p className="mt-0.5 text-[11px] text-red-600 font-medium">
              {errors.terms.message}
            </p>
          )}
        </div>

        {/* Primary Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full group relative flex items-center justify-center py-2.5 sm:py-3 px-6 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#0e5c32] hover:bg-[#072a1a] shadow-md shadow-emerald-950/15 active:scale-[0.99] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-600/25 disabled:opacity-70 cursor-pointer mt-1.5"
        >
          <span>CREATE ACCOUNT</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </button>

        {/* Social Login Buttons (Google & LinkedIn) */}
        <SocialLoginButtons />

        {/* Footer switch */}
        <div className="text-center pt-1">
          <p className="text-xs text-gray-500 font-normal">
            Already have an account?{' '}
            <button
              type="button"
              onClick={onSwitchToLogin}
              className="font-semibold text-[#15803d] hover:text-[#0e5c32] hover:underline focus:outline-none transition-colors cursor-pointer"
            >
              Login
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};
