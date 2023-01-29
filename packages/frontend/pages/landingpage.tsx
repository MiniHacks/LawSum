import { Box, Button, Heading, HStack, VStack, Text, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { NextPage } from "next";
const NavBar = (): JSX.Element => {
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
        <Heading fontFamily={"Cabin"} fontSize={"45px"}>
          <a href={"#home"}>LegaSum</a>
        </Heading>
        <HStack>
          <Button
            variant={"solid"}
            fontFamily={"Cabin"}
            fontSize={"18px"}
            colorScheme={"white"}
            color={"#2C344C"}
          >
            <a href={"#home"}>Home</a>
          </Button>
          <Button
            variant={"solid"}
            fontFamily={"Cabin"}
            fontSize={"18px"}
            colorScheme={"white"}
            color={"#2C344C"}
          >
            <a href={"#about-us"}>About Us</a>
          </Button>
          <Button
            variant={"ghost"}
            fontFamily={"Cabin"}
            fontSize={"18px"}
            borderRadius={"25px"}
            backgroundColor={"#EECC6E"}
            color={"#2C344C"}
            colorScheme={"yellow"}
            variant={"solid"}
          >
            <a href={"#mailing-list"}>Mailing List</a>
          </Button>
        </HStack>
      </HStack>
    </Box>
  );
};

const Home: NextPage = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.[0]);
  };

  const handleSubmit = async () => {
    if (!file) return;
    // perform your upload logic here with the file
    const formData = new FormData();
    formData.append("file", file!);
  };
  return (
    <Box>
      <NavBar />
      <HStack justifyContent={"space-between"} paddingLeft={"5%"} mt={20}>
        <VStack alignItems={"flex-start"} spacing={0}>
          <Heading fontFamily={"Cabin"} fontSize={"60px"}>
            Simplifying
          </Heading>
          <Heading fontFamily={"Cabin"} fontSize={"60px"}>
            Complex Legislation
          </Heading>
          <Text
            fontFamily={"Cabin"}
            fontSize={"20px"}
            paddingTop={"10px"}
            paddingBottom={"40px"}
          >
            “Making sense of the legal jargon, one summary at a time.”
          </Text>
          <Input
              type="file"
              onChange={handleFileUpload}
              appearance="none"
              width="200px"
              height="50px"
              border="1px solid #EECC6E"
              borderRadius="25px"
              padding="0.5rem"
              fontFamily="Cabin"
              fontSize="18px"
              color="#2C344C"
              backgroundColor="#EECC6E"
          />
          <Button onClick={handleSubmit}>Submit</Button>
        </VStack>
        <VStack justifyContent={"center"}>
          <svg
            width={"684"}
            height={"597.6"}
            viewBox={"0 0 760 664"}
            fill={"none"}
            xmlns={"http://www.w3.org/2000/svg"}
          >
            <g clipPath={"url(#clip0_19_35)"}>
              <path
                d={
                  "M269 32C269 18.1929 280.193 7 294 7H768C781.807 7 793 18.1929 793 32V138C793 151.807 781.807 163 768 163H294C280.193 163 269 151.807 269 138V32Z"
                }
                fill={"#EECC6E"}
              />
              <path
                d={
                  "M205 217C205 203.193 216.193 192 230 192H704C717.807 192 729 203.193 729 217V323C729 336.807 717.807 348 704 348H230C216.193 348 205 336.807 205 323V217Z"
                }
                fill={"#EECC6E"}
              />
              <path
                d={
                  "M331 662C514.359 662 663 513.806 663 331C663 148.194 514.359 0 331 0C147.641 0 -1 148.194 -1 331C-1 513.806 147.641 662 331 662Z"
                }
                fill={"#2C344C"}
              />
              <path
                d={
                  "M332 615C488.297 615 615 488.297 615 332C615 175.703 488.297 49 332 49C175.703 49 49 175.703 49 332C49 488.297 175.703 615 332 615Z"
                }
                fill={"#EECC6E"}
              />
              <g filter={"url(#filter0_d_19_35)"}>
                <path
                  d={
                    "M578 332C578 468.414 467.414 579 331 579C194.586 579 84 468.414 84 332C84 195.586 194.586 85 331 85C467.414 85 578 195.586 578 332Z"
                  }
                  fill={"#2C344C"}
                />
                <path
                  d={
                    "M577.5 332C577.5 468.138 467.138 578.5 331 578.5C194.862 578.5 84.5 468.138 84.5 332C84.5 195.862 194.862 85.5 331 85.5C467.138 85.5 577.5 195.862 577.5 332Z"
                  }
                  stroke={"black"}
                />
              </g>
              <path
                fillRule={"evenodd"}
                clipRule={"evenodd"}
                d={
                  "M391.969 189.312L391.238 189.943L446.686 248.8L447.128 248.419V424C447.128 437.807 435.935 449 422.128 449H245C231.193 449 220 437.807 220 424V214.312C220 200.505 231.193 189.312 245 189.312H391.969Z"
                }
                fill={"white"}
              />
              <rect
                x={"248.54"}
                y={"223.632"}
                width={"96.3213"}
                height={"12.584"}
                rx={"6.292"}
                fill={"#2C344C"}
              />
              <rect
                x={"248.54"}
                y={"252.232"}
                width={"96.3213"}
                height={"12.584"}
                rx={"6.292"}
                fill={"#2C344C"}
              />
              <rect
                x={"248.54"}
                y={"284.264"}
                width={"168.86"}
                height={"12.584"}
                rx={"6.292"}
                fill={"#2C344C"}
              />
              <rect
                x={"248.54"}
                y={"317.44"}
                width={"168.86"}
                height={"12.584"}
                rx={"6.292"}
                fill={"#2C344C"}
              />
              <rect
                x={"248.54"}
                y={"346.04"}
                width={"168.86"}
                height={"12.584"}
                rx={"6.292"}
                fill={"#2C344C"}
              />
              <rect
                x={"248.54"}
                y={"374.64"}
                width={"168.86"}
                height={"12.584"}
                rx={"6.292"}
                fill={"#2C344C"}
              />
              <rect
                x={"248.54"}
                y={"403.24"}
                width={"168.86"}
                height={"12.584"}
                rx={"6.292"}
                fill={"#2C344C"}
              />
              <path
                d={
                  "M373.085 269.925C369.715 269.914 366.978 267.28 366.967 264.036L366.676 178.355C366.658 172.959 373.564 170.414 377.324 174.43L457.773 260.364C461.326 264.159 458.541 270.194 453.243 270.177L373.085 269.925Z"
                }
                fill={"#2C344C"}
              />
              <path
                d={
                  "M384.753 259.501C381.345 259.516 378.571 256.846 378.586 253.566L378.889 190.758C378.915 185.386 385.793 182.881 389.537 186.88L448.09 249.426C451.628 253.205 448.883 259.215 443.608 259.239L384.753 259.501Z"
                }
                fill={"white"}
              />
            </g>
            <defs>
              <filter
                id={"filter0_d_19_35"}
                x={"80"}
                y={"85"}
                width={"502"}
                height={"502"}
                filterUnits={"userSpaceOnUse"}
                colorInterpolationFilters={"sRGB"}
              >
                <feFlood floodOpacity={"0"} result={"BackgroundImageFix"} />
                <feColorMatrix
                  in={"SourceAlpha"}
                  type={"matrix"}
                  values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
                  result={"hardAlpha"}
                />
                <feOffset dy={"4"} />
                <feGaussianBlur stdDeviation={"2"} />
                <feComposite in2={"hardAlpha"} operator={"out"} />
                <feColorMatrix
                  type={"matrix"}
                  values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}
                />
                <feBlend
                  mode={"normal"}
                  in2={"BackgroundImageFix"}
                  result={"effect1_dropShadow_19_35"}
                />
                <feBlend
                  mode={"normal"}
                  in={"SourceGraphic"}
                  in2={"effect1_dropShadow_19_35"}
                  result={"shape"}
                />
              </filter>
              <clipPath id={"clip0_19_35"}>
                <rect width={"760"} height={"664"} fill={"white"} />
              </clipPath>
            </defs>
          </svg>
        </VStack>
      </HStack>

      <HStack
        marginTop={"100px"}
        w={"100%"}
        h={"600px"}
        bg={"#2C344C"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <VStack>
          <Heading
            fontFamily={"Cabin"}
            marginTop={"-100px"}
            marginBottom={"30px"}
            color={"white"}
            fontSize={"55px"}
          >
            About Us
          </Heading>
          <Text
            fontFamily={"Cabin"}
            color={"white"}
            px={"20%"}
            fontSize={"26px"}
          >
            We simplify complex legislation documents to make them easy to
            understand. Our goal is to{" "}
            <span style={{ color: "#EECC6E" }}>bring transparency</span> to the
            the legal system for all and{" "}
            <span style={{ color: "#EECC6E" }}>empower individuals</span> to
            stay informed and engaged with the laws that affect them. Whether
            you're a busy professional, a concerned citizen, or a student of the
            law, our{" "}
            <span style={{ color: "#EECC6E" }}>user-friendly tool </span>
            is the perfect resource for staying{" "}
            <span style={{ color: "#EECC6E" }}>up-to-date</span> on the latest
            legislation. Take the first step towards becoming a more informed
            and engaged citizen, and try our tool today!
          </Text>
        </VStack>
      </HStack>

      <HStack
        w={"100%"}
        h={"600px"}
        bg={"white"}
        color={"#2C344C"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <VStack>
          <Heading
            fontFamily={"Cabin"}
            marginTop={"-100px"}
            marginBottom={"30px"}
            color={"2#C344C"}
            fontSize={"55px"}
          >
            <a id={"mailing-list"}>Mailing List </a>
          </Heading>
          <Text
            fontFamily={"Cabin"}
            color={"#2C344C"}
            px={"20%"}
            fontSize={"26px"}
            paddingBottom={"20px"}
          >
            Sign up for our mailing list to receive updates on new legislation
            and other news! click the button below to sign up!
          </Text>
          <Button
            paddingX={"50px"}
            justifyContent={"left"}
            colorScheme={"yellow"}
            borderRadius={"25px"}
            onClick={() => {
              alert("Coming Soon!");
            }}
          >
            Sign Up
          </Button>
        </VStack>
      </HStack>

      <HStack
        w={"100%"}
        h={"200"}
        bg={"#2C344C"}
        color={"white"}
        justifyContent={"center"}
        alignItems={"center"}
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

export default Home;
