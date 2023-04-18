import {
  extendTheme,
  useColorModeValue,
  type ThemeConfig,
} from "@chakra-ui/react";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import { Button } from "./button";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  colors: {
    brand: {
      // 100: "#242529 ", // background color
      // 200: "#DCDCDC", //light grey
      // 300: "#FFF379", // primary color
      // 400: "#AEAAA9",
      // 500: "#35353D", // dark grey
      // 600: "#FBEADC",
      // 700: "#fff7a1", // hover color
      100: "#2E424D",
      200: "#5B8291",
      300: "#98DAD9",
      400: "#EAEBED",
      tealGradient:
        "linear-gradient(158deg, rgba(12,205,163,1) 0%, rgba(193,252,211,1) 100%)",
      teal1: "#0ccda3",
      teal2: "#c1fcd3",
    },
  },
  fonts: {
    body: "Inter, sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        bg: useColorModeValue("brand.400", "brand.100"),
        color: useColorModeValue("black", "white"),
      },
    }),
  },
  components: {
    Button,
  },
});
