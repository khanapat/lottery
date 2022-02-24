import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TTokenState } from "../../types/state";

const initialState: TTokenState = {
    balance: "0.00",
};

export const tokenSlice = createSlice({
    name: "token",
    initialState,
    reducers: {
        setBalance: (state, action: PayloadAction<string>) => {
            state.balance = action.payload;
        },
    }
});

export const { setBalance } = tokenSlice.actions;

export default tokenSlice.reducer;