/* Escribe un programa que analice si la contraseña introducida es correcta o no.
Para que la contraseña sea correcta deberá cumplir las siguientes directivas:
Debe tener 8 caracteres como mínimo.
La contraseña deberá contener números.
La primera letra tiene que ser en mayúsculas. */

let pwd = window.prompt(`Introduzca la contraseña: `)

if (pwd.length < 8) {
    window.alert(`La contraseña debe de tener como mínimo  8 carcateres`)
} else if (!/\d/.test(pwd)) {
    window.alert(`La contraseña debe de contener al menos un número`)
} else if (!/^[A-Z]/.test(pwd)) {
    window.alert(`La primera letra debe de ser mayúscula`)
} else {
    window.alert(`Contraseña guardada correctamente`)
}