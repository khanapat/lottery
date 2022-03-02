import styled from "styled-components";
import { provider, walletProvider } from "../../config/constants.ts/wallet";
import { WalletConnection } from "../atoms";

type TProps = {
    connectWallet: () => void;
}

const WalletModal = ({ connectWallet }: TProps) => (
    <WalStyle>
        {
            provider.map((provider, index) =>
                <WalletConnection
                    key={index}
                    text={provider}
                    img={walletProvider[provider]}
                    onClick={connectWallet}
                />
            )
        }
    </WalStyle>
);

const WalStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

export default WalletModal;