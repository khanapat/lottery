import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TNavbarState } from "../../types/state";

const initialState: TNavbarState = {
    isClick: false,
};

export const navbarSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        toggleClick: (state) => {
            state.isClick = !state.isClick;
        }
    },
});

export const { toggleClick } = navbarSlice.actions;

export default navbarSlice.reducer;