export declare type Score = {
    han: number;
    fu: number;
    points: number;
};
export declare type FuDetail = {
    fu: number;
    reason: string;
};
export declare type Result = {
    score: Score | null;
    yaku: string[] | null;
    fuDetails: FuDetail[] | null;
};
