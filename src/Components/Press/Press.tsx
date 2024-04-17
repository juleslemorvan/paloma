import { Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
const Press = () => {

 
  return (
    <section
    
      style={{
        height: "50vh",
        border:"1px solid black",
        backgroundColor: "white",
        color:"black",
        scrollMarginBlock: 0,
        scrollSnapAlign: "start none",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
          alignItems:"center",
          gap:"20px",
         
      }}
      id="press"
    >
      <Flex direction="column" w="300px">
          <Image src='../ny-logo.png' h={"70px"} />
          <Text >Among our favorites… was our No. 8 bottle, the floral, herbal Banhez, made from the cuishe agave, which might explain its quirky fresh, meadowy feeling.</Text>
      </Flex>

       <Flex >
          <Image src='../logo-lefigaro.png' h={"70px"} />
      </Flex>

      
    </section>
  )
}

export default Press