"use client";

import { Box } from '@chakra-ui/react'
import React from 'react'
import { FaArrowAltCircleUp } from 'react-icons/fa'

const ScrollTop = () => {

const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

  return (
    <Box py="4" onClick={scrollToTop} >
        <FaArrowAltCircleUp size="35px" color='aliceblue' fill="black" />
    </Box>
  )
}

export default ScrollTop