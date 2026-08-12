import {
  Anchor,
  Box,
  Card,
  CardSection,
  Container,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconWorld,
} from "@tabler/icons-react";
import SectionTitle from "@/features/landing-page/components/SectionTitle";

const TheCreator = () => {
  return (
    <Box py="xl" px={{ base: "sm", sm: "md", md: "xl" }} id="the-creator">
      <Container size="lg">
        <SectionTitle
          title="ABOUT THE CREATOR"
          description="Meet Daniel Karume, the mind behind Tawi"
        />

        <SimpleGrid
          cols={{ base: 1, sm: 2 }}
          spacing={{ base: "md", md: "lg" }}
          mt="xl"
        >
          <Card shadow="sm" radius="md" withBorder>
            <CardSection>
              <Image
                src="/landing-page/daniel-karume.png"
                alt="Daniel Karume's picture"
                height={300}
                fit="cover"
                width="100%"
              />
            </CardSection>

            <Stack align="center" gap="xs" p="md">
              <Title order={5}>Daniel Karume</Title>
              <Text size="sm" c="dimmed">
                Software Engineer & Founder
              </Text>

              <Group gap="xs" mt="xs" wrap="wrap" justify="center">
                <Anchor
                  href="https://github.com/Karume-Lab"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandGithub size={20} stroke={1.5} />
                </Anchor>
                <Anchor
                  href="https://linkedin.com/in/daniel-karume/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandLinkedin size={20} stroke={1.5} />
                </Anchor>
                <Anchor
                  href="https://karume.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconWorld size={20} stroke={1.5} />
                </Anchor>
              </Group>
            </Stack>
          </Card>

          <Card shadow="sm" radius="md" withBorder>
            <Stack p="md" justify="center" style={{ height: "100%" }}>
              <Text size="md" c="dimmed">
                Hi! I'm a software engineer who loves building innovative
                software solutions. When I'm not coding, you'll probably find me
                watching anime or taking long, thoughtful walks.
              </Text>
              <Text size="md" c="dimmed">
                I enjoy exploring new technologies, sharing ideas, and
                connecting with communities over my favorite shows and life
                experiences.
              </Text>
            </Stack>
          </Card>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default TheCreator;
