import { Box, Flex } from "@chakra-ui/react";
import Navbar from "components/Navbar/Navbar";
import Sidebar from "components/Sidebar/Sidebar";
import React from "react";
type LayoutProps = {
  children: React.ReactNode;
};
export default function Layout({ children }: LayoutProps) {
  return (
    <Box minH={"100vh"}>
      <Sidebar />
      <Navbar />
      <Flex ml={{ base: 0, md: 60 }} p={"20px"}>
        <main>{children}</main>
      </Flex>
    </Box>
  );
}
