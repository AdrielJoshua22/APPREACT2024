import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { mFetch } from "../../utils/mFetch"

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { pid } = useParams() 

useEffect(()=>{
    setIsLoading(true);
    mFetch().then((productos)=>{
        const prod = productos.find((p)=>p.id === pid);
        setProducto(prod);
        setIsLoading(false);
    })
},[pid])


    console.log(pid)
    return (
        <div>
            {isLoading ? 
                <h2>Cargando...</h2>
            :
                <ItemDetail 
                title={producto.name}
                imageUrl={producto.foto}
                price={producto.price}
                description={'imagina la sensacion del clasico cuarto de libra...s'} 
                producto={producto}/>            
            }            
        </div>
    )
}