import { SettingsIcon } from "@chakra-ui/icons";
import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
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
        color={"brand.600"}
        align={"center"}
        p={"15px"}
        mx={"30px"}
        borderRadius={"lg"}
        bg={isActive ? "gray.500" : "transparent"}
        _hover={{
          boxShadow: "none",
          bg: "gray.500",
        }}
        {...rest}
      >
        {icon && <Icon as={icon} mr={"15px"} />}
        <Text
          _hover={{
            textDecoration: "none",
          }}
        >
          {name}
        </Text>
      </Flex>
    </NavLink>
  );
}
