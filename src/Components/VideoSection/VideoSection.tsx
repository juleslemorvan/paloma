"use client";

import {  Flex, IconButton, Text } from "@chakra-ui/react";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

export const VideoSection = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <section
      style={{
        position: "relative",
      }}
    >
      <Flex
        display={{base: isVisible ? 'flex' : 'none'}}
        direction="row"
        alignItems="center"
        bg="black"
        w="100%"
        h="3vh"
        border="2px solid black"
        p="20px"
      >
        <Text
          justifyContent="center"
          w="90%"
          align="center"
          color="whitesmoke"
          fontFamily="revert"
        >
          hello, we'll be at Las Vegas in 8th December to present out new
          product !
        </Text>
        <IconButton
          onClick={() => setIsVisible(false)}
          aria-label="close section"
          display="flex"
          justifyContent="center"
          w="5%"
          bg="black"
          icon={<IoCloseSharp color="white" size="20px" />}
        />
      </Flex>


      <video
        width="100%"
        style={{ height: "100vh", objectFit: "cover" }}
        height="100vh"
        autoPlay
        loop
        muted
      >
        <source src="video-banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "35px",
          fontFamily: "F25 Executive', sans-serif;",
          fontWeight: "bold",
        }}
      >
        Des Spiritueux craft pour le bar.
      </h1>

      <h3
        style={{
          position: "absolute",
          top: "80%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "15px",
          fontFamily: "F25 Executive', sans-serif;",
          fontWeight: "bold",
        }}
      >
        Co-creation & developpement de marques de spiritieux pour le bar, avec
        les bartenders{" "}
      </h3>
    </section>
  );
};
