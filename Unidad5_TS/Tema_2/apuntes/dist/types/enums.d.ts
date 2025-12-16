declare enum ORDER_STATUS {
    PENDING = "En preparacion",
    SHIPPED = "Enviado",
    DELIVERY = "En Reparto",
    DELIVERED = "Entregado"
}
declare function showOrderStatus(): string;
type statuses = typeof ORDER_STATUS;
declare function checkOrderStatus(shipmentCode: number, statuses: statuses): void;
declare enum DEVELOPER_LEVELS {
    JUNIOR = "JUNIOR",
    MID = "MEDIO",
    SENIOR = "SENIOR"
}
type Employee = {
    name: string;
    age: number;
    level: DEVELOPER_LEVELS;
    salary: number;
};
declare const empleado: Employee;
declare function calculateEmployeeBonus(empleado: Employee): number;
declare const HTTP_STATUS: {
    readonly 200: "OK";
    readonly 404: "NOT FOUND";
    readonly 500: "SERVER ERROR";
};
