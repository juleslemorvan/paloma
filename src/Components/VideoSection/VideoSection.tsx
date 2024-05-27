"use client";

import { Fade, Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoCloseSharp } from "react-icons/io5";

export const VideoSection = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { t, i18n } = useTranslation("headlines");

  return (
    <section
      style={{
        position: "relative",
      }}
    >
      {/* <Flex
        display={isVisible ? "flex" : "none"}
        direction="row"
        alignItems="center"
        bg="black"
        w="100%"
        h="3vh"
        
        p="20px"
      >
        <Text
          justifyContent="center"
          alignItems="center"
          w="90%"
          align="center"
          color="whitesmoke"
           fontFamily="Figtree, sans-serif;"
          fontSize={{base: "15px", md:"20px"}}
        >
           {t("announcement")}
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
      </Flex> */}

      <video
        width="100%"
        style={{ height: "100vh", objectFit: "cover" }}
        height="100vh"
        autoPlay       
        loop
        muted
        playsInline
      >
        <source src="video-banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Flex
          position= "absolute"
          top= "50%"
          left= "50%"
          transform= "translate(-50%, -50%)"
          color= "white"
          direction="column"
          w="90%"
          alignItems="center"
      >
        <Fade in transition={{ enter: { delay: 0.1, duration: 1 } }}>
          <Heading
              as="h1"
              fontSize= {{base:"30px",md:"40px", lg:"45px"}}
              fontFamily= "F25 Executive, sans-serif;"
              fontWeight= "bold"
          >
           {t("headline1")}
          </Heading>
        </Fade>
        <Fade in transition={{ enter: { delay: 0.5, duration: 2.3 } }}>
          <Heading
                as="h3"
               fontSize= {{base:"18px",md:"20px", lg:"23px"}}
              fontFamily= "F25 Executive, sans-serif;"
       
          >
            {t("headline2")}
          </Heading>
        </Fade>
      </Flex>
    </section>
  );
};
