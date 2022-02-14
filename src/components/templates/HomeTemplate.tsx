import React from "react";
import { Button } from "../atoms";
import { Address } from "../molecules";
import { Navbar } from "../organisms";

type TProps = {
    headerProps: {
        isClickNavbar: boolean,
        toggleNavbar: () => void,
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
            chainId={headerProps.chainId}
            connectWallet={headerProps.connectWallet}
        />
        {/* {headerProps.chainId} */}
        <Address text={headerProps.account} />
        {/* <FaRegCopy /> */}
    </div>
);

export default HomeTemplate;