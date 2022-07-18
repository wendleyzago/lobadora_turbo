import { BsTelephoneFill } from 'react-icons/bs'
import { FiHelpCircle } from "react-icons/fi"
import { FaCar } from "react-icons/fa"
import { Link } from 'react-router-dom'
import LanguageSwitcher from './languageSwitcher/LanguageSwitcher'

import "./Navbar.css"
import { useTranslation } from 'react-i18next'



const Navbar = () => {
  const { t } = useTranslation()
  return (

    <div>
      <LanguageSwitcher />
      <nav className="navbar">
        
        <div>
            <h1>
              <Link to="/">TURBO</Link>
            </h1>
            <p>locadora</p>
        </div>
        <div>
            <ul>
                <BsTelephoneFill /><li>{t("contact")}</li>
                <FiHelpCircle /><li>{t("help")}</li>
                <FaCar /><li>{t("myReservations")}</li>
            </ul>
        </div>
    </nav>
    </div>
  )
}

export default Navbar