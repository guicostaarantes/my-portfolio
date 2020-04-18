import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enUS from "./en-US";
import ptBR from "./pt-BR";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    ns: ["common", "aboutme", "header"],
    defaultNS: "common",
    resources: {
      "en-US": enUS,
      "pt-BR": ptBR,
    },
    fallbackLng: ["en-US", "pt-BR"],
  });

export default i18n;
