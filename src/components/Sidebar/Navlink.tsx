import { SettingsIcon } from "@chakra-ui/icons";
import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
type NavlinksProps = {
  name: string;
  icon: any;
  to: string;
};

export default function Navlink({ name, icon, to, ...rest }: NavlinksProps) {
  return (
    <Link to={to}>
      <Flex
        color={"brand.600"}
        align={"center"}
        p={"15px"}
        mx={"30px"}
        // my={"5px"}
        borderRadius={"lg"}
        // justifyContent={"center"}
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
    </Link>
  );
}
