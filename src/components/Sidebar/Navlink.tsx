import {
  Flex,
  Icon,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
type NavlinksProps = {
  name: string;
  icon: any;
  to: string;
};

export default function Navlink({ name, icon, to, ...rest }: NavlinksProps) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <NavLink to={to}>
      <Flex
        color={useColorModeValue("black", "white")}
        bg={isActive ? "brand.gradient1" : "transparent"}
        align={"center"}
        p={"15px"}
        mx={"30px"}
        borderRadius={"lg"}
        _hover={{
          boxShadow: "none",
          bg: "brand.teal1",
          textDecoration: "none",
          fontWeight: "normal",
        }}
      >
        {icon && <Icon as={icon} mr={"15px"} />}
        <Text>{name}</Text>
      </Flex>
    </NavLink>
  );
}
