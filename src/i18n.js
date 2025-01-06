import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import fa from "./locales/fa.json";
import ar from "./locales/ar.json";

i18n
  .use(LanguageDetector) // Automatically detect user language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
      fa: { translation: fa },
    },
    fallbackLng: "fa", // Default language
    interpolation: {
      escapeValue: false, // React already escapes content
    },
  });

export default i18n;
