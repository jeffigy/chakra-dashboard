import { Avatar, Button, Flex, Text } from "@chakra-ui/react";

function ProfileAvatar() {
  return (
    <Flex
      direction={"column"}
      align={"center"}
      h={60}
      justifyContent={"center"}
    >
      <Avatar size={"xl"} mb={"10px"} name="user" />
      <Text mb={"10px"}>Louis Carter</Text>
      <Button size={"xs"} variant={"outline"}>
        Edit
      </Button>
    </Flex>
  );
}

export default ProfileAvatar;
