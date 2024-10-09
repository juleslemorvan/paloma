"use client";

import React, {  useRef, useState } from "react";
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
  useToast,
  Hide,
} from "@chakra-ui/react";
import ScrollTop from "../scrollTop/scrollTop";
import { useTranslation } from "react-i18next";
import emailjs from '@emailjs/browser'


const Form = () => {
  const { t, i18n } = useTranslation("form");
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
     const currentForm = form.current;
     if (currentForm == null) return;
    emailjs
      .sendForm(
        "service_yyq3d7j",
        "template_tlerafb",
        currentForm,
        "eWDMxaVvHwEsa1jUR"
      )
      .then(
        (result) => {
          toast({
            title: t("conf"),
            status: "success",
            duration: 2000,
            isClosable: false,
            position: "bottom",
          });
          setIsLoading(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.currentTarget.reset();
  };


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
        fontFamily:"Figtree, sans-serif;"
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
          fontFamily="Figtree, sans-serif;"
          my="20px"
          
        >
          {t("title")}
        </Heading>
      </Flex>

      
      <Flex direction="row" alignItems="center" justifyContent="space-evenly" w="100%">

      
      <Hide below="lg">
      <Image src="../cocktail4.webp" alt="decoration image of a cocktail" w="100px" h="150px" loading="lazy"/>
      </Hide>

        <form  ref={form} onSubmit={sendEmail}>
      <Stack spacing={5} w={{ base: "300px", md: "500px" }}>
        <FormLabel htmlFor="identity" fontFamily="Figtree, sans-serif;">
          {t("input.control1")}
          <Select
            name="type"
            isRequired
            placeholder={t("options.option1")}
            aria-label="type"
            style={{ borderColor: "#355995" }}
          >
            <option>{t("options.option2")}</option>
            <option>{t("options.option3")}</option>
            <option>{t("options.option4")}</option>
            <option>{t("options.option5")}</option>
            <option>{t("options.option6")}</option>
            <option>{t("options.option7")}</option>
            <option>{t("options.option8")}</option>
          </Select>
        </FormLabel>
        <FormControl isRequired>
          <FormLabel
            htmlFor="first-name"
            fontFamily="Figtree, sans-serif;"
          >
            {t("input.control2")}
          </FormLabel>
          <Input
            type="name"
            id="name"
            placeholder={t("placeholder.name")}
            aria-label="name"
            name="name"
            style={{ borderColor: "#355995" }}
            autoComplete="off"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor="Mail" fontFamily="Figtree, sans-serif;">
            {t("input.control3")}
          </FormLabel>
          <Input
            type="email"
            id="email"
            placeholder={t("placeholder.email")}
            aria-label="email"
            name="email"
            style={{ borderColor: "#355995" }}
            autoComplete="off"
          />
        </FormControl>

        <FormControl isRequired>
          <Text mb="8px" fontFamily="Figtree, sans-serif;">
            {t("input.control4")}
          </Text>
          <Textarea
            placeholder={t("placeholder.message")}
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
          fontFamily="Figtree, sans-serif;"
        >
          {t("button")}
        </Button>
      </Stack>
      </form>
      <Hide below="lg">
      <Image src="../cocktail5.webp" alt="decoration image of a cocktail" w="100px" h="150px" loading="lazy"/>
      </Hide>
      </Flex>
      {/* <Image src="../frise-logo.png" w="500px" h="150px" /> */}
      <Flex gap={{base:"3", md:"9"}} mt={4}>
        <Image src="../bird1.webp" alt="decoration image of a bird" w={{base:"80px",lg:"100px"}}  h={{base:"80px",md:"120px"}} loading="lazy"/>
        <Image src="../frise-cocktail1.webp" alt="decoration image of a cocktail" w={{base:"80px",lg:"100px"}}  h={{base:"80px",md:"120px"}} loading="lazy"/>
        <Image src="../frise-cocktail2.webp" alt="decoration image of a cocktail" w={{base:"80px",lg:"100px"}}  h={{base:"80px",md:"120px"}} loading="lazy"/>
        <Image src="../frise-cocktail3.webp" alt="decoration image of a cocktail" w={{base:"80px",lg:"100px"}}  h={{base:"80px",md:"120px"}} loading="lazy"/>
        <Image src="../bird2.webp" alt="decoration image of a bird" w={{base:"80px",lg:"100px"}}  h={{base:"80px",md:"120px"}} loading="lazy"/>
      </Flex>
    </section>
  );
};

export default Form;
