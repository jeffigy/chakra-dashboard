import { BellIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

export default function RightButtons() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex>
      <Button
        mr={"15px"}
        display={{ base: "none", lg: "block" }}
        size={"md"}
        variant={"solid"}
      >
        Upgrade
      </Button>
      <IconButton
        mr={"15px"}
        variant={"outline"}
        aria-label="Notification"
        icon={<BellIcon />}
      />
      <IconButton
        aria-label="color-mode"
        variant={"outline"}
        icon={useColorModeValue(<SunIcon />, <MoonIcon />)}
        onClick={toggleColorMode}
      />
    </Flex>
  );
}
