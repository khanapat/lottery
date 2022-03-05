import { useCallback } from "react";
import { useContract } from ".";

const useGachapong = () => {
    const { getGachapong } = useContract();

    const subscribeEvent = useCallback(() => {
        getGachapong().on("BuyLottery", (txn) => {
            console.log(txn);
        });
    }, []);

    return {
        subscribeEvent,
    }
};

export default useGachapong;