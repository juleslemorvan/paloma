"use client";

import React from "react";
import {
  Stack,
  FormLabel,
  Input,
  FormControl,
  Textarea,
  Text,
  Flex,
  Button,
  Heading,
  Image,
  Box,
  Select,
} from "@chakra-ui/react";
import ScrollTop from "../scrollTop/scrollTop";

const Form = () => {
  return (
    <section
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        margin: "0px 20px 10px 20px",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
      id="contact"
    >
      <Box
        position="absolute"
        bottom={{ base: "8", md: "5" }}
        right={{ base: "2", md: "6" }}
      >
        <ScrollTop />
      </Box>

      <Flex
        py={2}
        flexWrap="wrap"
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Heading
          as="h2"
          style={{
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Contact us
        </Heading>
      </Flex>

      <Stack spacing={5} w={{ base: "300px", md: "500px" }}>
        <FormLabel>You are</FormLabel>
        <Select placeholder="Select" aria-label="type" style={{ borderColor: "#355995" }}>
          <option>importer</option>
          <option>distributer</option>
          <option>bar</option>
          <option>restaurant</option>
        </Select>

        <FormControl isRequired>
          <FormLabel htmlFor="first-name">Name</FormLabel>
          <Input
            type="name"
            id="name"
            placeholder="Your name"
            aria-label="name"
            name="name"
            style={{ borderColor: "#355995" }}
            autoComplete="off"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor="Mail">Mail</FormLabel>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            aria-label="email"
            name="email"
            style={{ borderColor: "#355995" }}
            autoComplete="off"
          />
        </FormControl>

        <FormControl isRequired>
          <Text mb="8px"> Message</Text>
          <Textarea
            placeholder="Your message..."
            name="message"
            style={{ borderColor: "#355995" }}
            autoComplete="off"
            minHeight="125px"
          />
        </FormControl>

        <Button type="submit" variant="outline" borderColor="#355995">
          Send
        </Button>
      </Stack>
      <Image src="../frise-logo.png" w="500px" h="150px" />
    </section>
  );
};

export default Form;
