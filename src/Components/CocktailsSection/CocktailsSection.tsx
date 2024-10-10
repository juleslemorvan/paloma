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
import ChakraNextImage from "../ChakraNextImage/ChakraNextImage"




type Product = {
  name?: string;
  icon: React.ReactElement;
  key: string
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
  webUrl?: string;
  instaUrl?: string;
  award?: string;
  award2?: string;
  speColor?: string;
  brand:string;
  mainImageSize:string
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
  brand,
 mainImageSize

}: CocktailDetailsProps) => {
  const myRef = useRef<HTMLDivElement | null>(null);
  const { inViewport, enterCount, leaveCount } = useInViewport(myRef);
  const isVisible = inViewport || enterCount > 0;

    const { t, i18n } = useTranslation("cocktails");

  return (
    <Stack
      py={10}
      w="100%"
      justifyContent="center"
      alignItems="center"
      bg={colorTheme}
    >
    
      <Image src={brandLogo} alt={brand} height="150px" width="300px" m={5} />
      
      <Flex
        flexDirection={{ base: "column", xl: "row" }}
        gap={{ base: 10, lg: 0 }}
        alignItems={{ base: "center", xl: "flex-start" }}
        
      >
        <Flex px={10}>
          <SlideFade
            in={isVisible}
            transition={{ enter: { delay: 0.3, duration: 0.5 } }}
            offsetX="-60px"
          >
            <Image loading="lazy" src={mainImage} alt="decoration of the product bottle " w={{ base: mainImageSize }} h="100%" objectFit="cover" />
          </SlideFade>
        </Flex>
        <Flex
          minW={{ base: "400px" }}
          ref={myRef}
          flex={1}
          overflow="hidden"
          px={10}
        >
          <SlideFade
            in={isVisible}
            transition={{ enter: { delay: 0.3, duration: 0.5 } }}
            offsetX="100px"
          >
            <Flex direction="column">
              <Flex flexDir="column" gap={2}>
                {texts.map((text) => (
                  <Text key={text} color={colorText} fontFamily={font}>
                    {text}
                  </Text>
                ))}
              </Flex>
              <Flex gap={5} alignItems="center" justifyContent="center" p={4} mt="10px" flexWrap="wrap">
                {products.map((product, index) => (
                  <Flex alignItems="center" direction={{base:"column",md:"column"}} key={product.key}>
                    {product.icon} 
                    <Text borderRadius="5px" p={3} color={colorText}>
                      {product.name}
                    </Text>
                  </Flex>
                ))}
              </Flex>

              <Flex  justifyContent="space-evenly" alignItems="center" flexWrap={{base:"wrap", md:"nowrap"}}>

                {award && (
                  <Box>
                    <Image src={award} alt="golden award 2017 for the San Francisco World Spirit Competition " loading="lazy" p={10}  h="200px" />
                  </Box>
                )}
              {webUrl && (
                  <Flex gap={5}>
              <Button
                onClick={() => window.open(webUrl)}
                background={colorText}
                color={colorTheme}
                fontFamily="F25 Executive, sans-serif;"
              >
                 {t("website")}
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
              )}
              
              </Flex>
            </Flex>
          </SlideFade>
        </Flex>
      </Flex>
      <Fade in={isVisible} transition={{ enter: { delay: 1, duration: 0.8 } }}>
        <Flex
          mt={15}
          dir="row"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          gap={10}
        >
          {carouselImages.map((image, index) => (
            <ChakraNextImage
              key={index}
              src={image}
              alt={image}
             
              w={{base:"450px", md:"350px"}}
              h={{base:"350px", md:"300px"}}
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
        colorTheme="#FFF2CC"
        brand="logo de la marque Aluzar"
        colorText="#264D38"
        font="Souvenir, sans-serif;"
        
        products={[
          {
            name: "Blanco 40% | 70cl / 100cl",
            icon: <Image src="../../aluzar-blanco.webp" w="45px" loading="lazy" alt= "image d'une bouteille de tequila ALuzar Blanco"/>,
            key: "1"
          },
          {
            name: "Blanco Alta Graduación 50% | 70cl",
            icon: <Image src="../../aluzar-blanco-alta.webp" w="45px" loading="lazy" alt= "image d'une bouteille de tequila ALuzar Blanco Alta Graduación"/>,
            key: "2"
          },
          {
            name: "Reposado 40% | 70cl / 100cl",
            icon: <Image src="../../aluzar-reposado.webp" w="45px" loading="lazy" alt= "image d'une bouteille de tequila ALuzar Reposado"/>,
            key: "3"
          },
         
        ]}
        
       
        texts={[
          t("aluzar.texts.text1"),
          t("aluzar.texts.text2"),
          t("aluzar.texts.text3"),
          
        ]}
        carouselImages={["../aluzar2.webp", "../aluzar4.webp", "../aluzar3.webp"]}
        mainImage="./aluzar1.webp"
        mainImageSize="300px"
        brandLogo="../logo-aluzar.webp"
      />

      <CocktailDetails
        colorTheme="#2B3D47"
        brand="logo de la marque Banhez mezcal"
        colorText="#FFFFFF"
        font="F25 Executive, sans-serif;"
        webUrl="https://www.banhezmezcal.com/"
        instaUrl="https://www.instagram.com/banhezmezcalartesanal/"
        products={[
          {
            name: "Ensamble (Espadin & Barril) 42% | 70cl / 100cl",
            icon: <Image src="../../espadin.webp" w="125px" loading="lazy" alt= "image d'une bouteille de espadin"/>,
            key: "4"
          },
          {
            name: "Tepeztate 47% | 70cl",
            icon: <Image src="../../tepeztate.webp" w="125px" loading="lazy" alt= "image d'une bouteille de Tepeztate"/>,
          key: "5"
          },
          {
            name: "Cuishe 47% | 70cl",
            icon: <Image src="../../cuishe.webp" w="125px" loading="lazy" alt="image d'une bouteille de cuishe "/>,
            key: "6"
          },
          {
            name: "Tobala 47% | 70cl",
            icon: <Image src="../../tobala.webp" w="125px" loading="lazy" alt= "image d'une bouteille de Tobala "/>,
            key: "7"
          },
            {
           
            icon: <Image src="./awards-mezcal.webp" w="400px" loading="lazy" alt= "award "/>,
            key: "8"
          },
        ]}
       
       
        texts={[
          t("banhez.texts.text1"),
          t("banhez.texts.text2"),
          t("banhez.texts.text3"),
          t("banhez.texts.text4"),
        ]}
        carouselImages={["../Banhez2.webp", "../Banhez3.webp", "../Banhez4.webp"]}
        mainImage="./Banhez1.webp"
        mainImageSize="400px"
        brandLogo="../banhez-logo.webp"
      />
      <CocktailDetails
        colorTheme="#F4B473"
        colorText="#4F4B49"
        brand="odvi armagnac"
        font="F25 Executive, sans-serif;"
        webUrl="https://www.odviarmagnac.com/"
        instaUrl="https://www.instagram.com/odviarmagnac/"
        products={[
          {
            name: "ODVI 42% | 70cl / 75cl / 100cl",
            icon: <Image src="../../odvi-bottle1.webp" w="125px" color="blue" loading="lazy" alt= "image d'une bouteille d'ODVI "/>,
            key: "9"
          },
          {
            name: "ODVI Blanche 45% | 70cl / 75cl",
            icon: <Image src="../../odvi-bottle2.webp" w="125px" color="blue"loading="lazy" alt="image d'une bouteille d'ODVI blanche "/>,
            key: "10"
          },
        ]}
        texts={[
          t("odvi.texts.text1"),
          t("odvi.texts.text2"),
          t("odvi.texts.text3"),
          t("odvi.texts.text4"),
          
        ]}
        carouselImages={["../ODVI2.webp", "../ODVI3.webp", "../ODVI4.webp"]}
        mainImage="../ODVI1.webp"
        mainImageSize="400px"
        brandLogo="../odvi-logo.webp"
      />
      <CocktailDetails
        colorTheme="#F1F1F1"
        colorText="#375172"
        brand="libelula tequila"
        font="F25 Executive, sans-serif;"
        webUrl="https://www.libelulatequila.com/"
        instaUrl="https://www.instagram.com/libelula_tequila/"
        products={[
          {
            name: "Joven 40% | 70cl",
            icon: <Image src="../../libelula-bottle.webp" w="35px" color="blue" loading="lazy" alt="image d'une bouteille de Joven "/>,
            key: "11"
          },
        ]}
        texts={[
          t("libelula.texts.text1"),
          t("libelula.texts.text2"),
          t("libelula.texts.text3"),
          t("libelula.texts.text4"),
          
        ]}
        carouselImages={[
          "../libelula2.webp",
          "../libelula3.webp",
          "../libelula4.webp",
        ]}
        mainImage="../libelula1.webp"
        mainImageSize="400px"
        brandLogo="../libelula-logo.webp"
      />
      
      
    </section>
  );
};