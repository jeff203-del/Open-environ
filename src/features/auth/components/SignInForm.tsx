"use client";

import {
  Anchor,
  Button,
  Checkbox,
  Group,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconMailFilled } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { zod4Resolver } from "mantine-form-zod-resolver";
import Link from "next/link";
import { authClient } from "@/features/auth/utils/auth-client";
import { type SignInSchema, signInSchema } from "@/features/auth/validations";

const SignInForm = () => {
  const form = useForm<SignInSchema>({
    validate: zod4Resolver(signInSchema),
    initialValues: {
      email: "",
      password: "",
      rememberMe: true,
    },
  });

  const mutation = useMutation({
    mutationFn: async (values: SignInSchema) => {
      return await authClient.signIn.email({
        email: values.email,
        password: values.password,
        callbackURL: "/dashboard",
      });
    },
    onSuccess: () => {
      form.reset();
      notifications.show({
        title: "Welcome back!",
        message: "You've signed in successfully.",
        color: "green",
      });
    },
    onError: (error) => {
      notifications.show({
        title: "Sign-in failed.",
        message: error.message || "An error occurred while signing you up.",
        color: "red",
      });
    },
  });

  const handleSubmit = form.onSubmit((values) => {
    mutation.mutate(values);
  });

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <TextInput
          label="Email"
          placeholder="Enter the email you used to create your account"
          rightSection={<IconMailFilled />}
          withAsterisk
          disabled={mutation.isPending}
          {...form.getInputProps("email")}
        />

        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          withAsterisk
          disabled={mutation.isPending}
          {...form.getInputProps("password")}
        />

        <Checkbox
          label="Remember me"
          {...form.getInputProps("rememberMe", { type: "checkbox" })}
        />

        <Text ta={"left"} size="sm">
          Forgot your password?{" "}
          <Anchor component={Link} href={"/reset-password"} underline="always">
            Reset
          </Anchor>
        </Text>

        <Group justify="flex-end" mt="md">
          <Button type="submit" fullWidth loading={mutation.isPending}>
            Sign in
          </Button>
        </Group>
      </Stack>
    </form>
  );
};

export default SignInForm;
