import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import ProfileAvatar from "./ProfileAvatar";
import Navlinks from "./Navlink";
import { CalendarIcon, ChatIcon, SettingsIcon } from "@chakra-ui/icons";

type SidebarProps = {};

const NavItems = [
  { name: "Schedule", icon: CalendarIcon, to: "/schedules" },
  { name: "Chat", icon: ChatIcon, to: "/chats" },
  { name: "Settings", icon: SettingsIcon, to: "/settings" },
];

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <Box
      borderRight={"1px"}
      borderRightColor={"gray.700"}
      h={"full"}
      w={60}
      pos={"fixed"}
      display={{ base: "none", md: "block" }}
    >
      <Flex h={"80px"} align={"center"} justifyContent={"center"}>
        <Text color={"white"}>Name here</Text>
      </Flex>
      <ProfileAvatar />

      {NavItems.map((item) => (
        <Navlinks
          key={item.name}
          name={item.name}
          icon={item.icon}
          to={item.to}
        />
      ))}
    </Box>
  );
};
export default Sidebar;
