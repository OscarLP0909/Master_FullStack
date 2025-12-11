declare const yo: {
    nombre: string;
    city: string;
    age: number;
};
type Person = {
    nombre: string;
    city?: string;
    age: number;
};
declare function printPersonData(person: Person): void;
declare const otraPersona: Person;
type Localizacion = {
    latitude: string;
    longitude: string;
};
type City = {
    name: string;
    country: string;
    readonly isCapital: boolean;
    location: Localizacion;
};
declare const madrid: City;
type User = {
    role: string;
};
type Admin = User & {
    isAdmin: boolean;
};
declare const employee: User;
declare const jefe: Admin;
