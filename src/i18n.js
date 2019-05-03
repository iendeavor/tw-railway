import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en/translation'
import zh_TW from './locales/zh-TW/translation'
import jp from './locales/jp/translation'


const resources = {
  en: {
    translation: en
  },
  jp: {
    translation: jp
  },
  zh_TW: {
    translation: zh_TW
  }
}

i18n
  .use(initReactI18next)

  .use(LanguageDetector)

  .init({
    fallbackLng: 'en',

    debug: false,
    interpolation: {
      escapeValue: false,
    },

    resources,

    react: {
      useSuspense: false,
    },
  });

export default i18n;
