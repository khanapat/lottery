import styled from "styled-components";

type TProps = {
    text: string;
    img: string;
    onClick: () => void;
};

const WalletConnection = ({ text, img, onClick }: TProps) => (
    <WalStyle onClick={onClick}>
        <img className="wallet-logo" src={img} alt="wallet-logo" />
        <p className="wallet-name">{text}</p>
    </WalStyle>
);

const WalStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    height: 150px;
    width: 150px;
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }

    .wallet-logo {
        width: 50px;
        height: 50px;
    }

    .wallet-name {
        color: rgb(40, 13, 95);
    }
`;

export default WalletConnection;