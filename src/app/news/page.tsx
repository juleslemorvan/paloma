import { Header } from "@/Components/Header/Header";
import { Badge, Box, Center, Divider, Flex, Heading, Hide, Image, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

type Product = {
  name: string;
  color: string;
};

type ArticleProps = {
  title: string;
  products: Product[];
  date: string;
  content:string
  content2?:string
  content3?:string
  img:string
  img2?:string
  img3?:string
  title2?:string
  title3?:string
};

const Article = ({img, img2,title,title2, title3, products, date, content, content2 }: ArticleProps) => {
  return (
    <Stack w="100%" as="article" >
        
        <Flex gap={2} justifyContent="space-between" alignItems="center">
            <Flex gap={2}>
        {products.map((product, index) => (
        <Box key={product.name} >
          <Badge colorScheme={product.color}>{product.name}</Badge>
        </Box>
      ))}
      </Flex>
      <Text fontSize={{base:"10px", md:"15px"}} fontWeight="bold">{date}</Text>
      </Flex> 
      <Heading as="h2" fontFamily="F25 Executive, sans-serif;" fontSize="35px">{title}</Heading>
      <Heading as="h3" fontFamily="F25 Executive,sans-serif;" fontSize="28px">{title2}</Heading>
      <Heading as="h4" fontFamily="F25 Executive, sans-serif;" fontSize="19px">{title3}</Heading>
      <Flex justifyContent="center" alignItems="center">
        <Image src={img} w="500px" h="300px" objectFit="contain"/>
        </Flex>
      <Text p="10px" fontFamily="F25 Executive, sans-serif;">{content}</Text>
      <Text p="10px" fontFamily="F25 Executive, sans-serif;">{content2}</Text>
      <Flex justifyContent="center" alignItems="center">
        <Image src={img2} w="500px" h="300px" objectFit="cover"/>
        </Flex>
      <Divider />
    </Stack>
  );
};

const news = () => {
  return (
    <main style={{ flex: "1", padding:"0px" }}>
      <Header />
      <Stack
        w="100%"
        alignContent="center"
        gap={0}
      >
        <Hide below="md">
         <Flex width="100%" justifyContent="space-around" alignItems="center" bg="#92977E" py={4}>
                    <Image src="./banhez-logo.png" w={{base:"50px",md:"200px"}} h="100px"/>
                    <Image src="./libelula-logo.png" w="200px" h="100px"/>
                    <Image src="./odvi-logo.webp" w="200px" h="100px"/>
            </Flex>
</Hide>
        <Flex direction="column"  justifyContent="center" alignItems="center" bg="whitesmoke" h="30vh">
           
          <Heading as="h1" size="4xl" fontWeight="bold" mb={4} fontFamily="F25 Executive, sans-serif;">
            News
          </Heading>
          <Heading as="h2" size="md" fontFamily="F25 Executive, sans-serif;">
            What's new for us ?
          </Heading>
        </Flex>


        <VStack display="flex" justifyContent="center" alignItems="center" gap="30px" w="100%"  p="20px">

            <Article
                products={[
                {
                 name: "Lisbon Bar Show 2024",
                 color: "blue",
                },
                {
                 name: "meetings",
                 color: "red",
                },
                {
                 name: "news",
                 color: "green",
                },
                ]}
                title="All the Paloma team attended the Lisbon Bar Show 2024 !"
                date="May 19th, 2024"
                img="./lisbon-bar-logo.png"
                img2="./lisbon-bar-show.jpg"
                content="This month, all the team met up in Portugal for the Lisbon Bar show. It was a good occasion to meet our Spanish partners."
                content2="Portugal will be a priority for the development of Paloma Spirits as one of our founders is based there. Lisbon is also booming with so many openings of cool cocktail bars.
                We met many Portuguese importers and we hope to start developing our brands there early 2025. Stay tuned !"
            />
            {/* <Article
                products={[
                {
                 name: "Banhez",
                 color: "purple",
                },
                {
                 name: "meeting",
                 color: "red",
                },
                {
                 name: "news",
                 color: "green",
                },
                ]}
                title="Mon Deuxieme article"
                title2="Mon sous titre"
                title3="Mon petit sous titre"
                date="April 03, 2024"
                content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
                img="https://picsum.photos/800"
            /> */}



        </VStack>
        
      </Stack>
    </main>
  );
};

export default news;


