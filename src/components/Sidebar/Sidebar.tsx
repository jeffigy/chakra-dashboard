import { Box } from "@chakra-ui/react";
import React from "react";

type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <Box
      borderRight={"1px"}
      borderRightColor={"gray.700"}
      h={"full"}
      w={60}
      pos={"fixed"}
      display={{ base: "none", md: "block" }}
    ></Box>
  );
};
export default Sidebar;
