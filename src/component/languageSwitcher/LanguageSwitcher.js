

import { t } from "i18next"
import { useTranslation } from "react-i18next"
import br from "./assets/br.svg"
import fr from "./assets/fr.svg"
import us from "./assets/us.svg"

import "./LanguageSwitcher.css"


const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation()

    const languageOptions = [
        {
            name: "Português",
            value: "ptBR",
            flag: br,
        },

        {
            name: "English",
            value: "en",
            flag: us,
        },

        {
            name: "Français",
            value: "fr",
            flag: fr,
        },

    ]


  return (
    <div className="language-switcher">
        {languageOptions.map(languageOption => (
            <button onClick={() => {
                i18n.changeLanguage(languageOption.value)
            }}>
                <img src={languageOption.flag} alt={languageOption.name}/>
                <span>{languageOption.name}</span>
            </button>
        ))}
    </div>
  )
}

export default LanguageSwitcher