
    const myName = "Oscar"

    //El hover de myName sale que es de tipo "Oscar" en vez de string
    // por ser const

    // *Inferencia de tipos

    let age: number = 35

    // Con let, el hover muestra que es de tipo number

    age = 36

    //* Boolean
    let isSummer: boolean = false;
    isSummer = true;

    //* Arrays
    const months: string[] = ["enero", "febrero", "marzo"];
    months.push("junio")

    //* Funciones
    function sayHello(nombre: string): string {
        return `Hola ${nombre}`;
    }

    function addNumber(num1: number, num2: number): number {
        return num1 + num2;
    }

    console.log(addNumber(3, 5)) // 8
    //console.log(addNumber(3, "15")) // 315
    //console.log(addNumber(15)) // NaN

    function addNumberOrNot(num1: number, num2: number): number | undefined {
        if (num1 > 5) {
            return num1 + num2
        }
    }

    const addNumbersArrowFn = (num1: number, num2: number): number => num1 + num2

    const toUpperCase = (palabra: string) => palabra.toUpperCase();

    console.log(addNumberOrNot(1, 3));

    console.log(sayHello("Oscar"));


    //* Type Alias
    type stringOrNumber = string | number;

    function logMessage (message: stringOrNumber): stringOrNumber {
        // *Type guards
        //* instanceof
        if (typeof message === 'string'){
            return message.toUpperCase();
        } else {
            return message.toFixed(2);
        }
    }

    logMessage(123)
    logMessage("Hola")

    //* Type any implícito
    let msg: string;

    function fnWithAny(param1: string) {
        console.log(param1)
    }

    //* Función sin excplicitar tipos
    const doubles = [1, 3, 5, 7].map((numero: number) => numero * 2);
    console.log(doubles);
