"use client";

import {
  Anchor,
  Burger,
  Button,
  Card,
  CardSection,
  Group,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuTarget,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import SiteLogo from "@/components/core/SiteLogo";
import { navLinks } from "@/lib/constants";

const LandingPageHeader = () => {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <Card shadow="sm" withBorder m="md" radius="md">
      <CardSection p="xs">
        <Group
          align="center"
          justify="space-between"
          wrap="nowrap"
          style={{ width: "100%" }}
        >
          <Anchor component={Link} href="/" style={{ textDecoration: "none" }}>
            <SiteLogo />
          </Anchor>

          <Group
            gap="lg"
            visibleFrom="md"
            style={{
              flexGrow: 1,
              justifyContent: "center",
            }}
          >
            {navLinks.map(({ href, label }) => (
              <Anchor
                key={label}
                href={href}
                component={Link}
                style={{ fontWeight: 500 }}
              >
                {label}
              </Anchor>
            ))}
          </Group>

          <Group gap="sm">
            <Button
              component={Link}
              href="/sign-up"
              color="primary"
              visibleFrom="md"
            >
              Get Started
            </Button>

            <Menu
              opened={opened}
              onChange={toggle}
              shadow="md"
              width="90%"
              position="bottom-end"
            >
              <MenuTarget>
                <Burger
                  opened={opened}
                  onClick={toggle}
                  hiddenFrom="md"
                  size="sm"
                  aria-label="Toggle navigation"
                />
              </MenuTarget>

              <MenuDropdown>
                {navLinks.map(({ href, label }) => (
                  <MenuItem
                    key={label}
                    component={Link}
                    href={href}
                    onClick={close}
                  >
                    {label}
                  </MenuItem>
                ))}
                <MenuItem component={Link} href="/sign-up" onClick={close}>
                  <Button fullWidth variant="light" color="primary">
                    Get Started
                  </Button>
                </MenuItem>
              </MenuDropdown>
            </Menu>
          </Group>
        </Group>
      </CardSection>
    </Card>
  );
};

export default LandingPageHeader;
