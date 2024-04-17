import { extendTheme } from "@chakra-ui/react";
import defaultTheme from "@chakra-ui/theme";

const breakpoints = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
};

const fontFamilyy= {
belleFont: "F25 Executive', sans-serif;"
}
export const theme = extendTheme({
  breakpoints,fontFamilyy
});
