"use client";
import {
  HStack,
  Show,
  Hide,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import Link from 'next/link';
// import NextLink from 'next/link'
import { NavBar } from "../NavBar/NavBar";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect } from "react";
import { useParams } from "next/navigation";
// import { Link } from "@chakra-ui/next-js";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const params = useParams();

  useEffect(() => {
    onClose();
  }, [params]);

  return (
    <HStack
      justify="space-between"
      align="center"
      p={{ base: "30px", xl: "20px" }}
      h={{ base: "16vh", md: "15vh" }}
      bg="black"
    >
      <Hide below="md">
        <NavBar />
      </Hide>

      <Show below="md">
        <Link href="/" passHref>
        <Image src="../logopaloma.webp" alt="logo de Paloma Spirits" w="180px" h="90px" m="0px 20px" loading="lazy"/>
        </Link>
        <IconButton
          aria-label="open mobile menu"
          onClick={onOpen}
          icon={<GiHamburgerMenu size={20} color="#db9d73"/>}
          style={{ backgroundColor: "transparent" }}
        />
      </Show>
      <Drawer
        autoFocus={false}
        returnFocusOnClose={false}
        isOpen={isOpen}
        onClose={onClose}
        size="full"
        
      >
        <DrawerOverlay />
        <DrawerContent justifyContent="space-evenly" fontSize="30px">
          <DrawerCloseButton margin="30px" padding="15px" size="lg" />
          <NavBar />
        </DrawerContent>
      </Drawer>
    </HStack>
  );
};
