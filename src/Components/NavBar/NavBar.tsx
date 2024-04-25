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


// const langToFlag: Record<string, string> = {
//   en: "EN",
//   fr: "FR",
//   es: "ES",
// };

export const NavBar = () => {
  const { t, i18n } = useTranslation("navbar");

  return (
    <Stack
      as="nav"
      flex="1"
      direction={{ base: "column", md: "row" }}
      align="center"
     justifyContent={{base:"space-around",md:"space-between"}}
    >
      <Flex >
        <Link as={NextLink} href="/" textDecor="none">
      <Image src="../logopaloma.png" w="180px" h="90px" m="0px 20px" />
      </Link>
      </Flex>
      <Stack
        textAlign={{ base: "center" }}
        justifyContent="center"
        direction={{ base: "column", md: "row" }}
        gap={20} 
        mr={{base:"0",lg:"175px"}}
        fontFamily="F25 Executive, sans-serif;"
      >
        <Link as={NextLink} href="#cocktails" textDecor="none" >
          <Box  _hover={{ fontWeight:"bold"}} transition="ease 0.3s" textDecor="none">
             {t("brands")}
          </Box>
           
        </Link>
        <Link href="/news" >
          <Box _hover={{ fontWeight:"bold"}} transition="ease 0.3s">
            {t("news")}
          </Box>
          
        </Link>
        <Link href="#contact" >
          <Box _hover={{ fontWeight:"bold"}} transition="ease 0.3s">
             {t("contact")}
          </Box>
         
        </Link>
      </Stack>

    <Flex display="flex"  mr={{base:"0px",md:"60px"}}>
      <Menu>
        <MenuButton
          border={0}
          fontWeight="bold"
          aria-label="Options">
            EN
       </MenuButton>
        <MenuList minW="0px">
          <MenuItem onClick={() => i18n.changeLanguage("en")} fontWeight="bold">
            EN
          </MenuItem>
          <MenuItem onClick={() => i18n.changeLanguage("fr")} fontWeight="bold">
            <Text >FR</Text>
          </MenuItem>
          <MenuItem onClick={() => i18n.changeLanguage("es")} fontWeight="bold">
            <Text >ES</Text>
          </MenuItem>
        </MenuList>
      </Menu>
      </Flex>
    </Stack>
  );
};
