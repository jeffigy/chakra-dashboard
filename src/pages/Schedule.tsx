import { Flex } from "@chakra-ui/react";
import FormikContainer from "components/Form/FormikContainer";
import Layout from "components/Layout/Layout";

function Schedule() {
  return (
    <Layout>
      <Flex justifyContent={"center"} w={"100%"}>
        <FormikContainer />
      </Flex>
    </Layout>
  );
}

export default Schedule;
