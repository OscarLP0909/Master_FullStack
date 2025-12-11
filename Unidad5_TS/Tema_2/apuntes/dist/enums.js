"use strict";
var ORDER_STATUS;
(function (ORDER_STATUS) {
    ORDER_STATUS["PENDING"] = "En preparacion";
    ORDER_STATUS["SHIPPED"] = "Enviado";
    ORDER_STATUS["DELIVERY"] = "En Reparto";
    ORDER_STATUS["DELIVERED"] = "Entregado";
})(ORDER_STATUS || (ORDER_STATUS = {}));
function showOrderStatus() {
    return ORDER_STATUS.PENDING;
}
console.log(`Tu pedido está: ${showOrderStatus()}`);
function checkOrderStatus(shipmentCode, statuses) {
    if (shipmentCode) {
        console.log(statuses.PENDING);
    }
}
checkOrderStatus(1, ORDER_STATUS);
var DEVELOPER_LEVELS;
(function (DEVELOPER_LEVELS) {
    DEVELOPER_LEVELS["JUNIOR"] = "JUNIOR";
    DEVELOPER_LEVELS["MID"] = "MEDIO";
    DEVELOPER_LEVELS["SENIOR"] = "SENIOR";
})(DEVELOPER_LEVELS || (DEVELOPER_LEVELS = {}));
const empleado = {
    name: "Oscar",
    age: 24,
    level: DEVELOPER_LEVELS.SENIOR,
    salary: 50000
};
function calculateEmployeeBonus(empleado) {
    if (empleado.level === DEVELOPER_LEVELS.SENIOR) {
        return empleado.salary * 2;
    }
    return 0;
}
console.log(calculateEmployeeBonus(empleado));
const HTTP_STATUS = {
    200: "OK",
    404: "NOT FOUND",
    500: "SERVER ERROR"
};
console.log(HTTP_STATUS[200]);
console.log(HTTP_STATUS);
