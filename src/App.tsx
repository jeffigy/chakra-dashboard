import { Flex } from "@chakra-ui/react";
import Layout from "components/Layout/Layout";
import Navbar from "components/Navbar/Navbar";
import Sidebar from "components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Sidebar />
      <Navbar />
      <Flex ml={{ base: 0, md: 60 }} p={"20px"}>
        <main>body component</main>
      </Flex>
    </>
  );
}

export default App;
