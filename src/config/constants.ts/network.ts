import { LogoPath, SupportedChainIds } from "../../types/network";

export const supportedChainIds: SupportedChainIds = {
    "80001": true,
    "1": true,
};

export const defaultChainIds = 80001;

export const logoPath: LogoPath = {
    0: "/assets/error_logo.png",
    1: "/assets/eth_logo.png",
    80001: "assets/polygon_logo.png",
};