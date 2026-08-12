import { createTheme, type MantineColorsTuple } from "@mantine/core";

const primary: MantineColorsTuple = [
  "#edf9e4",
  "#d9f3c9",
  "#b6e898",
  "#94de68",
  "#A3DA70",
  "#87c85f",
  "#6eb34f",
  "#579b40",
  "#41832f",
  "#2b6b20",
];

export const theme = createTheme({
  colors: {
    primary,
  },
  primaryColor: "primary",
});
