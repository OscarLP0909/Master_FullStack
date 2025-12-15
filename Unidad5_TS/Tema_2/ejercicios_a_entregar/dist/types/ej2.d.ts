type Person = {
    nombre: string;
    birthYear: number;
    city?: string;
};
declare const yo: Person;
declare function getPersonInfo(currentYear: number, persona: Person): void;
