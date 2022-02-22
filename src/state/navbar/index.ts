import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TNavbarState } from "../../types/state";

const initialState: TNavbarState = {
    isClick: false,
    isOpenWalletModal: false,
};

export const navbarSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        toggleClick: (state) => {
            state.isClick = !state.isClick;
        },
        toggleWalletModal: (state) => {
            state.isOpenWalletModal = !state.isOpenWalletModal;
        },
    },
});

export const { toggleClick, toggleWalletModal } = navbarSlice.actions;

export default navbarSlice.reducer;