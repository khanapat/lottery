import { gql } from "@apollo/client"

export const GET_LOTTERIES = gql`
    query GetLotteries($account: Bytes!) {
        lotteries(where: {owner: $account}) {
            id
            round
            owner
            type
            number
            amount
        }
    }
`;