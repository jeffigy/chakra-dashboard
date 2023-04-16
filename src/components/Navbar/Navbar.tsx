import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import PageTitle from "./PageTitle";
import SearchBar from "./SearchBar";
import RightButtons from "./RightButtons";

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
      <PageTitle />
      <SearchBar />
      <RightButtons />
    </Flex>
  );
}
