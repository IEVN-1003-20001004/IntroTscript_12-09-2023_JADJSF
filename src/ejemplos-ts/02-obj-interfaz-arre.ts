

interface Alumno{
    matricula:number;
    nombre:string;
    email:string;
    edad:number;
}

const alumno:Alumno={
    nombre:'Jose',
    email:'jose@gmail',
    edad:22,
    matricula:20001004
}

let mascotas=['perro','gato','perico']
console.table(mascotas)
mascotas[1]='nuevo gato';
mascotas.push('perico verde')
console.table(mascotas)

let nuevoArre:(number|string)[]=[]
nuevoArre.push('RCR');
nuevoArre.push('757627');
