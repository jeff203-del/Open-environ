import { os } from "@orpc/server";
import { z } from "zod";
import { sendEmail } from "@/lib/utils";

export const sendEmailProcedure = os
  .input(
    z.object({
      to: z.email(),
      subject: z.string(),
      html: z.string(),
    }),
  )
  .handler(async ({ input }) => {
  const recipient = process.env.CONTACT_EMAIL ?? process.env.SMTP_USER;

  if (!recipient) {
    throw new Error("Contact email recipient is not configured");
  }

  return sendEmail({
    ...input,
    to: recipient,
  });
});
