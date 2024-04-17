"use client";
import { Link } from "@chakra-ui/next-js";
import { Button, ButtonGroup, Image, Stack, } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";



export const NavBar = () => {
  const { t, i18n } = useTranslation("navbar");


  return (
    <Stack
      as="nav"
      flex="1"
      direction={{ base: "column", md: "row" }}
      align="center"
      justify={{base:"space-evenly", md:"space-between"}}
      
    >
      <Image src="../logopaloma.png" w="90px" h="90px" m="0px 20px" />
      <Stack
        textAlign={{ base: "center" }}
        direction={{ base: "column", md: "row" }}
        spacing="25px"
      
       
      >
        <Link href="#cocktails" fontFamily="F25 Executive', sans-serif;">
          {t("products")}
        </Link>
        <Link href="#Actuality" fontFamily="F25 Executive', sans-serif;">
          {t("actuality")}
        </Link>
        <Link href="#contact" fontFamily="F25 Executive', sans-serif;">
          {t("contact")}
        </Link>
      </Stack>

      <ButtonGroup gap={5}>

      <Button
        colorScheme={i18n.language === "en" ? "teal" : "red"}
        onClick={() => i18n.changeLanguage("en")}
      >
        English
      </Button>
      <Button
        colorScheme={i18n.language === "fr" ? "teal" : "green"}
        onClick={() => i18n.changeLanguage("fr")}
      >
        Français
      </Button>
      </ButtonGroup>
    </Stack>

  
  );
};
