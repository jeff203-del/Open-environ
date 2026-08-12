"use client";

import {
  Box,
  Card,
  CardSection,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconLeaf, IconWorld } from "@tabler/icons-react";
import SectionTitle from "@/features/landing-page/components/SectionTitle";
import { getPrimaryColorHexCode } from "@/lib/utils";

const missionVisionContent = [
  {
    icon: IconLeaf,
    title: "Mission",
    headline: "Empower Learners to Take Action",
    description:
      "Tawi turns learning about climate conservation and forest preservation into an engaging, gamified experience. Earn points, unlock badges, and grow your virtual forest while making a real-world impact.",
    cta: "Start Learning",
  },
  {
    icon: IconWorld,
    title: "Vision",
    headline: "A World of Active Environmental Guardians",
    description:
      "I envision a future where everyone participates in protecting forests and the planet, combining fun, learning, and community action.",
    cta: "Join the Movement",
  },
];

const MissionVision = () => {
  return (
    <Box bg="primary.1" p={{ base: "md", sm: "lg", md: 80, lg: 120 }}>
      <SectionTitle
        title="MISSION & VISION"
        description="Why I built Tawi and what I aim to achieve"
      />

      <SimpleGrid
        cols={{ base: 1, sm: 2 }}
        spacing={{ base: "lg", md: "xl" }}
        mt="xl"
      >
        {missionVisionContent.map((item) => (
          <Card
            shadow="sm"
            radius="md"
            padding="xl"
            withBorder
            key={item.title}
          >
            <CardSection withBorder inheritPadding py="md">
              <Stack gap="xs">
                <Group p={0} m={0}>
                  <item.icon size={28} color={getPrimaryColorHexCode()} />
                  <Title order={6} c={getPrimaryColorHexCode()}>
                    {item.title}
                  </Title>
                </Group>
                <Title order={3} fw={500}>
                  {item.headline}
                </Title>
                <Text size="sm" c="dimmed">
                  {item.description}
                </Text>
              </Stack>
            </CardSection>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default MissionVision;
