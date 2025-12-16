declare enum Rangos {
    Junior = "Junior",
    Mid = "Mid",
    Senior = "Senior"
}
declare function showRank(rank: keyof typeof Rangos): string;
