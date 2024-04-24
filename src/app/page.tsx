import { CocktailsSection } from "@/Components/CocktailsSection/CocktailsSection";
import Footer from "@/Components/Footer/Footer";
import Form from "@/Components/Form/Form";
import { Header } from "@/Components/Header/Header";
import LegalAge from "@/Components/LegalAge/LegalAge";
import Press from "@/Components/Press/Press";

import { VideoSection } from "@/Components/VideoSection/VideoSection";

export default function Home() {
  return (
    <main style={{ flex: "1" }}>
      {/* <LegalAge /> */}
      <Header />
      <VideoSection />
      <CocktailsSection />
      <Press />
      <Form />
      <Footer />
    </main>
  );
}
