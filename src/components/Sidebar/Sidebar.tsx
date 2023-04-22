import { Box, Card, CloseButton, Flex, Spacer, Text } from "@chakra-ui/react";
import ProfileAvatar from "./ProfileAvatar";
import Navlinks from "./Navlink";
import { Home, Calendar, MessageSquare, Settings, LogIn } from "react-feather";

const NavItems = [
  { name: "Home", icon: Home, to: "/" },
  { name: "Schedule", icon: Calendar, to: "/schedule" },
  { name: "Chat", icon: MessageSquare, to: "/chats" },
  { name: "Settings", icon: Settings, to: "/settings" },
  { name: "Login", icon: LogIn, to: "/login" },
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
      borderRightColor={{ base: "transparent", md: "gray.400" }}
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
