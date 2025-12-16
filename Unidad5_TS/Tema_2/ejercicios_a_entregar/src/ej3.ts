// Crear una función sencilla que devuelva un mensaje según una clasificación. Implementarlo
// mediante un enum, de forma que yo le pase a la función solamente la referencia y sea capaz de
// leer el valor y mostrar el mensaje

enum Medallas {
    First = "Oro",
    Second = "Plata",
    Third = "Bronce"
}


function showMedal(classification: keyof typeof Medallas): string {
    const medal = Medallas[classification]
    return `Has ganado la medalla de ${medal.toLowerCase()}`
}

console.log(showMedal("First"))
console.log(showMedal("Second"))

// Keyof: convierte las propiedades de un tipo en un union type de strings (o simbolos)

// keyof T = "los nombres de las claves de T"

// En el ejercicio, lo utilizamos ya que luego para llamar la función, pasamos las claves del enum ("First", "Second", etc)