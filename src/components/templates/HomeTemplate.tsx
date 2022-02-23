import React from "react";
import { Button } from "../atoms";
import { Address, WalletModal } from "../molecules";
import { Navbar, Modal } from "../organisms";
import { ToastContainer } from "react-toastify";

type TProps = {
    headerProps: {
        isClickNavbar: boolean,
        toggleNavbar: () => void,
        isOpenWalletModal: boolean,
        toggleNavbarModal: () => void,
        connectWallet: () => void,
        account: string | null,
        chainId: number | null,
    }
    bodyProps: {

    },
};

const HomeTemplate = ({ headerProps }: TProps) => (
    <div>
        <Navbar
            isClickNavbar={headerProps.isClickNavbar}
            toggleNavbar={headerProps.toggleNavbar}
            toggleNavbarModal={headerProps.toggleNavbarModal}
            chainId={headerProps.chainId}
        />
        {/* {headerProps.chainId} */}
        <Address text={headerProps.account} />
        {/* <FaRegCopy /> */}
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
        <ToastContainer />
    </div>
);

export default HomeTemplate;