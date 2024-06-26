import { memo } from "react"
import { propTypes } from "react-bootstrap/esm/Image"
import { Link } from "react-router-dom"


const Item = memo( ({id,foto, name, price, categoria}) => {
        console.log('Item')
        return (
            <div  className="card w-25">
                    <Link to={`/detail/${id}`}>
                        <img src={foto} className="card-img-top" alt="imagen-card" />
                    </Link>
                <div className="card-body">
                    <h6>Nombre: {name}</h6>
                    <label>Precio: {price}</label>
                    <label>Categoria: {categoria}</label>
                </div>
                {/* <div className="card-footer">
                        <button className="btn btn-outline-dark">Detalle</button>
                </div> */}
            </div> )
    }
)

export default Item