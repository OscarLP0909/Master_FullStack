declare enum Medallas {
    First = "Oro",
    Second = "Plata",
    Third = "Bronce"
}
declare function showMedal(classification: keyof typeof Medallas): string;
