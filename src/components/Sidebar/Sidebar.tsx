import { Box, CloseButton, Flex, Spacer, Text } from "@chakra-ui/react";
import ProfileAvatar from "./ProfileAvatar";
import Navlinks from "./Navlink";
import { CalendarIcon, ChatIcon, SettingsIcon } from "@chakra-ui/icons";

const NavItems = [
  { name: "Home", icon: CalendarIcon, to: "/home" },
  { name: "Schedule", icon: CalendarIcon, to: "/" },
  { name: "Chat", icon: ChatIcon, to: "/chats" },
  { name: "Settings", icon: SettingsIcon, to: "/settings" },
];
type SidebarProps = {
  onClose: () => void;
  title: string;
  display?: any;
};

function Sidebar({ onClose, title, display }: SidebarProps) {
  return (
    <Box
      borderRight={"1px"}
      borderRightColor={"gray.400"}
      h={"full"}
      w={{ base: "full", md: 60 }}
      pos={"fixed"}
      display={display}
    >
      <Flex
        h={"80px"}
        mx={8}
        alignItems={"center"}
        justifyContent={{ base: "space-between", md: "center" }}
      >
        <Text>{title}</Text>
        <CloseButton
          display={{ base: "flex", md: "none" }}
          border={"1px solid"}
          onClick={onClose}
        />
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
}

export default Sidebar;
