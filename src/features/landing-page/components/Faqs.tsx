"use client";

import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  ScrollArea,
} from "@mantine/core";
import SectionTitle from "@/features/landing-page/components/SectionTitle";
import { getPrimaryColorHexCode } from "@/lib/utils";

const faqs = [
  {
    value: "Who can join Tawi?",
    description:
      "Anyone passionate about learning and protecting the environment can join. Just sign up and start completing lessons to earn points and badges.",
    emoji: "🌱",
  },
  {
    value: "How do I earn points and badges?",
    description:
      "You earn points (Matawi) by completing lessons, maintaining streaks, referring friends, and participating in challenges. Badges are awarded for milestones and achievements.",
    emoji: "🏅",
  },
  {
    value: "Are the lessons free?",
    description:
      "Yes! All lessons on climate conservation, forest care, and environmental stewardship are completely free to access.",
    emoji: "📚",
  },
  {
    value: "How do my actions help real forests?",
    description:
      "Your engagement translates into real-world impact through Tawi's partner forestation initiatives and conservation projects.",
    emoji: "🌳",
  },
  {
    value: "Can I track my progress?",
    description:
      "Yes, your dashboard shows XP, streaks, badges, and forest growth based on your completed lessons and activities.",
    emoji: "📈",
  },
  {
    value: "What are Matawi?",
    description:
      "Matawi are the points you earn by completing lessons, streaks, and referrals. You can redeem them for rewards and track your ranking among friends.",
    emoji: "💰",
  },
  {
    value: "How do referrals work?",
    description:
      "Invite friends with your unique referral link. Both you and your friends earn XP and bonus streaks when they join and complete lessons.",
    emoji: "🔗",
  },
  {
    value: "Are there different lesson types?",
    description:
      "Yes, lessons can be quizzes, videos, or reading exercises, all designed to teach about climate conservation and forest care.",
    emoji: "🎓",
  },
  {
    value: "Can I see my friends' progress?",
    description:
      "Yes, you can view your friends’ XP, streaks, and badges on their profiles to foster healthy competition and collaboration.",
    emoji: "👥",
  },
  {
    value: "Is Tawi mobile-friendly?",
    description:
      "Absolutely. Tawi is designed to work on desktop and mobile devices, so you can learn and grow your forest anywhere.",
    emoji: "📱",
  },
];

const Faqs = () => {
  return (
    <Box py="xl" px={{ base: "sm", sm: "md", md: "xl" }} id="faqs">
      <Container size="lg">
        <SectionTitle
          title="FAQS"
          description="Got questions about Tawi? We have the answers!"
        />

        <ScrollArea
          type="always"
          h={400}
          p={20}
          styles={{ thumb: { backgroundColor: getPrimaryColorHexCode() } }}
        >
          <Accordion variant="separated" radius="md" mt="lg">
            {faqs.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionControl icon={item.emoji}>
                  {item.value}
                </AccordionControl>
                <AccordionPanel c="dimmed">{item.description}</AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollArea>
      </Container>
    </Box>
  );
};

export default Faqs;
