import { configureStore } from "@reduxjs/toolkit";
import walletReducer from "./wallet";
import navbarReducer from "./navbar";
import tokenReducer from "./token";

export const store = configureStore({
    reducer: {
        navbar: navbarReducer,
        wallet: walletReducer,
        token: tokenReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;