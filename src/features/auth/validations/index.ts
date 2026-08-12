import { z } from "zod";

export const passwordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(/[A-Z]/, "Password must include at least one uppercase letter")
      .regex(/[0-9]/, "Password must include at least one number")
      .regex(
        /[^A-Za-z0-9]/,
        "Password must include at least one special character",
      ),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const signInSchema = z.object({
  email: z.email("Please enter your email address"),
  password: z.string().min(1, "Please enter your password"),
  rememberMe: z.boolean().default(false),
});
export type SignInSchema = z.infer<typeof signInSchema>;

export const signUpSchema = z
  .object({
    email: z.email("Invalid email address"),
    phoneNumber: z.string().optional(),
    agree: z.boolean().refine((val) => val === true, {
      message: "You must agree to continue",
    }),
  })
  .and(passwordSchema);
export type SignUpSchema = z.infer<typeof signUpSchema>;

export const resetPasswordSchema = z.object({
  email: z.email("Please enter your email address"),
});
export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;

export const newPasswordSchema = passwordSchema;
export type NewPasswordSchema = z.infer<typeof newPasswordSchema>;

export const editProfileInfoSchema = z.object({
  image: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  phoneNumber: z.string().optional(),
  bio: z.string().optional(),
  dob: z.string().optional(),
});
export type EditProfileInfoSchema = z.infer<typeof editProfileInfoSchema>;
