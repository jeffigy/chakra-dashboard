import { SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";

export default function SearchBar() {
  return (
    <Flex
      flexGrow={1}
      align={"center"}
      display={{ base: "none", md: "flex" }}
      maxW={{ md: "200px", lg: "400px" }}
    >
      <InputGroup>
        <InputLeftElement pointerEvents={"none"} children={<SearchIcon />} />
        <Input
          variant={"outline"}
          placeholder="Seach something..."
          border={"none"}
          color={useColorModeValue("black", "white")}
          // _placeholder={ useColorModeValue("gray.400", "gray.600")}
          focusBorderColor={useColorModeValue("black", "white")}
        />
      </InputGroup>
    </Flex>
  );
}
