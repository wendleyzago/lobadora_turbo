import "./Categories.css"
import { Link } from "react-router-dom"

const Categories = () => {

  return (
    <div className="categories">

        
        <Link to="/search?q=Suv" className="categorie-suv">
        <div>
            <h2>SUV</h2>
        </div>
        </Link>
        

        <Link to="/search?q=Hatch" className="categorie-hatch">
        <div > 
            <h2>Hatch</h2>
        </div>
        </Link>

        <Link to="/search?q=Sedan" className="categorie-seda">
        <div>
            <h2>Sedan</h2>
        </div>
        </Link>

       <Link to="/search?q=Picape" className="categorie-picape">
       <div>
            <h2>Picape</h2>
        </div>
       </Link>
    </div>
  )
}

export default Categories