import styled from "styled-components";
import { Lottery } from "../../types/graphql";
import { HistoryBarItem } from "../atoms";

type TProps = {
    lotteries: Lottery[];
};

const Bar = ({ lotteries }: TProps) => (
    <BarStyle>
        <div className="title">
            <p>Lottery ID</p>
            <p>Round</p>
            <p>Type</p>
            <p>Number</p>
            <p>Amount</p>
        </div>
        {
            lotteries.length != 0
                ? lotteries.map((lottery, index) =>
                    <HistoryBarItem
                        key={index}
                        id={lottery.id}
                        round={lottery.round}
                        type={lottery.type}
                        number={lottery.number}
                        amount={lottery.amount}
                    />
                )
                : "No Data"
        }
    </BarStyle>
);

const BarStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: red;
    width: 80%;

    .title {
        width: 80%;
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: orange;

        p {
            border: 1px solid black;
            width: 20%;
            display: flex;
            justify-content: center;
        }
    }
`;

export default Bar;