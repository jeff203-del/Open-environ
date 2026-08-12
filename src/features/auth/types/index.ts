import type { authClient } from "@/features/auth/utils/auth-client";

export type Session = typeof authClient.$Infer.Session;
