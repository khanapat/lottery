import { ethers } from "ethers";
import StableCoin from "../artifacts/StableCoin/StableCoin.json";
import Gachapong from "../artifacts/Gachapong/Gachapong.json";
import Example from "../artifacts/Example/Example.json";
import { getProvider } from "../utils/wallet";

const useContract = () => {
    const getStableCoin = (): ethers.Contract => {
        // return new ethers.Contract(process.env.REACT_APP_STABLECOIN_CONTRACT_ADDRESS!, StableCoin.abi);
        return new ethers.Contract(StableCoin.address, StableCoin.abi, getProvider());
    };

    const getGachapong = (): ethers.Contract => {
        return new ethers.Contract(Gachapong.address, Gachapong.abi, getProvider());
    };

    const getExample = (): ethers.Contract => {
        return new ethers.Contract(Example.address, Example.abi, getProvider());
    };

    return {
        getStableCoin,
        getGachapong,
        getExample,
    };
};

export default useContract;