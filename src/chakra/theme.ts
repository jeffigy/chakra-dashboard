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
      teal1: "#0ccda3",
      teal2: "#c1fcd3",
      gradient1:
        "linear-gradient(158deg, rgba(12,205,163,1) 0%, rgba(193,252,211,1) 100%)",
      gradient2:
        "linear-gradient(158deg, rgba(150,0,255,1) 0%, rgba(174,186,248,1) 100%)",
      gradient3:
        "linear-gradient(158deg, rgba(194,46,208,1) 0%, rgba(95,250,224,1) 100%)",
      gradient4:
        "linear-gradient(158deg, rgba(181,31,26,1) 0%, rgba(249,142,246,1) 100%)",
      gradient5:
        "linear-gradient(158deg, rgba(169,111,68,1) 0%, rgba(242,236,182,1) 100%)",
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
