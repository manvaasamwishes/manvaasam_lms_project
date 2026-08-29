import { z } from 'zod';

export const loginSchema = z.object({
  identifier: z
    .string()
    .trim()
    .min(1, 'Email or username is required')
    .refine((val) => val.length >= 3, {
      message: 'Identifier must be at least 3 characters',
    }),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(6, 'Password must be at least 6 characters'),
});

export const signupSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, 'Full name is required')
    .min(2, 'Full name must be at least 2 characters'),
  email: z
    .string()
    .trim()
    .min(1, 'Email address is required')
    .email('Please enter a valid email address'),
  username: z
    .string()
    .trim()
    .min(1, 'Username is required')
    .min(3, 'Username must be at least 3 characters')
    .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(6, 'Password must be at least 6 characters')
    .regex(/[A-Z]/, 'Password should contain at least one uppercase letter')
    .regex(/[0-9]/, 'Password should contain at least one number'),
  terms: z.boolean().refine((val) => val === true, {
    message: 'You must accept the Terms of Service and Privacy Policy',
  }),
});

export const adminLoginSchema = z.object({
  adminIdentifier: z
    .string()
    .trim()
    .min(1, 'Admin Username or Email is required')
    .min(3, 'Admin identifier must be at least 3 characters'),
  adminPassword: z
    .string()
    .min(1, 'Admin Password is required')
    .min(6, 'Password must be at least 6 characters'),
  securityPin: z
    .string()
    .optional(),
  rememberAdmin: z.boolean().optional(),
});

export type AdminLoginFormData = z.infer<typeof adminLoginSchema>;
