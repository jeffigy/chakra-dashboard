import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

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
          color={"brand.600"}
          _placeholder={{ color: "gray.600" }}
          focusBorderColor="brand.600"
        />
      </InputGroup>
    </Flex>
  );
}
