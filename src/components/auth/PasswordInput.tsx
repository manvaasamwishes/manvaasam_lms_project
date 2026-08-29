import React, { useState, forwardRef } from 'react';
import { Lock, Eye, EyeOff } from 'lucide-react';

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ error, label, className = '', ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="w-full font-sans">
        {label && (
          <label className="block text-xs font-medium text-gray-700 mb-1.5">
            {label}
          </label>
        )}
        <div className="relative rounded-xl">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
            <Lock className="h-4 w-4" />
          </div>
          {/* Input text / Placeholder text: Poppins Regular */}
          <input
            {...props}
            ref={ref}
            type={showPassword ? 'text' : 'password'}
            className={`block w-full rounded-xl border border-gray-200/90 bg-gray-50/70 py-2.5 sm:py-3 pl-10 pr-10 text-xs sm:text-sm text-gray-900 placeholder-gray-400 font-normal shadow-2xs transition-all duration-200 focus:bg-white focus:border-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-600/15 disabled:cursor-not-allowed disabled:opacity-50 ${
              error ? 'border-red-500 ring-4 ring-red-500/10' : ''
            } ${className}`}
            aria-invalid={error ? 'true' : 'false'}
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-gray-400 hover:text-emerald-600 focus:outline-none transition-colors cursor-pointer"
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
        {error && (
          <p className="mt-1 text-[11px] text-red-600 font-medium animate-fadeIn">
            {error}
          </p>
        )}
      </div>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';
