"use client";

import {
  Anchor,
  BackgroundImage,
  Button,
  Card,
  Center,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import Link from "next/link";

const HeroSection = () => {
  return (
    <BackgroundImage
      src="/landing-page/karura-forest.avif"
      mt={80}
      h={{ base: 600, sm: 700, md: 800, lg: 800 }}
    >
      <Center style={{ height: "100%" }}>
        <Card
          styles={{
            root: {
              backdropFilter: "blur(5px)",
            },
          }}
          bg={"rgba(0, 0, 0, 0.4)"}
          m={{ base: 20, sm: 40 }}
          p={{ base: 20, sm: 40, md: 60 }}
          radius="lg"
          c={"white"}
        >
          <Stack gap="md" align="center">
            <Title order={1} className={"responsiveTitle"}>
              Learn, Grow, and Protect the Planet.
            </Title>
            <Text style={{ textAlign: "center" }}>
              Join Tawi, the gamified learning platform that turns every lesson
              into action for the environment. Earn points, unlock badges, and
              grow your forest while mastering climate conservation and forest
              preservation skills.
            </Text>
            <Anchor href="/sign-up" component={Link}>
              <Button size="md">Start Your Journey!</Button>
            </Anchor>
          </Stack>
        </Card>
      </Center>
    </BackgroundImage>
  );
};

export default HeroSection;
