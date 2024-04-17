"use client";

import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  SlideFade,
  Fade,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useInViewport } from "react-in-viewport";
import { FaInstagram } from "react-icons/fa";



type CocktailDetailsProps = {
  colorTheme: string;
  colorText: string;
  font: string;
  brandLogo: string;
  texts: string[];
  mainImage: string;
  carouselImages: string[];
  products: string[];
  webUrl: string;
  instaUrl: string;
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
}: CocktailDetailsProps) => {
  const myRef = useRef<HTMLDivElement | null>(null);
  const { inViewport, enterCount, leaveCount } = useInViewport(myRef);
  const isVisible = inViewport || enterCount > 0;

  return (
    <Stack p={10} w="100%" justifyContent="center" alignItems="center" bg={colorTheme}>
      <Image mb={10} src={brandLogo} w="200px" h="90px" />
      <Flex direction="row" alignItems="center">
        <Flex flex={1}>
          <SlideFade
            in={isVisible}
            transition={{ enter: { delay: 0.3, duration: 0.5 } }}
            offsetX="-60px"
          >
            <Image src={mainImage} h="550px" objectFit="cover" />
          </SlideFade>
        </Flex>
        <Flex flex={2}>
          <SlideFade
            in={isVisible}
            transition={{ enter: { delay: 0.3, duration: 0.5 } }}
            offsetX="60px"
          >
            <Flex direction="column">
              <Flex flexDir="column" gap={2}>
                {texts.map((text) => (
                  <Text key={text} color={colorText} fontFamily={font}>{text}</Text>
                ))}
              </Flex>
              <Flex gap={5} justifyContent="center" p={4}>
                {products.map((product) => (
                  <Text key={product} border="1px solid black" borderRadius="5px" p={3}>
                    {product}
                  </Text>
                ))}
              </Flex>
              <Flex gap={5} justifyContent="center" p={4}>
                <Button onClick={() => window.open(webUrl)} background={colorText} color={colorTheme}>
                  Website
                </Button>
                <Button background={colorText} color={colorTheme} onClick={() => window.open(instaUrl)}><FaInstagram size={20} /></Button>
              </Flex>
            </Flex>
          </SlideFade>
        </Flex>
      </Flex>
      <Fade
        in={isVisible}
        transition={{ enter: { delay: 1, duration: 0.8 } }}
      >
        <Flex
          mt={10}
          ref={myRef}
          dir="row"
          justifyContent="center"
          alignItems="center"
          gap={10}
        >
          {carouselImages.map((image) => (
            <Image key={image} src={image} w="350px" h="300px" objectFit="cover"/>
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
        colorTheme="#F1F1F1"
        colorText="#375172"
        font="'F25 Executive', sans-serif;"
        webUrl="http://google.fr"
        instaUrl="http://google.fr"
        products={["Reposado 70cl and 1L", "Blanco 70cl and 1L"]}
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
        brandLogo="../Libelula-logo.png"
      />
      <CocktailDetails
        colorTheme="#2B3D47"
        colorText="#FFFFFF"
        font="'F25 Executive', sans-serif;"
        webUrl="http://google.fr"
        instaUrl="http://google.fr"
        products={["Blanco 70cl, 100cl", "Reposado 70cl, 100cl", "High proof 70cl", "Cristalino 70cl"]}
        texts={[
          t("banhez.texts.text1"),
          t("banhez.texts.text2"),
          t("banhez.texts.text3"),
          t("banhez.texts.text4"),
        ]}
        carouselImages={[
          "../banhez2.jpg",
          "../banhez3.jpg",
          "../banhez4.jpg",
        ]}
        mainImage="../mezcal-cocktail.jpg"
        brandLogo="../banhez-logo.png"
      />
      <CocktailDetails
        colorTheme="#F4B473"
        colorText="#4F4B49"
        font="'F25 Executive', sans-serif;"
        webUrl="http://google.fr"
        instaUrl="http://google.fr"
        products={["ODVI Blanche	", "ODVI aged"]}
        texts={[
          t("odvi.texts.text1"),
          t("odvi.texts.text2"),
          t("odvi.texts.text3"),
          t("odvi.texts.text4"),
          t("odvi.texts.text5"),
        ]}
        carouselImages={[
          "../ODVI2.jpg",
          "../ODVI3.jpg",
          "../ODVI4.jpg",
        ]}
        mainImage="../ODVI1.jpg"
        brandLogo="../odvi-logo.webp"
      />
    </section>
  );
};
