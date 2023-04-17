import { BellIcon } from "@chakra-ui/icons";
import { Button, Flex, IconButton } from "@chakra-ui/react";

export default function RightButtons() {
  return (
    <Flex>
      <Button
        mr={"15px"}
        display={{ base: "none", lg: "block" }}
        size={"md"}
        variant={"primarySolid"}
      >
        Upgrade
      </Button>
      <IconButton
        variant={"secondaryOutline"}
        aria-label="Notification"
        icon={<BellIcon />}
      />
    </Flex>
  );
}
