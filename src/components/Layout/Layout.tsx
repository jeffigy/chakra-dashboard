import {
  Box,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Fade,
  Flex,
  ScaleFade,
  Slide,
  useBreakpointValue,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import Navbar from "components/Navbar/Navbar";
import Sidebar from "components/Sidebar/Sidebar";
import React, { useEffect } from "react";
type LayoutProps = {
  children: React.ReactNode;
};
export default function Layout({ children }: LayoutProps) {
  const title = "Chakra Dashboard";
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
    <Box minH={"100vh"}>
      <Sidebar
        onClose={() => onClose}
        title={title}
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
          <Sidebar onClose={onClose} title={title} />
        </DrawerContent>
      </Drawer>

      <Navbar ref={btnRef} onClick={onOpen} title={title} />

      <Flex ml={{ base: 0, md: 60 }} p={"20px"}>
        <main>{children}</main>
      </Flex>
    </Box>
  );
}
