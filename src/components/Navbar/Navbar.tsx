import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function Navbar() {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={"20px"}
      position={"sticky"}
      top={0}
      height={"80px"}
      zIndex={"1"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Text>Statistics</Text>
    </Flex>
  );
}
