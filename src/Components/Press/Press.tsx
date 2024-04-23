"use client";

import { Flex, Heading, Image, Text, chakra } from "@chakra-ui/react";
import React from "react";

const Press = () => {
  return (
    <chakra.section
      py={5}
      bgColor="whitesmoke"
      style={{
        backgroundColor: "whitesmoke",
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
        <Text textAlign={"center"} fontStyle="italic">
          " Among our favorites… was our No. 8 bottle, the floral, herbal
          Banhez, made from the cuishe agave, which might explain its quirky
          fresh, meadowy feeling."
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
        <Text textAlign={"center"} fontStyle="italic">
          " Selectionné comme le meilleur Mezcal pour les cocktails."
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
        <Text textAlign={"center"} fontStyle="italic">
          " ODVI, un Armagnac moderne, vif, aromatique et accessible qui répond
          parfaitement aux envies de cocktails."
        </Text>
      </Flex>
    </chakra.section>
  );
};

export default Press;
