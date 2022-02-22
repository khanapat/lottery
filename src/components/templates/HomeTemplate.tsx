import React from "react";
import { Button } from "../atoms";
import { Address } from "../molecules";
import { Navbar } from "../organisms";
import { ToastContainer } from "react-toastify";

type TProps = {
    headerProps: {
        isClickNavbar: boolean,
        toggleNavbar: () => void,
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
            connectWallet={headerProps.connectWallet}
        />
        {/* {headerProps.chainId} */}
        <Address text={headerProps.account} />
        {/* <FaRegCopy /> */}
        <ToastContainer />
    </div>
);

export default HomeTemplate;