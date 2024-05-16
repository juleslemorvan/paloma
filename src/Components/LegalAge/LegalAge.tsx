"use client";

import {  Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const LegalAge = () => {

const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLegal, setIsLegal] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedValue = localStorage.getItem("legal_age");
      if (!storedValue) {
        onOpen();
      } else {
        setIsLegal(JSON.parse(storedValue));
      }
    }
  }, [onOpen]);

  const handleYesClick = () => {
    localStorage.setItem("legal_age", JSON.stringify(true));
    setIsLegal(true);
    onClose();
  };

  const handleNoClick = () => {
    window.open("https://www.responsibility.org/");
  };

  return (
    <>
        <Modal isOpen={isOpen && isLegal === null} onClose={onClose} size={{base:"xs",md:"md",lg:"xl"}} >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="30px" fontFamily="F25 Executive, sans-serif;">Are you of legal drinking age?</ModalHeader>
          
          <ModalBody fontFamily="F25 Executive, sans-serif;">
            You must be of legal drinking age to enter this website. By entering this site, I agree to the Terms of Service and Privacy Policy.
          </ModalBody>

          <ModalFooter justifyContent="center">
            <Button colorScheme='blue' mr={3} onClick={handleYesClick}>
              Yes
            </Button>
            <Button variant='ghost' onClick={handleNoClick}>No</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default LegalAge