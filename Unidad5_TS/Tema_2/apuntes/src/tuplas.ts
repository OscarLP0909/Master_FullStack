//* Tuplas

//Arrays
const myArray: string[] = ['Madrid', 'Bcn', 'Sevilla']

// Tuplas
const requestStatus: [string, number] = ['NOT FOUND', 404];

type numero = number; // Type alias

const edad: numero = 23;

type requestStatus = [string, number];

const myWebsiteStatus: requestStatus = ["OK", 200];

myWebsiteStatus.reverse();