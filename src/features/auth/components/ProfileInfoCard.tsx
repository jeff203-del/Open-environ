"use client";

import {
  ActionIcon,
  Box,
  Button,
  Group,
  Skeleton,
  Stack,
  Textarea,
  TextInput,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import {
  IconCameraFilled,
  IconCandleFilled,
  IconPhoneFilled,
  IconQuoteFilled,
  IconUserFilled,
} from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { zod4Resolver } from "mantine-form-zod-resolver";
import UserAvatar from "@/features/auth/components/UserAvatar";
import type { Session } from "@/features/auth/types";
import { authClient } from "@/features/auth/utils/auth-client";
import {
  type EditProfileInfoSchema,
  editProfileInfoSchema,
} from "@/features/auth/validations";

const ProfileInfoCard = () => {
  const { data, isPending } = authClient.useSession();

  if (isPending || !data) return <ProfileInfoSkeleton />;

  return <ProfileInfoForm data={data.user} />;
};

interface ProfileInforFormProps {
  data: Session["user"];
}

const ProfileInfoForm: React.FC<ProfileInforFormProps> = ({ data }) => {
  const form = useForm<EditProfileInfoSchema>({
    initialValues: {
      image: data.image ?? "",
      firstName: data.name.split(" ")[0] ?? "",
      lastName: data.name.split(" ")[1] ?? "",
      phoneNumber: data.phoneNumber ?? "",
      bio: data.bio ?? "",
      dob: data.dob ?? undefined,
    },
    validate: zod4Resolver(editProfileInfoSchema),
  });

  const mutation = useMutation({
    mutationFn: async (values: typeof form.values) => {
      return await authClient.updateUser({
        ...values,
        name: `${values.firstName} ${values.lastName}`,
      });
    },
    onSuccess: () => {
      form.resetDirty(form.getValues());
      notifications.show({
        title: "Success!",
        message: "Your profile information has been updated.",
        color: "green",
      });
    },
    onError: (error) => {
      notifications.show({
        title: "Failed to update profile information.",
        message:
          error.message ?? "An error occurred while updating your profile.",
        color: "red",
      });
    },
  });

  const handleSubmit = form.onSubmit((values) => mutation.mutate(values));

  const handleCancel = () => form.reset();

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <Group align="flex-start" style={{ width: "100%" }}>
          <Box
            pos="relative"
            w={150}
            h={150}
            style={{
              cursor: "pointer",
              overflow: "hidden",
              borderRadius: "50%",
              flexShrink: 0,
            }}
          >
            <UserAvatar image={form.values.image} size={150} />

            <Dropzone
              onDrop={(files) => {
                const file = files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = () => {
                  const base64 = reader.result as string;
                  form.setFieldValue("image", base64);
                };
                reader.readAsDataURL(file);
              }}
              accept={IMAGE_MIME_TYPE}
              multiple={false}
              maxSize={5 * 1024 ** 2}
              radius="xl"
              styles={{
                root: {
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "rgba(0,0,0,0.1)",
                  justifyContent: "center",
                  transition: "opacity 0.2s ease",
                },
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0";
              }}
            >
              <ActionIcon
                size={40}
                radius="xl"
                variant="filled"
                color="primary.1"
              >
                <IconCameraFilled size={22} color="black" stroke={1.8} />
              </ActionIcon>
            </Dropzone>
          </Box>

          <Box style={{ flex: 1 }}>
            <TextInput
              label="First Name"
              placeholder="Enter your first name"
              rightSection={<IconUserFilled size={18} />}
              disabled={mutation.isPending}
              {...form.getInputProps("firstName")}
              style={{ width: "100%" }}
            />
            <TextInput
              label="Last Name"
              placeholder="Enter your last name"
              rightSection={<IconUserFilled size={18} />}
              disabled={mutation.isPending}
              {...form.getInputProps("lastName")}
              style={{ width: "100%", marginTop: 12 }}
            />
          </Box>
        </Group>

        <TextInput
          label="Phone Number"
          placeholder="Enter your phone number"
          disabled={mutation.isPending}
          rightSection={<IconPhoneFilled size={18} />}
          {...form.getInputProps("phoneNumber")}
        />

        <Textarea
          label="Bio"
          placeholder="Write something exciting for your friends to see!"
          rightSection={<IconQuoteFilled size={18} />}
          disabled={mutation.isPending}
          {...form.getInputProps("bio")}
        />

        <DatePickerInput
          label="Date of Birth"
          placeholder="Select your birth date"
          description="You might get some gifts on your birthday"
          rightSection={<IconCandleFilled />}
          {...form.getInputProps("dob")}
        />

        <Group justify="end" gap="md">
          <Button variant="outline" size="md" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="submit" size="md" loading={mutation.isPending}>
            Save
          </Button>
        </Group>
      </Stack>
    </form>
  );
};

const ProfileInfoSkeleton = () => (
  <Stack px={{ base: 20, md: 40, lg: 80 }} py={20}>
    <Group align="flex-start" style={{ width: "100%" }}>
      <Skeleton circle width={150} height={150} />
      <Box style={{ flex: 1 }}>
        <Skeleton height={40} mb={12} radius="sm" />
        <Skeleton height={40} mb={12} radius="sm" />
      </Box>
    </Group>
    <Skeleton height={40} mb={12} radius="sm" />
    <Skeleton height={80} mb={12} radius="sm" />
    <Skeleton height={40} mb={12} radius="sm" />
    <Group justify="end" gap="md">
      <Skeleton width={100} height={36} radius="sm" />
      <Skeleton width={100} height={36} radius="sm" />
    </Group>
  </Stack>
);

export default ProfileInfoCard;
