import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TWalletState } from "../../types/state";

const initialState: TWalletState = {
    address: null,
    chainId: null,
};

export const walletSlice = createSlice({
    name: "wallet",
    initialState,
    reducers: {
        setAccount: (state, action: PayloadAction<string>) => {
            state.address = action.payload;
        },
        setChainId: (state, action: PayloadAction<number>) => {
            state.chainId = action.payload;
        },
    }
});

export const { setAccount, setChainId } = walletSlice.actions;

export default walletSlice.reducer;