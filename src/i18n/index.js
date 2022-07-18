import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enJson from './translations/en.json'
import frJson from './translations/fr.json'
import ptBRJson from './translations/ptBR.json'



i18n.use(initReactI18next).init({
    fallbackLng: "ptBR", //user nao selecionou nada, ele abre esse default
    interpolation: {
        escapeValue: false           //usado pra nao sofrer ataques de injeção através do css ou js. porem o react ja trata disso, entao deixamos false
    }, 
    resources: {
        en: enJson,
        fr: frJson,
        ptBR: ptBRJson,
    },             
})


export default i18n