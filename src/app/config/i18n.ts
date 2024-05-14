import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import auth from 'locales/auth.json'
import common from 'locales/common.json'
import notification from 'locales/notification.json'
import user from 'locales/user.json'

const resources = {
  pl: {
    auth,
    common,
    notification,
    user,
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pl',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
