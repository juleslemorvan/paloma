"use client"

import { CocktailsSection } from "@/Components/CocktailsSection/CocktailsSection";
import Footer from "@/Components/Footer/Footer";
import Form from "@/Components/Form/Form";
import { Header } from "@/Components/Header/Header";
import LegalAge from "@/Components/LegalAge/LegalAge";
import Press from "@/Components/Press/Press";
import {  Button, Center, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, useDisclosure } from '@chakra-ui/react'

import { VideoSection } from "@/Components/VideoSection/VideoSection";
import { useState } from "react";

export default function Home() {

 const { isOpen, onOpen, onClose } = useDisclosure()

const [isVisible, setIsVisible] = useState(true)

  return (
    <main style={{ flex: "1" }} >

      <LegalAge />
      <Header />
      <VideoSection />
      <CocktailsSection />
      <Press />
      <Form />
      <Footer />
    </main>
  );
}
