"use client";

import { Flex, Image, Text, chakra } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import React from "react";

const Press = () => {
  const { t } = useTranslation("quotes");
  return (
    <chakra.section
      py={5}
      
      style={{
        backgroundColor: "#db9d73",
        color: "black",
        scrollMarginBlock: 0,
        scrollSnapAlign: "start none",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        gap: "20px",
      }}
      id="press"
    >
      <Flex
        direction="column"
        w="300px"
        gap={3}
        justifyContent="center"
        align="center"
      >
        <Image src="../ny-logo.png" h={"70px"} />
        <Text textAlign={"center"} fontStyle="italic" >
          {t("newyorktimes")}
        </Text>
      </Flex>

      <Flex
        direction="column"
        w="300px"
        gap={3}
        justifyContent="center"
        align="center"
      >
        <Image src="../logo-lefigaro.png" h={"70px"} />
        <Text textAlign={"center"} fontStyle="italic" >
          {t("figaro")}
        </Text>
      </Flex>

      <Flex
        direction="column"
        w="300px"
        gap={3}
        justifyContent="center"
        align="center"
      >
        <Image src="../leshardis-logo.png" h={"80px"} />
        <Text textAlign={"center"} fontStyle="italic" >
         {t("hardi")}
        </Text>
      </Flex>
    </chakra.section>
  );
};

export default Press;
