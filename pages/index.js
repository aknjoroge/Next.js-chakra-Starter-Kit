import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Text, useColorMode } from "@chakra-ui/react";
import { Fragment } from "react";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box h="100vh">
      <Center h="100%">
        <Box p="5" borderRadius={"xl"} shadow={"2xl"}>
          <Box>
            <Text m={"2"} fontWeight={"bold"} fontSize="2xl">
              {colorMode.toUpperCase()} MODE
            </Text>
            <Button
              w="100%"
              colorScheme={"facebook"}
              size={"lg"}
              onClick={toggleColorMode}
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Box>
        </Box>
      </Center>
    </Box>
  );
}
