"use client";

import { Anchor, Group, Text } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import type React from "react";

interface ViewProfileLinkProps {
  id: string | undefined;
}

const ViewProfileLink: React.FC<ViewProfileLinkProps> = ({ id }) => {
  return (
    <Anchor component={Link} href="/profile" as={`/profile/${id}`}>
      <Group gap={4}>
        <Text>View Profile</Text>
        <IconChevronRight />
      </Group>
    </Anchor>
  );
};

export default ViewProfileLink;
