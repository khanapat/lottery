export type Lottery = {
    id: string;
    round: string;
    owner: string;
    type: number;
    number: number;
    amount: string;
};

export type Lotteries = {
    lotteries: Lottery[];
};