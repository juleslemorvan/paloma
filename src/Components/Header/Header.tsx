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
  SlideFade,
  Image,
} from "@chakra-ui/react";

import { NavBar } from "../NavBar/NavBar";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect } from "react";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    onClose();
  }, [onOpen]);

  return (
    
      <HStack
        justify="space-between"
        align="center"
        bg="transparent"
        p={{ base: "30px", xl: "20px" }}
        h={{base: "16vh", md:"15vh"}}
      >
        <Hide below="md">
          <NavBar />
        </Hide>

        <Show below="md">
          <Image src="../logopaloma.png" w="90px" h="90px" m="0px 20px" />
          <IconButton
            aria-label="open mobile menu"
            onClick={onOpen}
            icon={<GiHamburgerMenu size={20}/>}
            style={{ backgroundColor: "transparent" }}
            
          />
        </Show>
        <Drawer isOpen={isOpen} onClose={onClose} size="full">
          <DrawerOverlay />
          <DrawerContent justifyContent="space-evenly" fontSize="30px">
            <DrawerCloseButton margin="30px" padding="15px"  size="lg"/>
            <NavBar />
          </DrawerContent>
        </Drawer>
      </HStack>
    
  );
};
