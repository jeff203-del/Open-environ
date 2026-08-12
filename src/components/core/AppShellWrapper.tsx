"use client";

import {
  Anchor,
  AppShell,
  AppShellFooter,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
  Burger,
  Group,
  NavLink,
  Stack,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconAlertCircle,
  IconLayoutDashboard,
  IconLeaf,
  IconMouse,
  IconSettings,
  IconTrophy,
  IconUser,
  IconUsersGroup,
} from "@tabler/icons-react";
import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import Copyright from "@/components/core/Copyright";
import SiteLogo from "@/components/core/SiteLogo";
import SignOutButton from "@/features/auth/components/SignOutButton";
import UserAvatar from "@/features/auth/components/UserAvatar";

interface AppShellWrapperProps extends Readonly<{ children: ReactNode }> {}

const NAV_LINKS: { label: string; leftSection: ReactNode; href: Route }[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    leftSection: <IconLayoutDashboard />,
  },
  {
    label: "Friends",
    href: "/friends",
    leftSection: <IconUsersGroup />,
  },

  {
    label: "Grow",
    href: "/grow",
    leftSection: <IconLeaf />,
  },
  {
    label: "Leaderboard",
    href: "/leaderboard",
    leftSection: <IconTrophy />,
  },
  {
    label: "Tutorial",
    href: "/tutorial",
    leftSection: <IconMouse />,
  },
  {
    label: "About",
    href: "/about",
    leftSection: <IconAlertCircle />,
  },
  {
    label: "Profile",
    href: "/profile",
    leftSection: <IconUser />,
  },
  {
    label: "Settings",
    href: "/settings",
    leftSection: <IconSettings />,
  },
];

const AppShellWrapper: React.FC<AppShellWrapperProps> = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();
  const pathname = usePathname();

  return (
    <AppShell
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShellHeader>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />

            <Anchor component={Link} href="/dashboard">
              <SiteLogo />
            </Anchor>
          </Group>

          <UserAvatar size={48} />
        </Group>
      </AppShellHeader>

      <AppShellNavbar p="md">
        <Stack justify="space-between" h="100%">
          <Stack>
            {NAV_LINKS.map(({ href, label, leftSection }) => (
              <NavLink
                key={href}
                href={href}
                component={Link}
                label={label}
                leftSection={leftSection}
                active={href === pathname}
              />
            ))}
          </Stack>

          <SignOutButton />
        </Stack>
      </AppShellNavbar>

      <AppShellMain>{children}</AppShellMain>

      <AppShellFooter p="md" ta={"center"}>
        <Copyright />
      </AppShellFooter>
    </AppShell>
  );
};

export default AppShellWrapper;
