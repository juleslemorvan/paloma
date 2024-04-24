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
          fontWeight="bold"
          textAlign="center"
          fontFamily="F25 Executive, sans-serif;"
          my="20px"
        >
          Contact us
        </Heading>
      </Flex>

      <Stack spacing={5} w={{ base: "300px", md: "500px" }}>
        <Select
          placeholder="Select"
          aria-label="type"
          style={{ borderColor: "#355995" }}
        >
          <option>Importer</option>
          <option>Wholesaler</option>
          <option>Bar</option>
          <option>Restaurant</option>
          <option>Journalist</option>
          <option>Others</option>
        </Select>

        <FormControl isRequired>
          <FormLabel
            htmlFor="first-name"
            fontFamily="F25 Executive, sans-serif;"
          >
            Name
          </FormLabel>
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
          <FormLabel htmlFor="Mail" fontFamily="F25 Executive, sans-serif;">
            EMail
          </FormLabel>
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
          <Text mb="8px" fontFamily="F25 Executive, sans-serif;">
            {" "}
            Message
          </Text>
          <Textarea
            placeholder="Your message..."
            name="message"
            style={{ borderColor: "#355995" }}
            autoComplete="off"
            minHeight="125px"
          />
        </FormControl>

        <Button
          type="submit"
          variant="outline"
          borderColor="#355995"
          fontFamily="F25 Executive, sans-serif;"
        >
          Send
        </Button>
      </Stack>
      <Image src="../frise-logo.png" w="500px" h="150px" />
    </section>
  );
};

export default Form;
