

import React from "react";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Header from "./components/Header";
import Social from "./components/Social";
import Profile from "./components/Profile";
import { Flex, Heading, IconButton, Spacer, VStack, useColorMode } from "@chakra-ui/react";


const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p="5">
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
        Tene Fonkou Romaric
        </Heading>
        <Spacer />
        <IconButton
          icon={<FaLinkedin />}
          isRound="true"
          onClick={() =>
            window.open("https://www.linkedin.com/in/rom-fonkou-7a8731244")
          }
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaInstagram />}
          isRound="true"
          onClick={() =>
            window.open("https://www.facebook.com/AntonFranicsJeejo/")
          }
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaGithub />}
          isRound="true"
          onClick={() => window.open("https://github.com/romaricte")}
        ></IconButton>
        <IconButton
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound={true}
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>
    <Header />
      <Social />
      <Profile />
    </VStack>
  );
};

export default App;
