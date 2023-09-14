
import { calculadorIVA2, Producto } from "./05-desestructura-funciones";

const carrito:Producto[]=[
    {
        desc:'Telefono',
        precio:1000
    },
    {
        desc:'Telefono',
        precio:800
    },
    {
        desc:'Telefono',
        precio:200
    }
]
const [total,iva]=calculadorIVA2(carrito);
console.log(`Total ${total}`);
console.log(`IVA: ${iva}`);