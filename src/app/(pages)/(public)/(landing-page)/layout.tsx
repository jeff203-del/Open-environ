import type React from "react";
import LandingPageAppShellWrapper from "@/features/landing-page/components/LandingPageAppShellWrapper";

interface LandingPageLayoutProps
  extends Readonly<{
    children: React.ReactNode;
  }> {}

const LandingPageLayout: React.FC<LandingPageLayoutProps> = ({ children }) => {
  return <LandingPageAppShellWrapper>{children}</LandingPageAppShellWrapper>;
};

export default LandingPageLayout;
