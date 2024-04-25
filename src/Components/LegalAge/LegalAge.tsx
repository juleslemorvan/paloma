"use client";

import {  Button, Center, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, useDisclosure } from '@chakra-ui/react'
import React, { useEffect } from 'react'

const LegalAge = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

   useEffect(() => {
    onOpen();
  }, [onClose]);

  return (
    <>
        <Modal isOpen={isOpen} onClose={onClose} size={{base:"xs",md:"md",lg:"xl"}} >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="30px" fontFamily="F25 Executive, sans-serif;">Are you of legal drinking age?</ModalHeader>
          
          <ModalBody fontFamily="F25 Executive, sans-serif;">
            You must be of legal drinking age to enter this website. By entering this site, I agree to the Terms of Service and Privacy Policy.
          </ModalBody>

          <ModalFooter justifyContent="center">
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Yes
            </Button>
            <Button variant='ghost' onClick={() => window.open("https://www.responsibility.org/")}>No</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default LegalAge