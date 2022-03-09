import styled from "styled-components";
import { Button } from "../atoms";
import { Address, HistoryBar, WalletModal } from "../molecules";
import { Navbar, Modal } from "../organisms";
import { Lottery } from "../../types/graphql";
import { ApolloError } from "@apollo/client";

type TProps = {
    headerProps: {
        isClickNavbar: boolean,
        toggleNavbar: () => void,
        isOpenWalletModal: boolean,
        toggleNavbarModal: () => void,
        connectWallet: () => void,
        account: string | null,
        chainId: number | null,
        stableTokenBalance: string,
    }
    bodyProps: {
        hisLotteries: Lottery[],
        hisLoading: boolean,
        hisError: ApolloError | undefined,
        setNumber: () => void,
    },
};

const HomeTemplate = ({ headerProps, bodyProps }: TProps) => (
    <HomeTemplateStyle>
        <div className="header">
            <Navbar
                isClickNavbar={headerProps.isClickNavbar}
                toggleNavbar={headerProps.toggleNavbar}
                toggleNavbarModal={headerProps.toggleNavbarModal}
                chainId={headerProps.chainId}
                balance={headerProps.stableTokenBalance}
            />
        </div>
        <div className="body">
            <Address text={headerProps.account} />

            <button onClick={bodyProps.setNumber}>Set Number</button>

            <HistoryBar
                lotteries={bodyProps.hisLotteries}
            />
            <Modal
                title="Connect Wallet"
                width={400}
                isOpen={headerProps.isOpenWalletModal}
                onClickClose={headerProps.toggleNavbarModal}
                body={<WalletModal
                    connectWallet={headerProps.connectWallet}
                />}
                footer={
                    <p>Haven’t got a crypto wallet yet?</p>
                }
            />
        </div>
    </HomeTemplateStyle>
);

const HomeTemplateStyle = styled.div`
    .body {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export default HomeTemplate;