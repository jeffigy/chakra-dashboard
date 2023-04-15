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
    primarySolid: {
      color: "brand.100",
      bg: "brand.300",
      _hover: {
        bg: "brand.700",
      },
    },
    primaryOutline: {
      border: "1px solid",
      borderColor: "brand.300",
      color: "brand.300",
    },
    secondaryOutline: {
      border: "1px solid",
      borderColor: "brand.600",
      color: "brand.600",
    },
  },
};
