import { Alert, Button, Group, Text } from "@mantine/core";
import { IconMail } from "@tabler/icons-react";
import type React from "react";

interface ResetPasswordLinkSentAlertProps {
  email: string;
  onBack: () => void;
  visible: boolean;
}

const ResetPasswordLinkSentAlert: React.FC<ResetPasswordLinkSentAlertProps> = ({
  email,
  onBack,
  visible,
}) => {
  return (
    <>
      {visible && (
        <Alert
          icon={<IconMail size={20} />}
          title="Check your inbox"
          radius="md"
          variant="filled"
          mt="md"
          fw={600}
        >
          <Text size="sm" mb="sm">
            We've sent a password reset link to{" "}
            <Text span fw={600}>
              {email}
            </Text>
            . Please check your email and follow the instructions to reset your
            password.
          </Text>

          <Group justify="flex-end" mt="sm">
            <Button size="xs" onClick={onBack} variant="white">
              Resend
            </Button>
          </Group>
        </Alert>
      )}
    </>
  );
};

export default ResetPasswordLinkSentAlert;
