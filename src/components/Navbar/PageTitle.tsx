import { Text } from "@chakra-ui/react";
import React from "react";
type PageTitleProps = {
  title: string;
};
export default function PageTitle({ title }: PageTitleProps) {
  return <Text fontSize={"25px"}>{title}</Text>;
}
