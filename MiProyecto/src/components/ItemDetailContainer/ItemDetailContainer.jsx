import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { mFetch } from "../../utils/mFetch"

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { pid } = useParams() // pid

    useEffect(()=>{ // efecto secundarío 

        mFetch(pid)
        .then(resp => setProducto(resp))
        .catch(err => console.log(err))
        .finally(()=> setIsLoading(false))

    }, [])
    

    console.log(pid)
    return (
        <div 
            // className="border border-5 border-primary  m-3" 
        >
            {isLoading ? 
                <h2>Cargando...</h2>
            :
                <ItemDetail producto={producto} />            
            }            
        </div>
    )
}
