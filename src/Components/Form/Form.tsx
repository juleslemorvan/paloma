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
        height: "100vh",
        backgroundColor: "white",
        scrollMarginBlock: 0,
        scrollSnapAlign: "start none",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        margin:"0px 20px 10px 20px"
      }}
      id="contact"
    >
      <Flex direction="row" justifyContent="center" alignItems="center">
        <Heading as="h2" style={{margin:"0px 10px 20px 10px", fontWeight:"bold"}}>Nous Contactez</Heading>
        <Image src="../frise-logo.png" w="500px" h="150px"/>
      </Flex>
      
       <Stack spacing={5} w="60%" alignItems="center" >
        <Flex direction="column">
          <FormControl isRequired mr="20px">
            <FormLabel htmlFor="first-name">FirstName</FormLabel>
            <Input
              type="name"
              id="first-name"
              placeholder="First name"
              aria-label="First Name"
              name="name"
              style={{ borderColor: "#355995" }}
              autoComplete="off"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="first-name">LastName</FormLabel>
            <Input
              type="lastName"
              id="Last-name"
              placeholder="Last name"
              aria-label="Last Name"
              name="lastName"
              style={{ borderColor: "#355995" }}
              autoComplete="off"
            />
          </FormControl>
        </Flex>
        <FormControl isRequired>
          <FormLabel htmlFor="first-name">Mail</FormLabel>
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
            size="sm"
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
        >
          Send
        </Button>
      </Stack>
      <ScrollTop/>
    </section>
  );
};

export default Form;
