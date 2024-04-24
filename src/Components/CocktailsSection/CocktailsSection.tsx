"use client";

import {
  Button,
  Flex,
  Image,
  Stack,
  Text,
  SlideFade,
  Fade,
  Box,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useInViewport } from "react-in-viewport";
import { FaInstagram } from "react-icons/fa";
import { FaAward } from "react-icons/fa";

type Product = {
  name: string;
  icon: React.ReactElement;
};

type CocktailDetailsProps = {
  colorTheme: string;
  colorText: string;
  font: string;
  brandLogo: string;
  texts: string[];
  mainImage: string;
  carouselImages: string[];
  products: Product[];
  webUrl: string;
  instaUrl: string;
  award?: string;
  award2?: string;
};

const CocktailDetails = ({
  colorTheme,
  colorText,
  font,
  brandLogo,
  texts,
  mainImage,
  carouselImages,
  products,
  webUrl,
  instaUrl,
  award,
  award2,
}: CocktailDetailsProps) => {
  const myRef = useRef<HTMLDivElement | null>(null);
  const { inViewport, enterCount, leaveCount } = useInViewport(myRef);
  const isVisible = inViewport || enterCount > 0;

  return (
    <Stack
      py={10}
      w="100%"
      justifyContent="center"
      alignItems="center"
      bg={colorTheme}
    >
      <Image
        mb={5}
        src={brandLogo}
        aspectRatio={16 / 9}
        maxH="150px"
        objectFit="contain"
      />
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        gap={{ base: 10, lg: 0 }}
        alignItems={{ base: "center", lg: "flex-start" }}
      >
        <Flex flex={1} px={10}>
          <SlideFade
            in={isVisible}
            transition={{ enter: { delay: 0.3, duration: 0.5 } }}
            offsetX="-60px"
          >
            <Image src={mainImage} w={{ base: "400px" }} objectFit="cover" />
          </SlideFade>
        </Flex>
        <Flex
          minW={{ base: "400px" }}
          ref={myRef}
          flex={2}
          overflow="hidden"
          px={10}
        >
          <SlideFade
            in={isVisible}
            transition={{ enter: { delay: 0.3, duration: 0.5 } }}
            offsetX="500px"
          >
            <Flex direction="column">
              <Flex flexDir="column" gap={2}>
                {texts.map((text) => (
                  <Text key={text} color={colorText} fontFamily={font}>
                    {text}
                  </Text>
                ))}
              </Flex>
              <Flex gap={5} justifyContent="center" p={4} mt="20px" flexWrap="wrap">
                {products.map((product, index) => (
                  <Flex key={product.name}>
                    {product.icon}
                    <Text borderRadius="5px" p={3} color={colorText}>
                      {product.name}
                    </Text>
                  </Flex>
                ))}
              </Flex>

              <Flex direction="row" justifyContent="center" alignContent="center" flexWrap={{base:"wrap", md:"nowrap"}}>
                {award2 && (
                  <Flex
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    color={colorText}
                  >
                    <Image
                      src="../medal2.png"
                      w={{ base: "10", md: "20" }}
                      h={{ base: "10", md: "20" }}
                    />
                    <Text
                      fontStyle="italic"
                      fontSize="15px" 
                    >
                      "{award2}"
                    </Text>
                  </Flex>
                )}

                {award && (
                  <Box>
                    <Image src={award} p={10} w="4à0px" h="200px" />
                  </Box>
                )}
              </Flex>
              <Flex direction="row" gap={2} justifyContent="space-evenly">
              <Button
                onClick={() => window.open(webUrl)}
                background={colorText}
                color={colorTheme}
                fontFamily="F25 Executive, sans-serif;"
              >
                Website
              </Button>
              <Button
                background={colorText}
                color={colorTheme}
                onClick={() => window.open(instaUrl)}
                leftIcon={<FaInstagram size={20} />}
                fontFamily="F25 Executive, sans-serif;"
              >
                Instagram
              </Button>
              </Flex>
            </Flex>
          </SlideFade>
        </Flex>
      </Flex>
      <Fade in={isVisible} transition={{ enter: { delay: 1, duration: 0.8 } }}>
        <Flex
          mt={10}
          dir="row"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          gap={10}
        >
          {carouselImages.map((image) => (
            <Image
              key={image}
              src={image}
              w="350px"
              h="300px"
              objectFit="cover"
            />
          ))}
        </Flex>
      </Fade>
    </Stack>
  );
};

export const CocktailsSection = () => {
  const { t } = useTranslation("cocktails");

  return (
    <section
      style={{
        backgroundColor: "#F1F1F1",
      }}
      id="cocktails"
    >
      <CocktailDetails
        colorTheme="#2B3D47"
        colorText="#FFFFFF"
        font="F25 Executive, sans-serif;"
        webUrl="https://www.banhezmezcal.com/"
        instaUrl="https://www.instagram.com/banhezmezcalartesanal/"
        products={[
          {
            name: "Ensamble (Espadin & Barril) 42% | 70cl / 100cl",
            icon: <Image src="../../bottle.png" w="35px" color="blue" />,
          },
          {
            name: "Tepeztate 47% | 70cl",
            icon: <Image src="../../bottle.png" w="35px" color="blue" />,
          },
          {
            name: "Cuishe 47% | 70cl",
            icon: <Image src="../../bottle.png" w="35px" color="blue" />,
          },
          {
            name: "Tobala 47% | 70cl",
            icon: <Image src="../../bottle.png" w="35px" color="blue" />,
          },
        ]}
        award="./awards-mezcal.png"
        award2="3rd most sold mezcal brand in USA in 2023"
        texts={[
          t("banhez.texts.text1"),
          t("banhez.texts.text2"),
          t("banhez.texts.text3"),
          t("banhez.texts.text4"),
        ]}
        carouselImages={["../Banhez2.jpg", "../Banhez3.jpg", "../Banhez4.jpg"]}
        mainImage="./Banhez1.jpg"
        brandLogo="../banhez-logo.png"
      />
      <CocktailDetails
        colorTheme="#F1F1F1"
        colorText="#375172"
        font="F25 Executive, sans-serif;"
        webUrl="https://www.libelulatequila.com/"
        instaUrl="https://www.instagram.com/libelula_tequila/"
        products={[
          {
            name: "Joven 40% | 70cl",
            icon: <Image src="../../bottle.png" w="35px" color="blue" />,
          },
        ]}
        texts={[
          t("libelula.texts.text1"),
          t("libelula.texts.text2"),
          t("libelula.texts.text3"),
          t("libelula.texts.text4"),
          t("libelula.texts.text5"),
        ]}
        carouselImages={[
          "../libelula2.jpg",
          "../libelula3.jpg",
          "../libelula4.jpg",
        ]}
        mainImage="../libelula1.jpg"
        brandLogo="../libelula-logo.png"
      />
      
      <CocktailDetails
        colorTheme="#F4B473"
        colorText="#4F4B49"
        font="F25 Executive, sans-serif;"
        webUrl="https://www.odviarmagnac.com/"
        instaUrl="https://www.instagram.com/odviarmagnac/"
        products={[
          {
            name: "ODVI 42% | 70cl / 75cl / 100cl",
            icon: <Image src="../../bottle.png" w="35px" color="blue" />,
          },
          {
            name: "ODVI Blanche 45% | 70cl / 75cl",
            icon: <Image src="../../bottle.png" w="35px" color="blue" />,
          },
        ]}
        texts={[
          t("odvi.texts.text1"),
          t("odvi.texts.text2"),
          t("odvi.texts.text3"),
          t("odvi.texts.text4"),
          t("odvi.texts.text5"),
        ]}
        carouselImages={["../ODVI2.jpg", "../ODVI3.jpg", "../ODVI4.jpg"]}
        mainImage="../ODVI1.jpg"
        brandLogo="../odvi-logo.webp"
      />
    </section>
  );
};
