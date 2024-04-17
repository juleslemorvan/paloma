"use client";

import { ChakraProvider } from "@chakra-ui/react";
import  {theme}  from "./theme/theme";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </ChakraProvider>
  );
}
