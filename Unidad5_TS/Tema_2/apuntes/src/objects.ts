const yo = {
    nombre: "Oscar",
    city: "Malaga",
    age: 24
}

console.log(yo.nombre);
console.log(yo.age > 50),
console.log(yo.city)

// Object Type
type Person = {
    nombre: string,
    city?: string,
    age: number
}


function printPersonData(person: Person): void {
    console.log(person.age);
}

printPersonData(yo);

const otraPersona: Person = {
    nombre: "Other",
    age: 52
}

type Localizacion = {
    latitude: string,
    longitude: string
}

type City = {
    name: string,
    country: string,
    readonly isCapital: boolean, // No permite que se hagan modificaciones en esta propiedad
    // location: {
    //     latitude: string,
    //     longitude: string
    // }
    location: Localizacion
}

const madrid: City = {
    name: "Madrid",
    country: "España",
    isCapital: true,
    location: {
        latitude: "45,56",
        longitude: "34,45"
    } 
}

// Modificacion de la variable

// madrid.isCapital = false;

console.log(madrid);


type User = {
    role: string,
}

type Admin = User & { // Extensión de tipos
    isAdmin: boolean;
}

const employee: User = {
    role: "Software Developer"
}

const jefe: Admin = {
    role: "Jefe",
    isAdmin: true
}