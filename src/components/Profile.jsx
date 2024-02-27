import React from "react";


import { DiReact, DiNodejsSmall, DiDart, DiAngularSimple } from "react-icons/di";
import { Box, Flex, Heading, Icon, Text, useMediaQuery } from "@chakra-ui/react";

const Profile = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <Flex
      direction={isNotSmallerScreen ? "row" : "column"}
      w="100%"
      maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
    >
      <Box alignSelf="center"  py="16">
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
          3+   
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          Years of Experience
        </Text> 
      </Box>
      <Box alignSelf="center" px="32" py="16">
        <Text fontWeight="bold" fontSize="2xl">
          Product Specialist and Developer, specialised in web app development.
        </Text>
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="blue.600"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "blue.400" }}
          >
            <Icon color="white" p="4" w="24" h="24" as={DiReact} />
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              React
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="green"
            h="30vh"
            w="30vh"
            justify="flex-end"
            ml={isNotSmallerScreen ? 4 : 0}
            _hover={{ bg: "green.400" }}
          >
            <Icon color="black" p="4" w="24" h="24" as={DiNodejsSmall} />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              Nodejs
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="blue.400"
            h="30vh"
            w="30vh"
            justify="flex-end"
            ml={isNotSmallerScreen ? 4 : 0}
            _hover={{ bg: "blue.200" }}
          >
            <Icon color="black" p="4" w="24" h="24" as={DiDart} />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              DART
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="red.600"
            h="30vh"
            w="30vh"
            justify="flex-end"
            ml={isNotSmallerScreen ? 4 : 0}
            _hover={{ bg: "red.400" }}
          >
            <Icon color="black" p="4" w="24" h="24" as={DiAngularSimple} />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              ANGULAR
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Profile;
