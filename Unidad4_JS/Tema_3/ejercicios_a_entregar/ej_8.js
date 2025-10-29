// Crear un programa que, a partir de un array que contiene las edades de 20 alumnos (generadas aleatoriamente entre 18 y 35),
// calcule y nos devuelva la media de edad de dicha clase.

let edades = []

for (let i = 0; i < 20; i++) {
    let random = Math.random()
    random = random * 18 + 18   // Rango de 18 a 35 (35-18 = 17 pero se ajusta para incluir 35)
    random = Math.trunc(random)
    edades[i] = random;
}

console.log(edades)

let media = 0
let suma = 0

edades.forEach(n => {
    suma += n
});

console.log(suma)

media = Math.floor(suma / edades.length)

console.log(media)