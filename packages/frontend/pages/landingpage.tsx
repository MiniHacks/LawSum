// import { NextPage } from "next";
// import { useSession } from "next-auth/react";
import { Box, Button, Heading, HStack } from "@chakra-ui/react";

import React from "react";
// import PageLayout from "../components/Layout/PageLayout";

const NavBar = (): JSX.Element => {
  return (
    <Box color={"#2C344C"} px={"5%"} py={7} position={"sticky"} top={"0"}>
      <HStack justifyContent={"space-between"}>
        <Heading fontSize={"35px"}>LegaSum</Heading>
        <HStack>
          <Button
            colorScheme={"white"}
            color={"#2C344C"}
            onClick={() => window.open("http://localhost:3000/AboutUs")}
          >
            Home
          </Button>
          <Button
            colorScheme={"white"}
            color={"#2C344C"}
            onClick={() => window.open("http://localhost:3000/MailingList")}
          >
            About Us
          </Button>
          <Button
            borderRadius={"25px"}
            backgroundColor={"#EECC6E"}
            color={"#2C344C"}
          >
            Mailing List
          </Button>
        </HStack>
      </HStack>
    </Box>
  );
};

export default NavBar;
