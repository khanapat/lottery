import { ethers } from "ethers";
import { getProvider } from "../utils/wallet";
import StableCoin from "../artifacts/StableCoin/StableCoin.json";
import { useSelector } from "react-redux";
import { RootState } from "../state";
import { useContract } from ".";

const useToken = () => {
    const state = useSelector((state: RootState) => state);
    const { getStableCoin } = useContract();
    // console.log(process.env.REACT_APP_STABLECOIN_CONTRACT_ADDRESS);
    // const contract = new ethers.Contract(process.env.REACT_APP_STABLECOIN_CONTRACT_ADDRESS!, StableCoin.abi);

    const getBalance = async (): Promise<string> => {
        if (!state.wallet.address || state.wallet.chainId !== 80001) return "0";
        const provider = getProvider();
        const balance: ethers.BigNumber = await getStableCoin().connect(provider!).balanceOf(state.wallet.address);
        return ethers.utils.formatEther(balance);
    }

    return {
        getBalance
    }
};

export default useToken;