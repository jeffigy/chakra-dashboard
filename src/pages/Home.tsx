import { Box, Card, Flex, GridItem, SimpleGrid } from "@chakra-ui/react";
import Layout from "components/Layout/Layout";
import React from "react";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <Layout>
      <SimpleGrid spacing={5} columns={{ base: 1, md: 2, xl: 4 }} mb={5}>
        <GridItem>
          <Card h={"150px"} bg={"brand.gradient2"}></Card>
        </GridItem>
        <GridItem>
          <Card h={"150px"} bg={"brand.gradient4"}></Card>
        </GridItem>
        <GridItem>
          <Card h={"150px"} bg={"brand.gradient3"}></Card>
        </GridItem>
        <GridItem>
          <Card h={"150px"} bg={"brand.gradient5"}></Card>
        </GridItem>
      </SimpleGrid>
      <SimpleGrid spacing={5} columns={{ base: 1, lg: 3 }}>
        <GridItem colSpan={{ base: 1, lg: 2 }}>
          <Card h={"500px"}></Card>
        </GridItem>
        <GridItem>
          <Card h={"500px"}></Card>
        </GridItem>
      </SimpleGrid>
    </Layout>
  );
};
export default Home;
