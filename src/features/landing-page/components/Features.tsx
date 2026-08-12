import { Box, Card, Group, SimpleGrid, Text } from "@mantine/core";
import {
  IconBadge,
  IconBook2,
  IconFlame,
  IconGift,
  IconLeaf,
  IconUsers,
} from "@tabler/icons-react";
import SectionTitle from "./SectionTitle";

const features = [
  {
    uuid: crypto.randomUUID(),
    Icon: IconBook2,
    title: "Structured Lessons",
    description:
      "Engage in simple, interactive lessons with text, quizzes, and videos. Each lesson tracks your progress and rewards XP to help you grow consistently.",
  },
  {
    uuid: crypto.randomUUID(),
    Icon: IconFlame,
    title: "Streak System",
    description:
      "Maintain daily learning streaks to earn bonus XP and Matawi. Visual streak indicators and reminders keep your motivation burning strong.",
  },
  {
    uuid: crypto.randomUUID(),
    Icon: IconBadge,
    title: "Badges & Milestones",
    description:
      "Earn dynamic badges that evolve as you progress — from your first lesson to your longest streak — showcasing your learning journey.",
  },
  {
    uuid: crypto.randomUUID(),
    Icon: IconUsers,
    title: "Friends & Referrals",
    description:
      "Connect with friends, invite others to learn, and celebrate progress together. Gain XP and Matawi when your referrals join and engage.",
  },
  {
    uuid: crypto.randomUUID(),
    Icon: IconGift,
    title: "Matawi Rewards",
    description:
      "Earn Matawi, your growth currency, through learning and engagement. Redeem them for boosts, profile customizations, or eco-impact rewards.",
  },
  {
    uuid: crypto.randomUUID(),
    Icon: IconLeaf,
    title: "Eco Progression",
    description:
      "Your learning journey supports real-world conservation. Every milestone helps plant the seeds for a greener future through Tawi's mission.",
  },
];

const Features = () => {
  return (
    <Box px={{ base: "md", sm: "lg", md: 80, lg: 120 }} py="xl" id="features">
      <SectionTitle
        title="FEATURES"
        description="Explore the core mechanics."
      />

      <SimpleGrid
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing="lg"
        verticalSpacing="xl"
      >
        {features.map(({ uuid, title, description, Icon }) => (
          <Card key={uuid} p="xl" bg={"primary"} withBorder color="white">
            <Group mb="md" align="center" gap="sm">
              <Icon size={36} stroke={1.6} color="white" />
              <Text fw={600} size="lg" c="white">
                {title}
              </Text>
            </Group>
            <Text size="sm" c="white" opacity={0.9}>
              {description}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Features;
