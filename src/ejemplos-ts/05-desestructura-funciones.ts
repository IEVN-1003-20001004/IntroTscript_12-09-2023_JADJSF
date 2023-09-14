
export interface Producto{
    desc:string;
    precio:number;
}
const telefono:Producto={
    desc:'Sony erickson',
    precio:23923,
}
const tablet:Producto={
    desc:'IPad Air',
    precio:2398,
}
function calculadorIVA(producto:Producto[]):number{
    let total=0;
    producto.forEach((producto)=>{
        total+=producto.precio;
    })
    return total*0.16;
}
const articulo1=[telefono, tablet];
const IVA1=calculadorIVA(articulo1);
console.log(`IVA: ${IVA1}`);

export function calculadorIVA2(producto:Producto[]):[number,number]{
    let total=0;
    producto.forEach(({precio})=>{
        total+=precio;
    })
    return [total,total*0.16]
}
const articulo2=[telefono, tablet];
const [total,IVA]=calculadorIVA2(articulo2);
console.log(`Total: ${total}`);
console.log(`IVA: ${IVA}`);