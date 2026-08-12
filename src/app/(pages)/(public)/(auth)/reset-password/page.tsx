import AuthFormWrapper from "@/features/auth/components/AuthFormWrapper";
import ResetPasswordForm from "@/features/auth/components/ResetPasswordForm";

const ResetPasswordPage = () => {
  return (
    <AuthFormWrapper
      otherPage={{
        title: "Remember your password?",
        actionTitle: "Sign in",
        href: "/sign-in",
      }}
      footerActionTitle="SIGN IN"
      title="Reset password"
      sideImageSrc={"/auth/reset-password.svg"}
    >
      <ResetPasswordForm />
    </AuthFormWrapper>
  );
};

export default ResetPasswordPage;
