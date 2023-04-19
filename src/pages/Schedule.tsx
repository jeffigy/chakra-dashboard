import { Card, CardBody, CardFooter, CardHeader, Flex } from "@chakra-ui/react";
import Layout from "components/Layout/Layout";

function Schedule() {
  return (
    <Layout>
      <Flex justifyContent={"center"} w={"100%"} border={"1px solid red"}>
        <Card>
          <CardHeader>Header</CardHeader>
          <CardBody>Schedule</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Flex>
    </Layout>
  );
}

export default Schedule;
