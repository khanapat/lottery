export type TWalletState = {
    address: string | null;
    chainId: number | null;
};

export type TConnectInfo = {
    chainId: string | null;
}

export type TNavbarState = {
    isClick: boolean;
    isOpenWalletModal: boolean;
}

export type TTokenState = {
    balance: string;
}