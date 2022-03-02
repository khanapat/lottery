import { gql } from "@apollo/client"

export const GET_LOTTERIES = gql`
    query GetLotteries($account: Bytes!) {
        lotteries(owner: $account) {
            id
            round
            owner
            type
            number
            amount
        }
    }
`;