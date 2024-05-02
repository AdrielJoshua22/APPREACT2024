let productos = [
    { id: '1' ,categoria: 'remeras', name: "producto 1", stock:50, price: 37, foto:'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kPXPtaX9/200/200/original?country=ar', colores:[{nombre:'rojo', clase:''}] },
    { id: '2' ,categoria: 'remeras', name: "producto 2", stock:50, price: 27, foto:'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqX3vl0y/200/200/original?country=ar' },
    { id: '3' ,categoria: 'remeras', name: "producto 3", stock:50, price: 40, foto:'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqX093YV/200/200/original?country=ar' },
    { id: '4' ,categoria: 'gorras',  name: "producto 4", stock:50, price: 55, foto:''},
    { id: '6' ,categoria: 'gorras',  name: "producto 6", stock:50, price: 19, foto:''},
    { id: '7' ,categoria: 'gorras',  name: "producto 7", stock:50, price: 2,  foto:''},
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