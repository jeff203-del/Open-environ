"use client";

import {
  Anchor,
  Box,
  Button,
  Checkbox,
  PasswordInput,
  SimpleGrid,
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
import { useRouter } from "next/navigation";
import { authClient } from "@/features/auth/utils/auth-client";
import { type SignUpSchema, signUpSchema } from "@/features/auth/validations";

const SignUpForm = () => {
  const router = useRouter();

  const form = useForm<SignUpSchema>({
    initialValues: {
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      agree: false,
    },
    validate: zod4Resolver(signUpSchema),
  });

  const mutation = useMutation({
    mutationFn: async (values: typeof form.values) => {
      return authClient.signUp.email({
        email: values.email,
        password: values.password,
        name: "",
        callbackURL: "/dashboard",
      });
    },
    onSuccess: () => {
      form.reset();
      notifications.show({
        title: "Success!",
        message: "Your account has been created",
        color: "green",
      });
      router.push("/dashboard");
    },

    onError: (error) => {
      notifications.show({
        title: "Sign-up failed.",
        message: error.message ?? "An error occurred while signing you up.",
        color: "red",
      });
    },
  });

  const handleSubmit = form.onSubmit((values) => mutation.mutate(values));

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <TextInput
          label="Email"
          placeholder="Enter your email"
          rightSection={<IconMailFilled size={18} />}
          withAsterisk
          disabled={mutation.isPending}
          {...form.getInputProps("email")}
        />

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md" mb="md">
          <PasswordInput
            label="Password"
            placeholder="Enter your password"
            withAsterisk
            disabled={mutation.isPending}
            {...form.getInputProps("password")}
          />

          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm your password"
            withAsterisk
            disabled={mutation.isPending}
            {...form.getInputProps("confirmPassword")}
          />
        </SimpleGrid>

        <Box ta={"start"}>
          <Checkbox
            label="I have read and accept the terms and conditions"
            checked={form.values.agree}
            {...form.getInputProps("agree", { type: "checkbox" })}
          />
          <Text size="sm">
            By checking this box, you confirm that you have carefully reviewed
            and agree to our{" "}
            <Anchor component={Link} href="/terms">
              terms and conditions
            </Anchor>
            .
          </Text>
        </Box>

        <Button
          type="submit"
          fullWidth
          size="md"
          mt="lg"
          loading={mutation.isPending}
        >
          Sign Up
        </Button>
      </Stack>
    </form>
  );
};

export default SignUpForm;
