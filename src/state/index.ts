import { configureStore } from "@reduxjs/toolkit";
import walletReducer from "./wallet";
import navbarReducer from "./navbar";

export const store = configureStore({
    reducer: {
        navbar: navbarReducer,
        wallet: walletReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;