import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state";
import { setAccount } from "../state/wallet";
import { toggleClick, toggleWalletModal } from "../state/navbar";

import HomeTemplate from "../components/templates/HomeTemplate";
import { useToast, useStableCoin, useGachapong, useExample, useContract } from "../hooks";
import { setBalance } from "../state/token";
import { useQuery } from "@apollo/client";
import { GET_LOTTERIES } from "../apollo/LotteryQueries";
import { Lotteries } from "../types/graphql";

const Home = () => {
    const state = useSelector((state: RootState) => state);
    const dispatch = useDispatch();
    const toast = useToast();
    const token = useStableCoin();
    const { getExample } = useContract();
    const { setNumber, subscribeEvent } = useExample();

    const { loading, error, data: lotteries, refetch } = useQuery<Lotteries>(GET_LOTTERIES,
        {
            variables: {
                account: state.wallet.address,
            }
        }
    );

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

    useEffect(() => {
        // const setNumber = getExample().filters.SetNumber();
        // getExample().queryFilter(setNumber, 25359778)
        //     .then(result => {
        //         console.log(result);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });

        subscribeEvent();
    }, []);

    // useEffect(() => {
    //     console.log(lotteries)
    //     console.log(loading)
    //     console.log(error)
    // }, [lotteries]);

    useEffect(() => {
        (async function () {
            const balance = await token.getBalance();
            dispatch(setBalance(balance));
        })();

        (async function () {
            refetch({
                account: state.wallet.address,
            });
        })();
        // console.log(loading)
        // console.log(lotteries);

    }, [state.wallet.address]);

    const headerProps = {
        isClickNavbar: state.navbar.isClick,
        toggleNavbar: toggleNavbar,
        isOpenWalletModal: state.navbar.isOpenWalletModal,
        toggleNavbarModal: toggleNavbarModal,
        connectWallet: connectWalletHandler,
        account: state.wallet.address,
        chainId: state.wallet.chainId,
        stableTokenBalance: state.token.balance,
    };

    const bodyProps = {
        hisLotteries: lotteries?.lotteries ? lotteries.lotteries : [],
        hisLoading: loading,
        hisError: error,
        setNumber: setNumber,
    };

    return (
        <HomeTemplate
            headerProps={headerProps}
            bodyProps={bodyProps}
        />
    );
};

export default Home;