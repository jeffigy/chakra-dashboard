import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import Navbar from "components/Navbar/Navbar";
import Sidebar from "components/Sidebar/Sidebar";
import React, { useEffect } from "react";
import { appTitle } from "../../../config";
type LayoutProps = {
  children: React.ReactNode;
};
export default function Layout({ children }: LayoutProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  // Get the current breakpoint value
  const isMobile = useBreakpointValue({ base: true, md: false });

  // Close the Drawer if the screen size is above md
  useEffect(() => {
    if (!isMobile && isOpen) {
      onClose();
    }
  }, [isMobile, isOpen, onClose]);

  return (
    <Flex flexDirection={"column"} minH={"100vh"}>
      <Sidebar
        onClose={() => onClose}
        title={appTitle}
        display={{ base: "none", md: "block" }}
      />

      <Drawer
        autoFocus={false}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        size={"full"}
      >
        <DrawerOverlay />
        <DrawerContent bg="brand.100">
          <Sidebar onClose={onClose} title={appTitle} />
        </DrawerContent>
      </Drawer>

      <Navbar btnRef={btnRef} onClick={onOpen} title={appTitle} />

      <Flex
        flex={1}
        flexDirection={"column"}
        ml={{ base: 0, md: 60 }}
        p={"20px"}
      >
        {children}
      </Flex>
    </Flex>
  );
}
