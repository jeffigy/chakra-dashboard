import { ComponentStyleConfig } from "@chakra-ui/react";

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
      color: "brand.100",
      bg: "brand.200",
      _hover: {
        bg: "brand.300",
        color: "brand.200",
      },
    },
    outline: {
      border: "1px solid",
      borderColor: "brand.200",
      color: "brand.200",
      _hover: {
        bg: "brand.100",
      },
    },
  },
};
