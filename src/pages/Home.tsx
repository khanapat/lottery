import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state";
import { setAccount } from "../state/wallet";
import { toggleClick, toggleWalletModal } from "../state/navbar";

import HomeTemplate from "../components/templates/HomeTemplate";
import useToast from "../hooks/useToast";

const Home = () => {
    const state = useSelector((state: RootState) => state);
    const dispatch = useDispatch();
    const toast = useToast();

    const toggleNavbar = () => {
        dispatch(toggleClick());
    };

    const connectWalletHandler = () => {
        dispatch(toggleWalletModal());

        if (window.ethereum && window.ethereum.request) {
            window.ethereum.request({
                method: "eth_requestAccounts"
            })
                .then((result) => {
                    dispatch(setAccount(result[0]));
                    toast.successToast("Connect wallet.");
                })
                .catch((error) => {
                    console.log(error);
                    toast.errorToast(error.message);
                });
        } else {
            alert("Please install metamask browser extension to interfact");
        }
    };

    const toggleNavbarModal = () => {
        dispatch(toggleWalletModal());
    };

    const headerProps = {
        isClickNavbar: state.navbar.isClick,
        toggleNavbar: toggleNavbar,
        isOpenWalletModal: state.navbar.isOpenWalletModal,
        toggleNavbarModal: toggleNavbarModal,
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