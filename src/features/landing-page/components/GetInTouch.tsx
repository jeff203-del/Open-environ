"use client";

import {
  Anchor,
  Box,
  Button,
  Container,
  Group,
  Image as MantineImage,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import {
  IconCheck,
  IconMailFilled,
  IconMapPinFilled,
  IconPhoneFilled,
  IconX,
  type TablerIcon,
} from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { zod4Resolver } from "mantine-form-zod-resolver";
import Image from "next/image";
import SectionTitle from "@/features/landing-page/components/SectionTitle";
import {
  type GetInTouchWithUsSchema,
  getInTouchWithUsSchema,
} from "@/features/landing-page/validations";
import { getPrimaryColorHexCode } from "@/lib/utils";
import { ORPCTanstackClient } from "@/lib/utils/orpc";
import GetInTouchIllustration from "~/public/landing-page/get-in-touch.svg";

const contacts: { Icon: TablerIcon; label: string; href: string }[] = [
  {
    Icon: IconPhoneFilled,
    label: "+254704150182",
    href: "tel:+254704150182",
  },
  {
    Icon: IconMailFilled,
    label: "danielkarume@outlook.com",
    href: "mailto:danielkarume@outlook.com",
  },
  {
    Icon: IconMapPinFilled,
    label: "Nairobi",
    href: "https://www.google.com/maps/place/Nairobi/",
  },
];

const GetInTouch = () => {
  const form = useForm<GetInTouchWithUsSchema>({
    validate: zod4Resolver(getInTouchWithUsSchema),
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  const sendEmail = useMutation(
    ORPCTanstackClient.sendEmail.mutationOptions({
      onSuccess: () => {
        notifications.show({
          title: "Message Sent!",
          message: "Thanks for reaching out - we'll get back to you soon.",
          color: "green",
          icon: <IconCheck size={18} />,
        });
        form.reset();
      },
      onError: (error) => {
        notifications.show({
          title: "Failed to Send",
          message:
            (error as Error).message ||
            "Something went wrong. Try again later.",
          color: "red",
          icon: <IconX size={18} />,
        });
      },
    }),
  );

  const handleSubmit = (values: GetInTouchWithUsSchema) => {
    sendEmail.mutate({
      to: process.env.SMTP_USER ?? "",
      subject: `New message from ${values.fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${values.fullName}</p>
        <p><strong>Email:</strong> ${values.email}</p>
        <p><strong>Phone:</strong> ${values.phoneNumber}</p>
        <p><strong>Message:</strong></p>
        <p>${values.message}</p>
      `,
    });
  };

  return (
    <Box py="xl" px={{ base: "sm", sm: "md", md: "xl" }} id="get-in-touch">
      <Container size="lg">
        <SectionTitle
          title="GET IN TOUCH"
          description="Got feedback, questions, or collaboration ideas? We’d love to hear from you!"
        />

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" mt="xl">
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack>
              <TextInput
                label="Full Name"
                placeholder="Your name"
                withAsterisk
                disabled={sendEmail.isPending}
                {...form.getInputProps("fullName")}
              />
              <TextInput
                label="Email"
                placeholder="you@example.com"
                type="email"
                withAsterisk
                disabled={sendEmail.isPending}
                {...form.getInputProps("email")}
              />
              <TextInput
                label="Phone Number"
                placeholder="+254..."
                withAsterisk
                disabled={sendEmail.isPending}
                {...form.getInputProps("phoneNumber")}
              />
              <Textarea
                label="Message"
                placeholder="Tell us what you're thinking..."
                minRows={4}
                autosize
                withAsterisk
                disabled={sendEmail.isPending}
                {...form.getInputProps("message")}
              />
              <Button type="submit" fullWidth loading={sendEmail.isPending}>
                {sendEmail.isPending ? "Sending..." : "Send Message"}
              </Button>
            </Stack>
          </form>

          <Stack align="center" justify="space-between" gap="md">
            <MantineImage
              component={Image}
              alt="Get in touch illustration"
              src={GetInTouchIllustration}
              width={300}
              height={300}
              fit="contain"
              style={{ maxWidth: "100%" }}
            />

            <Group gap="xs" align="center" pt="md">
              {contacts.map(({ Icon, label, href }) => (
                <Anchor
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                >
                  <Group gap="xs">
                    <Icon color={getPrimaryColorHexCode()} />
                    <Text>{label}</Text>
                  </Group>
                </Anchor>
              ))}
            </Group>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default GetInTouch;
