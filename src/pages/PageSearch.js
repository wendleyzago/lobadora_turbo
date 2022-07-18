import { useTranslation } from 'react-i18next'
import {useState, useEffect} from 'react'
import { useSearchParams } from "react-router-dom"
import "./PageSearch.css"

import CarCard from '../component/CarCard'
import Search from '../component/Search'

const api = " http://localhost:5000/data"


const PageSearch = () => {

const { t } = useTranslation()
const [cars, setCars] = useState([])
const [searchParams] = useSearchParams()

    const query = searchParams.get("q")

    const getSearchedCars = async (url) => {

      const data = await fetch(url)
      .then((res) => res.json())
      .then((data) => data)

      setCars(data)

    }

    const carsFilter = cars.filter((car) => car.marca == query || car.modelo == query || car.tipo == query) 

    useEffect(() => {
        const url = `${api}`

        getSearchedCars(url)
    }, [query])

  return (
    <div>
        <Search />
        <div className='search-container'>
          <h2 className='title'>{t("results")}: <span>{query}</span></h2>

          <div className='car-container'>
            {carsFilter.length === 0  && <p className="result">Nenhum resultado encontrado...</p>}
            {carsFilter && carsFilter.map((car) => <CarCard key={car.id} car={car} btn={t("details")}/>)}
          </div>

        </div>
    </div>
  )
}

export default PageSearch