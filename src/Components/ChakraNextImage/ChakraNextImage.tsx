import { Box, type BoxProps } from "@chakra-ui/react";
import Image from "next/image";

export const ChakraNextImage = ({ src, alt, ...rest }: { src: string; alt: string } & Omit<BoxProps, "as">) => {
  return (
    <Box position="relative" {...rest}>
      <Image  fill style={{objectFit:"cover"}}  src={src} alt={alt}   />
    </Box>
  );
};

export default ChakraNextImage