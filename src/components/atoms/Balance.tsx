import styled from "styled-components";

type TProps = {
    amount: string;
    img: string;
};

const Balance = ({ amount, img }: TProps) => (
    <BalStyle>
        <img className="balance-logo" src={img} alt="balance-logo" />
        <p className="balance-amount">{amount}</p>
    </BalStyle>
);

const BalStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    height: 50%;
    column-gap: 10px;
    border-radius: 16px;
    padding: 0px 5px 0px 5px;
    background-color: #F0F8FF;

    .balance-logo {
        height: 50%;
    }
`;

export default Balance;