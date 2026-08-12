import { Box, Group, Text, Title } from "@mantine/core";
import { headers } from "next/headers";
import ProfileInfoCard from "@/features/auth/components/ProfileInfoCard";
import ViewProfileLink from "@/features/auth/components/ViewProfileLink";
import { auth } from "@/features/auth/utils/auth";

const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <Box px={{ base: 20, md: 40, lg: 80, xl: 200 }} py={20}>
      <Group
        my="lg"
        align="flex-start"
        justify="space-between"
        wrap="wrap"
        gap="md"
      >
        <Box w={{ base: "100%", md: "70%" }}>
          <Title className="responsiveTitle">Tell us more about yourself</Title>
          <Text c="dimmed">
            Sharing a few details helps you connect with more friends and enjoy
            a better experience on Tawi!
          </Text>
        </Box>

        <ViewProfileLink id={session?.user.id} />
      </Group>

      <ProfileInfoCard />
    </Box>
  );
};

export default ProfilePage;
