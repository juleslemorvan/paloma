"use client";
import { Link } from "@chakra-ui/next-js";
import {
  Button,
  ButtonGroup,
  IconButton,
  Image,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import LanguageMenu from "../LanguageMenu/LanguageMenu";
import { useState } from "react";

const langToFlag: Record<string, string> = {
  en: "🇬🇧",
  fr: "🇫🇷",
  es: "🇪🇸",
};

export const NavBar = () => {
  const { t, i18n } = useTranslation("navbar");

  return (
    <Stack
      as="nav"
      flex="1"
      direction={{ base: "column", md: "row" }}
      align="center"
      justify={{ base: "space-evenly", md: "space-between" }}
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

      <Menu>
        <MenuButton
          border={0}
          as={IconButton}
          aria-label="Options"
          icon={<Text fontSize={30}>{langToFlag[i18n.language]}</Text>}
          variant="outline"
        />
        <MenuList minW="0px">
          <MenuItem onClick={() => i18n.changeLanguage("en")}>
            <Text fontSize={30}>{langToFlag["en"]}</Text>
          </MenuItem>
          <MenuItem onClick={() => i18n.changeLanguage("fr")}>
            <Text fontSize={30}>{langToFlag["fr"]}</Text>
          </MenuItem>
          <MenuItem onClick={() => i18n.changeLanguage("es")}>
            <Text fontSize={30}>{langToFlag["es"]}</Text>
          </MenuItem>
        </MenuList>
      </Menu>
    </Stack>
  );
};
