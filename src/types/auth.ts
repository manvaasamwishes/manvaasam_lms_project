import { z } from 'zod';
import { loginSchema, signupSchema } from '../lib/validation/authSchemas';

export type AuthMode = 'login' | 'signup';

export type LoginFormData = z.infer<typeof loginSchema>;
export type SignupFormData = z.infer<typeof signupSchema>;

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';
