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
    <Box
      bg={"white"}
      color={"#2C344C"}
      py={7}
      position={"sticky"}
      top={"0"}
      fontFamily={"Cabin"}
    >
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
              placeholder={"Enter your legal document text here"}
              size={"lg"}
              bg={"#FFFFFF"}
              borderRadius={"10px"}
              w={"600px"}
              h={"500px"}
              padding={"20px"}
            ></Textarea>

            <Textarea
              placeholder={"This is where the AI-generated summary will appear"}
              size={"lg"}
              bg={"#FFFFFF"}
              borderRadius={"10px"}
              w={"600px"}
              h={"500px"}
              padding={"20px"}
            ></Textarea>
          </HStack>
          <Box w={"100%"}>
            <Button bg={"#EECC6E"} paddingTop={"20px"} paddingBottom={"20px"}>
              Summarize
            </Button>
          </Box>
        </VStack>
      </HStack>
    </Box>
  );
};

export default TextEditor;
