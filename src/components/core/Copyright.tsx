import { Text } from "@mantine/core";
import dayjs from "dayjs";

const Copyright = () => {
  return (
    <Text size="sm" c="dimmed">
      &copy; {dayjs().year()} Tawi. All rights reserved.
    </Text>
  );
};

export default Copyright;
