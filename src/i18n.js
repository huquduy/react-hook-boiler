import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import store from 'store'
import en from './constant/langs/en'
import idn from './constant/langs/idn'

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: en
  },
  idn: {
    translation: idn
  }
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: store.get('lang') || 'idn',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

export default i18n