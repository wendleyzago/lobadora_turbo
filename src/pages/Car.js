import { useTranslation } from 'react-i18next'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CarCard from "../component/CarCard"
import "./Car.css"

const api = " http://localhost:5000/data"


const Car = () => {
    const { t } = useTranslation()
    const [selectedCar, SetSelectedCar] = useState(null)
    const {id} = useParams()

    const getSelectedCar = async (url) => {
        const data = await fetch(url)
        .then((res) => res.json())
        .then((data) => data)

        SetSelectedCar(data)
    }

    useEffect(() => {
        const url = `${api}/${id}` 

        getSelectedCar(url)
    }, [])

   
  return (
    <div className="car-page">
        {selectedCar && (
            <div>
                <CarCard car={selectedCar} showlink={true} btn={t("buy")} description={true} customH2={true}/>
            </div>
        )}
    </div>
  )
}

export default Car