import { ethers } from "ethers";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useContract } from ".";
import { RootState } from "../state";
import { getProvider } from "../utils/wallet";

const useExample = () => {
    const state = useSelector((state: RootState) => state);
    const { getExample } = useContract();

    const setNumber = async () => {
        const provider = getProvider();
        if (state.wallet.address && state.wallet.chainId === 80001 && provider) {
            const signer = provider.getSigner();
            const tx: ethers.providers.TransactionResponse = await getExample().connect(signer).setNumber(999);
            await tx.wait(1); // ethers.providers.TransactionReceipt
        }
    }

    const subscribeEvent = useCallback(() => {
        const provider = getProvider();
        const setNumber = getExample().filters.SetNumber();
        if (provider) {
            provider.on(setNumber, (event: ethers.providers.EventType) => {
                console.log(event)
            });

            return () => {
                provider.removeListener("setNumber", () => {
                    console.log("close set number");
                });
            };
        }
    }, []);

    return {
        setNumber,
        subscribeEvent,
    }
};

export default useExample;