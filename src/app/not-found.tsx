

import { Image } from '@chakra-ui/react';
import { Box, Flex, Heading, Stack } from '@chakra-ui/react';
import Link from 'next/link'

export default function NotFound() {
  return (
    <Stack w="100%" h="100vh" bg="black" color="#E79C6B">
      <Flex>
          <Image alt="logo Paloma Spirit" src="logopaloma.png" w="180px" h="90px" m="0px 20px" loading="lazy"/>
      </Flex>
      <Flex justifyContent="center" alignItems="center" h="100%" gap={8}>
          <Image src='frise-cocktail1.png' w="160px" h="240px" m="0px 20px" loading="lazy"/>
          <Flex justifyContent="center" alignItems="center" direction="column" h="100%" gap={9} mx="35px">
            <Heading as="h1">Oops, Error !</Heading>
            <Box textDecor="underline" fontSize="25px">
             <Link href="/">Back Home</Link>
            </Box>
          </Flex>
          <Image src='frise-cocktail3.png' w="160px" h="240px" m="0px 20px" loading="lazy"/>
      </Flex>
      
    </Stack>
  );
}
