"use client";

import { Avatar, Skeleton } from "@mantine/core";
import { authClient } from "@/features/auth/utils/auth-client";

interface UserAvatarProps {
  image?: string | null;
  size?: number | string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ image, size = 80 }) => {
  const { data: session, isPending } = authClient.useSession();

  const initials = session?.user?.name
    ? session.user.name.split(" ").slice(0, 2).join("")
    : session?.user.email
      ? session.user.email.slice(0, 2)
      : "?";

  if (isPending) {
    return <Skeleton height={size} width={size} circle />;
  }

  return (
    <Avatar
      src={image ?? session?.user.image ?? null}
      alt={session?.user?.name ?? "User"}
      size={size}
      color="primary"
      tt={"uppercase"}
      fw={600}
    >
      {initials}
    </Avatar>
  );
};

export default UserAvatar;
