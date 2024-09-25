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
  webUrl?: string;
  instaUrl?: string;
  award?: string;
  award2?: string;
  speColor?: string;
  brand:string
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
  brand

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
      <Image
        mb={5}
        src={brandLogo}
        aspectRatio={16 / 9}
        maxH="150px"
        objectFit="contain"
        alt={brand}
      />
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
            <Image loading="lazy" src={mainImage} w={{ base: "400px" }} h="100%" objectFit="cover" />
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
              <Flex gap={5} justifyContent="center" p={4} mt="10px" flexWrap="wrap">
                {products.map((product, index) => (
                  <Flex key={product.name} alignItems="center" direction={{base:"column",md:"column"}}>
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
                    <Image src={award} loading="lazy" p={10}  h="200px" />
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
              loading="lazy"
              
              w={{base:"450px", md:"350px"}}
              h={{base:"350px", md:"300px"}}
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
        colorTheme="#FFF2CC"
        brand="logo de la marque Aluzar"
        colorText="#264D38"
        font="Souvenir, sans-serif;"
        
        products={[
          {
            name: "Blanco 40% | 70cl / 100cl",
            icon: <Image src="../../aluzar-blanco.png" w="45px" loading="lazy" alt= "image d'une bouteille de tequila ALuzar Blanco"/>,
            
          },
          {
            name: "Blanco Alta Graduación 50% | 70cl",
            icon: <Image src="../../aluzar-blanco-alta.png" w="45px" loading="lazy" alt= "image d'une bouteille de tequila ALuzar Blanco Alta Graduación"/>,
            
          },
          {
            name: "Reposado 40% | 70cl / 100cl",
            icon: <Image src="../../aluzar-reposado.png" w="45px" loading="lazy" alt= "image d'une bouteille de tequila ALuzar Reposado"/>,
            
          },
         
        ]}
        
       
        texts={[
          t("aluzar.texts.text1"),
          t("aluzar.texts.text2"),
          t("aluzar.texts.text3"),
          
        ]}
        carouselImages={["../aluzar2.png", "../aluzar4.png", "../aluzar3.png"]}
        mainImage="./aluzar1.png"
        brandLogo="../logo-aluzar.png"
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
            icon: <Image src="../../espadin.png" w="125px" loading="lazy" alt= "image d'une bouteille de espadin"/>,
            
          },
          {
            name: "Tepeztate 47% | 70cl",
            icon: <Image src="../../tepeztate.png" w="125px" loading="lazy" alt= "image d'une bouteille de Tepeztate"/>,
          },
          {
            name: "Cuishe 47% | 70cl",
            icon: <Image src="../../cuishe.png" w="125px" loading="lazy" alt="image d'une bouteille de cuishe "/>,
            
          },
          {
            name: "Tobala 47% | 70cl",
            icon: <Image src="../../tobala.png" w="125px" loading="lazy" alt= "image d'une bouteille de Tobala "/>,
            
          },
        ]}
        award="./awards-mezcal.png"
       
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
        colorTheme="#F4B473"
        colorText="#4F4B49"
        brand="odvi armagnac"
        font="F25 Executive, sans-serif;"
        webUrl="https://www.odviarmagnac.com/"
        instaUrl="https://www.instagram.com/odviarmagnac/"
        products={[
          {
            name: "ODVI 42% | 70cl / 75cl / 100cl",
            icon: <Image src="../../odvi-bottle1.png" w="125px" color="blue" loading="lazy" alt= "image d'une bouteille d'ODVI "/>,
            
          },
          {
            name: "ODVI Blanche 45% | 70cl / 75cl",
            icon: <Image src="../../odvi-bottle2.png" w="125px" color="blue"loading="lazy" alt="image d'une bouteille d'ODVI blanche "/>,
            
          },
        ]}
        texts={[
          t("odvi.texts.text1"),
          t("odvi.texts.text2"),
          t("odvi.texts.text3"),
          t("odvi.texts.text4"),
          
        ]}
        carouselImages={["../ODVI2.jpg", "../ODVI3.jpg", "../ODVI4.jpg"]}
        mainImage="../ODVI1.jpg"
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
            icon: <Image src="../../libelula-bottle.png" w="35px" color="blue" loading="lazy" alt="image d'une bouteille de Joven "/>,
            
          },
        ]}
        texts={[
          t("libelula.texts.text1"),
          t("libelula.texts.text2"),
          t("libelula.texts.text3"),
          t("libelula.texts.text4"),
          
        ]}
        carouselImages={[
          "../libelula2.jpg",
          "../libelula3.jpg",
          "../libelula4.jpg",
        ]}
        mainImage="../libelula1.jpg"
        brandLogo="../libelula-logo.png"
      />
      
      
    </section>
  );
};
