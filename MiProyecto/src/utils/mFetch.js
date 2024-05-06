let productos = [
    { id: '1' ,categoria: 'Hamburguesas', name: "producto 1", stock:50, price: 37, foto:'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kPXPtaX9/200/200/original?country=ar', colores:[{nombre:'rojo', clase:''}] },
    { id: '2' ,categoria: 'Hamburguesas', name: "producto 2", stock:50, price: 27, foto:'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqX3vl0y/200/200/original?country=ar' },
    { id: '1' ,categoria: 'Hamburguesas', name: "producto 1", stock:50, price: 37, foto:'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kPXPtaX9/200/200/original?country=ar', colores:[{nombre:'rojo', clase:''}] },
    { id: '4' ,categoria: 'Hamburguesas', name: "producto 3", stock:50, price: 40, foto:'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqX093YV/200/200/original?country=ar' },
]

export const mFetch = () =>{
    return new Promise((res, rej)=>{
        // acciones 
        // condition ? resuelto() : rechazado()
        // rechazado("No te puedo devolver la plata")
        setTimeout(()=>{
            res(productos)
        }, 1000)
    }) 
} 