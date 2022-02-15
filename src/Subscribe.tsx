import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { supportedChainIds } from "./config/constants.ts/network";
import useToast from "./hooks/useToast";
// import { RootState } from "./state";
import { setAccount, setChainId } from "./state/wallet";
import { TConnectInfo } from "./types/state";
import { setupNetwork } from "./utils/wallet";

const Subscribe = ({ children }: React.PropsWithChildren<unknown>) => {
    const dispatch = useDispatch();
    const toast = useToast();

    useEffect(() => {
        if (window.ethereum && window.ethereum.on) {
            window.ethereum.on("connect", (connectInfo: TConnectInfo) => {
                console.log("Handling 'connect' event");
                if (connectInfo.chainId) {
                    if (supportedChainIds[`${Number(connectInfo.chainId)}`]) {
                        dispatch(setChainId(Number(connectInfo.chainId)));
                        toast.successToast("Connect network.");
                    } else {
                        setupNetwork()
                            .then((result) => {
                                if (result && result.status != 200) {
                                    console.log(result.msg);
                                    toast.errorToast(result.msg);
                                } else {
                                    toast.successToast("Setup network.");
                                }
                            })
                            .catch((error) => {
                                console.log(error);
                                toast.errorToast(error.msg);
                            });
                    }
                }
            });

            window.ethereum.on("accountsChanged", (accounts: Array<string>) => {
                console.log("Handling 'accountsChanged' event");
                console.log(accounts);
                console.log(process.env.REACT_APP_CHAIN_ID);
                // localStorage.setItem("bobo", accounts[0]);
                dispatch(setAccount(accounts[0]));
            });

            window.ethereum.on("chainChanged", (chainId: string) => {
                console.log("Handling 'chainChanged' event");
                console.log(chainId);
                window.location.reload();
            });
        }

        return () => {
            if (window.ethereum && window.ethereum.removeListener) {
                window.ethereum.removeListener("connect", () => {
                    console.log("Remove 'connect' event");
                });

                window.ethereum.removeListener("accountsChanged", () => {
                    console.log("Remove 'accountsChanged' event");
                });

                window.ethereum.removeListener("chainChanged", () => {
                    console.log("Remove 'chainChanged' event");
                });
            };
        }
    }, []);

    return (
        // <context.Provider value={{ provider: null }}>
        <React.Fragment>
            {children}
        </React.Fragment>
        // </context.Provider>
    );
};

export default Subscribe;