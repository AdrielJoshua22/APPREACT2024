let productos = [
    { id: '1' ,categoria: 'Hamburguesas', name: "Doble Cheese Burguer", stock:50, price: 37, foto:'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kPXPtaX9/200/200/original?country=ar', colores:[{nombre:'rojo', clase:''}] },
    { id: '2' ,categoria: 'Hamburguesas', name: "Doble Big Burguer", stock:50, price: 27, foto:'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqX3vl0y/200/200/original?country=ar' },
    { id: '3' ,categoria: 'Hamburguesas', name: "Simple Bacon Burger", stock:50, price: 37, foto:'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kPXPtaX9/200/200/original?country=ar', colores:[{nombre:'rojo', clase:''}] },
    { id: '4' ,categoria: 'Hamburguesas', name: "Triple Snipper Burger", stock:50, price: 40, foto:'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqX093YV/200/200/original?country=ar' },
    { id: '5' ,categoria: 'Hamburguesas', name: "Triple Big Burger", stock:50, price: 37, foto:'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kPXPtaX9/200/200/original?country=ar', colores:[{nombre:'rojo', clase:''}] },
    { id: '6' ,categoria: 'Hamburguesas', name: "Doble Snipper Burger", stock:50, price: 27, foto:'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqX3vl0y/200/200/original?country=ar' },
    { id: '7' ,categoria: 'Hamburguesas', name: "Simple Stack Burger", stock:50, price: 37, foto:'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kPXPtaX9/200/200/original?country=ar', colores:[{nombre:'rojo', clase:''}] },
    { id: '8' ,categoria: 'Hamburguesas', name: "Doble Magnific Burger 8", stock:50, price: 33, foto:'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqX093YV/200/200/original?country=ar' },
]

export const mFetch = () =>{
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res(productos)
        }, 1000)
    }) 
} 