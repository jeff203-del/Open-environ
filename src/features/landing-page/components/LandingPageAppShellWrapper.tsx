"use client";

import { AppShell, AppShellHeader, AppShellMain } from "@mantine/core";
import { useHeadroom } from "@mantine/hooks";
import type React from "react";
import LandingPageFooter from "@/features/landing-page/components/LandingPageFooter";
import LandingPageHeader from "@/features/landing-page/components/LandingPageHeader";

interface LandingPageAppShellWrapperProps {
  children: React.ReactNode;
}

const LandingPageAppShellWrapper: React.FC<LandingPageAppShellWrapperProps> = ({
  children,
}) => {
  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <AppShell
      header={{ height: 100, offset: false, collapsed: !pinned }}
      padding="md"
    >
      <AppShellHeader
        withBorder={false}
        className={`transition-all duration-300 ${
          pinned ? "opacity-100" : "opacity-0"
        }`}
      >
        <LandingPageHeader />
      </AppShellHeader>

      <AppShellMain my="lg">{children}</AppShellMain>

      <LandingPageFooter />
    </AppShell>
  );
};

export default LandingPageAppShellWrapper;
