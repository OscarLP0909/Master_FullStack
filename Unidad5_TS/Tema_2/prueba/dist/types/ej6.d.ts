type Person = {
    name: string;
    birthYear: number;
    city?: string;
};
declare const Oscar: {
    name: string;
    birthYear: number;
};
declare function showInfo(currentYear: number, persona: Person): [string, number];
