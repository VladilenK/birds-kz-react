import React from "react";
import { Image, Text, Heading, Link, Flex, Divider } from "@chakra-ui/react";

const Body = () => {
  return (
    <div>
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      paddingY="1rem"
      paddingX="1rem"
      bg="#faf9ed"
      color="white"
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.2)" // Add a subtle box shadow
    >
      <Flex align="center" mr={5}>
        <Heading as="h2" size="lg" fontWeight="bold" color={"#2b4444"}>Birds of Kazakhstan</Heading>
      </Flex>
      <Image
        borderRadius='full'
        boxSize='150px'
        src='/birds.kz.logo.png'
        alt='Dan Abramov'
      />
    </Flex>
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      paddingY="1rem"
      paddingX="1rem"
      bg="#faf9ed"
      color="white"
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.2)" // Add a subtle box shadow
    >
      <Flex align="center" mr={5}>
        <Text color={"#2b4444"}>The main goal of the site - promoting birdwatching and creation of a culture of birdwatching in the post-Soviet space and other regions. In the world, millions of people are involved in birdwatching, and these are not always observers and photographers, there are tour organizers, guides, and sellers of feeders, perches, binoculars, other optics, there are special points for bird watching. Unfortunately, we don't have this yet.</Text>
      </Flex>
    </Flex>
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      paddingY="1rem"
      paddingX="1rem"
      bg="#faf9ed"
      color="white"
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.2)" // Add a subtle box shadow
    >
      <Flex align="center" mr={5}>
        <Link color={"#2b4444"}  href='https://kz.birds.watch/' isExternal>Birds of Kazakhstan</Link>
      </Flex>
    </Flex>
    </div>
  );
};


export default Body;