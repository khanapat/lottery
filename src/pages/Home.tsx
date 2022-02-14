import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state";
import { setAccount } from "../state/wallet";
import { toggleClick } from "../state/navbar";

import HomeTemplate from "../components/templates/HomeTemplate";

const Home = () => {
    const state = useSelector((state: RootState) => state);
    const dispatch = useDispatch();

    const toggleNavbar = () => {
        dispatch(toggleClick());
    };

    const connectWalletHandler = () => {
        if (window.ethereum && window.ethereum.request) {
            window.ethereum.request({
                method: "eth_requestAccounts"
            })
                .then((result) => {
                    dispatch(setAccount(result[0]));
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            alert("Please install metamask browser extension to interfact");
        }
    };

    const headerProps = {
        isClickNavbar: state.navbar.isClick,
        toggleNavbar: toggleNavbar,
        connectWallet: connectWalletHandler,
        account: state.wallet.address,
        chainId: state.wallet.chainId,
    };

    const bodyProps = {

    };

    return (
        <HomeTemplate
            headerProps={headerProps}
            bodyProps={bodyProps}
        />
    );
};

export default Home;