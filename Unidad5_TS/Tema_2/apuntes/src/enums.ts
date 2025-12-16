// const myNombre = "Oscar";

// const BACK_BUTTON = "Atrás"

enum ORDER_STATUS {
    PENDING = "En preparacion",
    SHIPPED = "Enviado",
    DELIVERY = "En Reparto",
    DELIVERED = "Entregado"
}

function showOrderStatus(): string {
    return ORDER_STATUS.PENDING;
}

console.log(`Tu pedido está: ${showOrderStatus()}`)

type statuses = typeof ORDER_STATUS

function checkOrderStatus(shipmentCode: number, statuses: statuses): void {
    if(shipmentCode) {
        console.log(statuses.PENDING)
    }
}

checkOrderStatus(1, ORDER_STATUS) // No se pone 0 porque lo entiende como false


enum DEVELOPER_LEVELS {
    JUNIOR = "JUNIOR",
    MID = "MEDIO",
    SENIOR = "SENIOR"
}

type Employee = {
    name: string,
    age: number,
    level: DEVELOPER_LEVELS
    salary: number
}

const empleado: Employee = {
    name: "Oscar",
    age: 24,
    level: DEVELOPER_LEVELS.SENIOR,
    salary: 50000
}

function calculateEmployeeBonus(empleado: Employee): number {
    if (empleado.level === DEVELOPER_LEVELS.SENIOR) {
        return empleado.salary * 2
    }
    return 0
}

console.log(calculateEmployeeBonus(empleado))

const HTTP_STATUS = {
    200: "OK",
    404: "NOT FOUND",
    500: "SERVER ERROR"
} as const; // Que lo trate como const, es decir, que no se puede cambiar el valor de ninguna propiedad

console.log(HTTP_STATUS[200])

// HTTP_STATUS[500] = "OK"; // ReadOnly property

console.log(HTTP_STATUS)

