import { Flex, IconButton, MenuButton, Text } from "@chakra-ui/react";
import PageTitle from "./PageTitle";
import SearchBar from "./SearchBar";
import RightButtons from "./RightButtons";
import { HamburgerIcon } from "@chakra-ui/icons";
import DrawerButton from "./DrawerButton";

type NavbarProps = {
  btnRef: any;
  onClick: () => void;
  title: string;
};
export default function Navbar({ btnRef, onClick, title }: NavbarProps) {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={"20px"}
      position={"sticky"}
      top={0}
      height={"80px"}
      zIndex={"1"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <DrawerButton btnRef={btnRef} onClick={onClick} />
      <PageTitle title={title} />
      <SearchBar />
      <RightButtons />
    </Flex>
  );
}
