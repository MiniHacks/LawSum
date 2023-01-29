import {
  Box,
  Button,
  Heading,
  HStack,
  VStack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { NextPage } from "next";

export const NavBar = (): JSX.Element => {
  return (
    <Box bg={"white"} color={"#2C344C"} py={7} top={"0"} fontFamily={"Cabin"}>
      <HStack px={"5%"} justifyContent={"space-between"}>
        <Heading
          fontFamily={"Cabin"}
          fontSize={"45px"}
          onClick={() => window.open("http://localhost:3000/landingpage")}
        >
          LegaSum
        </Heading>
        <HStack>
          <Button
            variant={"solid"}
            fontFamily={"Cabin"}
            fontSize={"18px"}
            colorScheme={"white"}
            color={"#2C344C"}
            onClick={() => window.open("http://localhost:3000/landingpage")}
          >
            Home
          </Button>
          <Button
            variant={"solid"}
            fontFamily={"Cabin"}
            fontSize={"18px"}
            colorScheme={"white"}
            color={"#2C344C"}
            onClick={() =>
              window.open("http://localhost:3000/landingpage#about-us")
            }
          >
            About Us
          </Button>
          <Button
            variant={"ghost"}
            fontFamily={"Cabin"}
            fontSize={"18px"}
            borderRadius={"25px"}
            backgroundColor={"#EECC6E"}
            color={"#2C344C"}
            colorScheme={"yellow"}
          >
            <a href={"#mailing-list"}>Mailing List</a>
          </Button>
        </HStack>
      </HStack>
    </Box>
  );
};

const TextEditor: NextPage = () => {
  return (
    <Box bg={"#2C344C"} top={"0"} fontFamily={"Cabin"}>
      <NavBar />
      <HStack
        marginTop={"0.15%"}
        w={"100%"}
        h={"700px"}
        bg={"#2C344C"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <VStack spacing={"40px"}>
          <HStack spacing={"40px"}>
            <Textarea
              placeholder={(typeof window !== 'undefined' ? localStorage.getItem("summary") : 0) || "This is where the AI-generated summary will appear"}
              size={"lg"}
              bg={"#FFFFFF"}
              borderRadius={"10px"}
              maxW={"600px"}
              maxH={"500px"}
              minW={"600px"}
              minH={"600px"}
              padding={"20px"}
            ></Textarea>
          </HStack>
        </VStack>
      </HStack>

      <HStack
        w={"100%"}
        h={"200"}
        bg={"#FFFFFF"}
        color={"#2C344C"}
        justifyContent={"center"}
        alignItems={"center"}
        fontFamily={"Cabin"}
      >
        <VStack alignItems={"center"} justifyContent={"left"}>
          <Text fontSize={"35px"}>Made for MinneHack 2023</Text>
          <Text>
            Hacked together by Brandon, Ansh, Stuti, and Brandon. We all study
            at the University of Minnesota, Twin Cities.
          </Text>
          <Text>Star us on Github and like us on Devpost.</Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default TextEditor;
