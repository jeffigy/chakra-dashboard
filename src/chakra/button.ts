import { ComponentStyleConfig, useColorModeValue } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "xl",
    boxShadow: "none",
    _focus: {
      boxShadow: "none",
    },
  },
  variants: {
    solid: {
      bg: "brand.teal1",
      _hover: {
        bg: "brand.teal2",
      },
    },
    outline: {
      border: "1px solid",
      borderColor: "brand.teal1",
      color: "brand.teal1",
      _hover: {
        bg: "brand.teal2",
      },
    },
  },
};
