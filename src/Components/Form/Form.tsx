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
import { useTranslation } from "react-i18next";

const Form = () => {
  const { t, i18n } = useTranslation("form");
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
          {t("title")}
        </Heading>
      </Flex>

        <form>
      <Stack spacing={5} w={{ base: "300px", md: "500px" }}>
        <FormLabel htmlFor="identity" fontFamily="F25 Executive, sans-serif;">
          {t("input.control1")}
          <Select
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
            fontFamily="F25 Executive, sans-serif;"
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
          <FormLabel htmlFor="Mail" fontFamily="F25 Executive, sans-serif;">
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
          <Text mb="8px" fontFamily="F25 Executive, sans-serif;">
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
          fontFamily="F25 Executive, sans-serif;"
        >
          {t("button")}
        </Button>
      </Stack>
      </form>
      <Image src="../frise-logo.png" w="500px" h="150px" />
    </section>
  );
};

export default Form;
