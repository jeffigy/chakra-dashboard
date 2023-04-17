import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
type DrawerButtonProps = {
  ref: any;
  onClick: () => void;
};

function DrawerButton({ ref, onClick }: DrawerButtonProps) {
  return (
    <IconButton
      display={{ base: "block", md: "none" }}
      ref={ref}
      onClick={onClick}
      icon={<HamburgerIcon />}
      aria-label={"menu"}
      variant={"secondaryOutline"}
    />
  );
}

export default DrawerButton;
