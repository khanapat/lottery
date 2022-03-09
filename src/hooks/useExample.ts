import { ethers } from "ethers";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useContract } from ".";
import { RootState } from "../state";
import { getProvider } from "../utils/wallet";

const useExample = () => {
    const state = useSelector((state: RootState) => state);
    const { getExample } = useContract();
    const contract = getExample();
    const provider = getProvider();

    const contractListener = (oldNumber: ethers.BigNumber, newNumber: ethers.BigNumber, event: ethers.providers.EventType) => {
        console.log("contract", oldNumber.toString(), newNumber.toString(), event);
    };

    const providerListener = (event: ethers.providers.EventType) => {
        console.log("provider", event);
    };

    useEffect(() => {
        const setNumber = getExample().filters.SetNumber();
        contract.on(setNumber, contractListener);
        provider?.on(setNumber, providerListener);
        // console.log("outside: subscribe listener");

        // console.log(contract.listeners());
        // console.log(provider?.listeners());

        return () => {
            contract.off(setNumber, contractListener);
            provider?.off(setNumber, providerListener);

            // console.log("outside: remove listener");

            // console.log(contract.listeners());
            // console.log(provider?.listeners());
        };
    }, [provider]);

    const setNumber = async () => {
        if (state.wallet.address && state.wallet.chainId === 80001 && provider) {
            const signer = provider.getSigner();
            const tx: ethers.providers.TransactionResponse = await contract.connect(signer).setNumber(999);
            await tx.wait(1); // ethers.providers.TransactionReceipt
        }
    }

    // ดูใน useEffect
    // const subscribeEvent = useCallback(() => {
    //     const setNumber = getExample().filters.SetNumber();
    //     if (provider) {
    //         provider.on(setNumber, (event: ethers.providers.EventType) => {
    //             console.log(event)
    //         });
    //         console.log("outside: subscribe listener");
    //         console.log(provider.listeners());

    //         // return () => {
    //         //     provider?.removeListener("setNumber", () => {
    //         //         console.log("close set number");
    //         //     });
    //         //     console.log("outside: remove listener");
    //         // };

    //         // ถ้าอยากใช้ข้างบนต้องรับ return ที่ useEffect หน้า Home
    //         // const event = subscribeEvent();
    //         // return event;
    //     }
    // }, []);

    // const removeEvent = useCallback(() => {
    //     if (provider) {
    //         provider?.removeListener("setNumber", () => {
    //             console.log("close set number");
    //         });
    //         console.log("outside: remove listener");
    //         console.log(provider.listeners());
    //     }
    // }, []);

    return {
        setNumber,
        // subscribeEvent,
        // removeEvent,
    }
};

export default useExample;