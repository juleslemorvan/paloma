"use client";
import { Link } from "@chakra-ui/next-js";
import NextLink from 'next/link'
import {
  IconButton,
  Image,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Box,
  Flex,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";


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
     justifyContent="space-between"
    >
      <Flex >
      <Image src="../logopaloma.png" w="180px" h="90px" m="0px 20px" />
      </Flex>
      <Stack
        textAlign={{ base: "center" }}
        justifyContent="center"
        direction={{ base: "column", md: "row" }}
        gap={20} 
        mr={10}
      >
        <Link as={NextLink} href="#cocktails" fontFamily="F25 Executive', sans-serif;" >
          <Box  _hover={{ fontWeight:"bold"}} transition="ease 0.7s">
             {t("brands")}
          </Box>
           
        </Link>
        <Link href="#Actuality" fontFamily="F25 Executive', sans-serif;">
          <Box _hover={{ fontWeight:"bold"}} transition="ease 0.7s">
            {t("news")}
          </Box>
          
        </Link>
        <Link href="#contact" fontFamily="F25 Executive', sans-serif;">
          <Box _hover={{ fontWeight:"bold"}} transition="ease 0.7s">
             {t("contact")}
          </Box>
         
        </Link>
      </Stack>

    <Flex display="flex" >
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
      </Flex>
    </Stack>
  );
};
