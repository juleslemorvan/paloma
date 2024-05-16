import i18n from "i18next";
import en from "./locales/en.json";
import fr from "./locales/fr.json";
import es from "./locales/es.json"

import { initReactI18next } from "react-i18next";
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en,
      fr,
      es,
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
