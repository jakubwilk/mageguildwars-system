import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import detector from 'i18next-browser-languagedetector'

import auth from '../../translations/pl/auth.json'
import common from '../../translations/pl/common.json'
import error from '../../translations/pl/error.json'
import profile from '../../translations/pl/profile.json'
import user from '../../translations/pl/user.json'
import validation from '../../translations/pl/validation.json'

const resources = {
  pl: {
    common,
    user,
    profile,
    validation,
    error,
    auth,
  },
}

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'pl',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
