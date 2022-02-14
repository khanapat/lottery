import { createContext } from "react";
import { ethers } from "ethers";

type TState = {
    provider: ethers.providers.Web3Provider | null
};

const initialState: TState = {
    provider: null
};

export type AppState = typeof initialState;

const context = createContext<TState>(initialState);

export default context;


