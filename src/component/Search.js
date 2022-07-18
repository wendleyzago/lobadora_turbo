
import { BiSearch } from 'react-icons/bi'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



import "../pages/Home.css"
import { useTranslation } from 'react-i18next'


const Search = () => {
    const { t } = useTranslation()
    const [search, setSearch] = useState("")
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(!search) {
            alert("Preencha o campo!")
        }

        navigate(`/search?q=${search[0].toUpperCase() + search.substring(1)}`)
        setSearch("")
    }



  return (
        <div className="container">
            <h2>{t("rentCar")}</h2>
            
            <form onSubmit={handleSubmit}>
                <div className="div-input">
                    <BiSearch />
                    <input 
                        type="text" 
                        placeholder={t("placeHolder")}
                        onChange={(e) => setSearch(e.target.value)}
                        value={search || ""}
                    />
                </div>
                    <button className="btn" type="submit">{t("seeOffers")}</button>
             </form>
    </div>
  )
}

export default Search