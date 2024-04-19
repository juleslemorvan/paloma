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
      }}
      id="contact"
    >
      <Flex py={2} flexWrap="wrap" direction="column">
        <Heading
          as="h2"
          style={{
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Contact Us
        </Heading>
        <Image src="../frise-logo.png" w="500px" h="150px" />
      </Flex>

      <Stack spacing={5} w="300px">
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

      <ScrollTop />
    </section>
  );
};

export default Form;
