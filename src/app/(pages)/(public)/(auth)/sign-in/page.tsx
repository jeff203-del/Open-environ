import AuthFormWrapper from "@/features/auth/components/AuthFormWrapper";
import SignInForm from "@/features/auth/components/SignInForm";

const SignInPage = () => {
  return (
    <AuthFormWrapper
      otherPage={{
        title: "Don't have an account?",
        actionTitle: "Sign up",
        href: "/sign-up",
      }}
      footerActionTitle="SIGN IN"
      title="Sign in to your account"
      sideImageSrc={"/auth/sign-in.svg"}
    >
      <SignInForm />
    </AuthFormWrapper>
  );
};

export default SignInPage;
