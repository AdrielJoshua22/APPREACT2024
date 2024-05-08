import { useEffect, useState } from "react"
import { mFetch } from "../../utils/mFetch"
import './ItemListContainer.css'
import { Contador } from "../contador/contador"



 export const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        mFetch()
        // .then(res => res.json())
        .then( resultado=> { 
            setProductos(resultado)
        })
        // .then(resul => console.log(resul))
        .catch( error => console.log(error) )
        .finally(()=> setIsLoading(false))
    }, [])

    console.log(productos)

    //map <- nuevo array transformadio mediante una función transformadora
    // [1,2,3,4,5,6,7] <- map <- [<li key=1 >1</li>, <li key=2 >2</li>, <li key=3 >3</li>, ....]
    return (
        <div className="card m-3"
       style={{
            display: "flex",
            flexDirection: 'row',
            flexWrap: "wrap"
        }}>
            
            { isLoading ?
                    <h2>Cargando...</h2>
                : 
                    productos.map( ({id, foto, name, price, categoria}) =>  <div key={id} className="card w-25">
                                                        <img src={foto} className="card-img-top" alt="imagen-card" />
                                                        <div className="card-body">
                                                            <h6>Nombre: {name}</h6>
                                                            <label>Precio: {price}</label>
                                                            <label>Categoria: {categoria}</label>
                                                        </div>
                                                        <div className="card-footer">
                                                            <button className='contador'>Detalle</button>
                                                            <Contador/>
                                                        </div>
                                                    </div>
                    ) 
            }
            
        </div>
    )
}

