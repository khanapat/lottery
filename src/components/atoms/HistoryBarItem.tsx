import { ethers } from "ethers";
import styled from "styled-components";

type TProps = {
    id: string;
    round: string;
    type: number;
    number: number;
    amount: string;
};

const BarItem = ({ id, round, type, number, amount }: TProps) => (
    <BarItemStyle>
        <p>{id}</p>
        <p>{round}</p>
        <p>{type === 0 ? "Two Digit" : "Three Digit"}</p>
        <p>{number}</p>
        <p>{ethers.utils.formatEther(amount)}</p>
    </BarItemStyle>
);

const BarItemStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #87CEFA;
    border: 1px solid black;
    border-radius: 16px;
    width: 80%;
    padding: 0px 10px 0px 10px;
    margin: 3px 0px 3px 0px;

    p {
        width: 20%;
        display: flex;
        justify-content: center;
    }
`;

export default BarItem;