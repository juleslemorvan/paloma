import { Head } from "next/document";
export default function CustomHead() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Paloma Spirits" />
      <meta name="keywords" content="spiritueux, rhum artisanal, cocktails, bar, développement de marques" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:type" content="website" />
      {/* <meta name="twitter:creator" content="@TonTwitterHandle" /> */}
      <link rel="canonical" href="https://www.palomaspirits.com/page-actuelle" />
    
    </>
  );
}
