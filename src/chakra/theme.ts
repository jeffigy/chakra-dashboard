import { extendTheme } from "@chakra-ui/react";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import { Button } from "./button";

export const theme = extendTheme({
  colors: {
    brand: {
      100: "#242529 ", // background color
      200: "#DCDCDC", //light grey
      300: "#FFF379", // primary color
      400: "#AEAAA9",
      500: "#35353D", // dark grey
      600: "#FBEADC",
      700: "#fff7a1", // hover color
    },
  },
  fonts: {
    body: "Inter, sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        bg: "brand.100",
      },
    }),
  },
  components: {
    Button,
  },
});
