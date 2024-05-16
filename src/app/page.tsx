"use client";

import { CocktailsSection } from "@/Components/CocktailsSection/CocktailsSection";
import Footer from "@/Components/Footer/Footer";
import Form from "@/Components/Form/Form";
import { Header } from "@/Components/Header/Header";
import LegalAge from "@/Components/LegalAge/LegalAge";
import Press from "@/Components/Press/Press";
import { VideoSection } from "@/Components/VideoSection/VideoSection";
import { useEffect, useState } from "react";

export default function Home() {

  const [isLegal, setIsLegal] = useState<boolean | null>(null);

 useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedValue = localStorage.getItem("legal_age");
      setIsLegal(storedValue ? JSON.parse(storedValue) : null);
    }
  }, []);

  return (
    <main style={{ flex: "1" }}>

       {isLegal === null ?  <LegalAge />  : <></>}

      <Header />
      <VideoSection />
      <CocktailsSection />
      <Press />
      <Form />
      <Footer />
    </main>
  );
}
