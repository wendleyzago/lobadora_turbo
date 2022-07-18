import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next'
import "./CarCard.css"


const CarCard = ({car, showlink=true, btn, description}) => {

    const { t } = useTranslation()
    const convertPrice = (number) => {
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "BRL"
          })
    }

  return (
    <div className="car-container">
       
        <div className="sub-container">
            <img src={car.capa} alt={car.modelo} />
            <h2 className="customH2">{`${car.marca} ${car.modelo} ${car.tipo}`}</h2>

            {showlink && (
                <div className="valor">
                    <div className="data-car">
                        <p><span>{t("vehicleMake")}:</span> {car.marca}</p>
                        <p><span>{t("model")}:</span> {car.modelo}</p>
                        <p><span>{t("price")}:</span> {convertPrice(car.preco)}</p>
                    </div>
                
                
                    <div className="car-confirm">
                        <Link to={`/car/${car.id}`}>
                           <div className="car-link">
                            <p><span>{btn}</span></p>
                           </div>
                        </Link>
                    </div>

                </div>
                
            )}
                {description && (
                    <div className="description">
                        {car.descricao}
                    </div>
                )}
            
        </div>

        <div>
        
        </div>

        
    </div>
  )
}

export default CarCard