import { CocktailsSection } from "@/Components/CocktailsSection/CocktailsSection";
import Footer from "@/Components/Footer/Footer";
import Form from "@/Components/Form/Form";
import { Header } from "@/Components/Header/Header";
import Press from "@/Components/Press/Press";
import Teams from "@/Components/Teams/Teams";
import { VideoSection } from "@/Components/VideoSection/VideoSection";

export default function Home() {
  return (
    <main style={{ flex: "1" }}>
      <Header />
      <VideoSection />
      <CocktailsSection />
      <Press />
      <Form />
      <Footer />
    </main>
  );
}
