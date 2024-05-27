"use client";
import { Link } from "@chakra-ui/next-js";
import NextLink from 'next/link'
import {
  Image,

  Stack,
  Box,
  Flex,
  Select,

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
        <Link rel="preload" as={NextLink} href="/" textDecor="none">
      <Image src="../logopaloma.png" w="180px" h="90px" m="0px 20px" />
      </Link>
      </Flex>
      <Stack
        textAlign={{ base: "center" }}
        justifyContent="center"
        direction={{ base: "column", md: "row" }}
        gap={20} 
        mr={{base:"0",lg:"175px"}}
        fontFamily="Figtree, sans-serif;"
      >
        <Link rel="preload"  href="/#cocktails"   _hover={{textDecoration: "none" }} >
          <Box  letterSpacing={{ base: "0px", md:"1px" }} _hover={{ fontWeight:"bold"}} transition="ease 0.3s" color="#db9d73">
             {t("brands")}
          </Box> 
        </Link>

        <Link rel="preload" href="/news" _hover={{textDecoration: "none"}}>
          <Box letterSpacing={{ base: "0px", md:"1px" }}_hover={{ fontWeight:"bold"}} transition="ease 0.3s" color="#db9d73">
            {t("news")}
          </Box>
        </Link>

        <Link rel="preload" href="/#contact"   _hover={{textDecoration: "none"}}>
          <Box letterSpacing={{ base: "0px", md:"1px" }} _hover={{ fontWeight:"bold"}} transition="ease 0.3s" color="#db9d73">
             {t("contact")}
          </Box>
        </Link>

      </Stack>

    <Flex display="flex"  mr={{base:"0px",md:"60px"}}>

     <Select value={selectedLanguage} onChange={e => setselectedLanguage(e.target.value)} color="#db9d73" fontWeight="bolder"  boxShadow="10%" border="1px solid black">
        <option value='EN' onSelect={() => i18n.changeLanguage("en")}>EN</option>
        <option value='FR' onSelect={() => i18n.changeLanguage("fr")}>FR</option>
        <option value='ES' onSelect={() => i18n.changeLanguage("es")}>ES</option>
     </Select>

      </Flex>
    </Stack>
  );
};
