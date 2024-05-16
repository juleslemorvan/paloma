"use client";
import { Link } from "@chakra-ui/next-js";
import NextLink from 'next/link'
import {
  Image,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Box,
  Flex,
  Select,
  Button,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";


export const NavBar = () => {
  const { t, i18n } = useTranslation("navbar");

const [selectedLanguage, setselectedLanguage] = useState('EN');

useEffect(() => {
if(selectedLanguage === "EN") {
i18n.changeLanguage("en")
}else if(selectedLanguage === "FR") {
  i18n.changeLanguage("fr")
}else if(selectedLanguage === "ES") {
  console.log("ok espagnol");
  
  i18n.changeLanguage("es")
}
}, [selectedLanguage])


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
        <Link as={NextLink} href="/#cocktails" _hover={{textDecoration: "none", transition:"ease 0.3s" }} >
          <Box  _hover={{fontWeight:"bold", transition:"ease 0.3s"}}  >
             {t("brands")}
          </Box> 
        </Link>

        <Link href="/news" _hover={{textDecoration: "none"}}>
          <Box _hover={{ fontWeight:"bold"}} transition="ease 0.3s">
            {t("news")}
          </Box>
        </Link>

        <Link href="/#contact" _hover={{textDecoration: "none"}}>
          <Box _hover={{ fontWeight:"bold"}} transition="ease 0.3s">
             {t("contact")}
          </Box>
        </Link>

      </Stack>

    <Flex display="flex"  mr={{base:"0px",md:"60px"}}>

     <Select value={selectedLanguage} onChange={e => setselectedLanguage(e.target.value)}>
        <option value='EN' onSelect={() => i18n.changeLanguage("en")}>EN</option>
        <option value='FR' onSelect={() => i18n.changeLanguage("fr")}>FR</option>
        <option value='ES' onSelect={() => i18n.changeLanguage("es")}>ES</option>
     </Select>

      </Flex>
    </Stack>
  );
};
