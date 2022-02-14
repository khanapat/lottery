import { ethers, providers } from "ethers";
import React from "react";
import { defaultChainIds } from "../config/constants.ts/network";

export const getProvider = () => {
    // const getProvider = () => {
    //     if (window.ethereum) {
    //         return new ethers.providers.Web3Provider(window.ethereum);
    //     }
    // }

    // return {
    //     getProvider
    // }

    if (window.ethereum) {
        return new ethers.providers.Web3Provider(window.ethereum);
    } else {
        alert("Please install metamask browser extension to interfact");
    }
};

export const getAccount = () => {

};

export const setupNetwork = async () => {
    if (window.ethereum && window.ethereum.request) {
        try {
            await window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [
                    {
                        chainId: `0x${defaultChainIds.toString(16)}`
                    }
                ],
            });

            return {
                status: 200,
                msg: "success",
            }
        } catch (switchError: any) {
            if (switchError.code === 4902) {
                try {
                    await window.ethereum.request({
                        method: "wallet_addEthereumChain",
                        params: [
                            {
                                chainId: `0x${defaultChainIds.toString(16)}`,
                                chainName: process.env.REACT_APP_CHAIN_NAME,
                                rpcUrls: [process.env.REACT_APP_MATIC_RPC_URL],
                                iconUrls: [process.env.REACT_APP_MATIC_ICON],
                                blockExplorerUrls: [process.env.REACT_APP_MATIC_SCAN_URL],
                                nativeCurrency: {
                                    name: process.env.REACT_TOKEN_NAME,
                                    symbol: process.env.REACT_TOKEN_SYMBOL,
                                    decimals: 18,
                                },
                            }
                        ]
                    });

                    return {
                        status: 200,
                        msg: "success",
                    }
                } catch (error: any) {
                    // console.log(error);

                    return {
                        status: 400,
                        msg: (error as Error).message,
                    }
                }
            }
            // console.log(switchError);

            return {
                status: 400,
                msg: (switchError as Error).message,
            }
        }
    }
};

// import { getProvider, getAccount } from "";