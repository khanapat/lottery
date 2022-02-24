import React from "react";
import styled from "styled-components";
import { logoPath } from "../../config/constants.ts/network";
import { Balance, Button } from "../atoms";
// import { Address } from "../molecules";

type TProps = {
    isClickNavbar: boolean,
    toggleNavbar: () => void,
    toggleNavbarModal: () => void,
    chainId: number | null,
    balance: string,
}

const Navbar = (props: TProps) => (
    <NavStyle className="navbar-items">
        <div className="navbar-menu">
            <img className="navbar-logo" src="/assets/logo.webp" alt="navbar-logo" />
            <div className="menu-icon" onClick={props.toggleNavbar}>
                <div className={`bar1 ${props.isClickNavbar ? "active" : ""}`} />
                <div className={`bar2 ${props.isClickNavbar ? "active" : ""}`} />
                <div className={`bar3 ${props.isClickNavbar ? "active" : ""}`} />
            </div>
            <ul className="navbar-lists">
                <li><a href="">bobo</a></li>
                <li><a href="">bobo</a></li>
                <li><a href="">bobo</a></li>
            </ul>
        </div>
        <div className="navbar-network">
            <Balance amount={props.balance} img="/assets/usdc_logo.png" />
            <div className="network-logo-container">
                <img className="network-logo" src={`${props.chainId ? logoPath[props.chainId] : logoPath[0]}`} alt="network-logo" />
            </div>
            <Button color="blue" text="Connect Wallet" onClick={props.toggleNavbarModal} />
            {/* <Button color="blue" text="Connect Wallet" onClick={props.connectWallet} /> */}
        </div>
    </NavStyle>
);

type TStyle = {

}

const NavStyle = styled.nav<TStyle>`
    background-color: pink;
    height: 80px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px 0px 10px;

    a {
        text-decoration: none;
    }

    .navbar-menu {
        display: flex;
        flex-direction: row;
        align-items: center;
        column-gap: 30px;
        height: 100%;

        .navbar-logo {
            height: 100%;
            cursor: pointer;
        }

        .navbar-lists {
            list-style: none;
            display: flex;
            column-gap: 30px;
            justify-content: flex-start;
        }
    }

    .navbar-network {
        display: flex;
        flex-direction: row;
        align-items: center;
        column-gap: 30px;
        height: 100%;
        
        .network-logo-container {
            height: 50px;
            width: 50px;
            border: 1px solid rgb(122, 110, 170);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: white;
        }

        .network-logo {
            height: 100%;
        }
    }

    // toggle
    .menu-icon {
        display: inline-block;
        cursor: pointer;
        height: max-content;
    }

    .bar1, .bar2, .bar3 {
        width: 35px;
        height: 5px;
        background-color: #333;
        margin: 6px 0;
        transition: 0.4s;
    }

    /* Rotate first bar */
    .bar1.active {
        -webkit-transform: rotate(-45deg) translate(-9px, 6px) ;
        transform: rotate(-45deg) translate(-9px, 6px) ;
    }

    /* Fade out the second bar */
    .bar2.active {
        opacity: 0;
    }

    /* Rotate last bar */
    .bar3.active {
        -webkit-transform: rotate(45deg) translate(-8px, -8px) ;
        transform: rotate(45deg) translate(-8px, -8px) ;
    }

    @media(max-width: 1200px) {
        .menu-icon {
            display: none;
        }
    }

    @media(max-width: 767px) {
        .menu-icon {
            display: block;
        }

        div {
            .navbar-logo {
                display: none;
            }
        }
    }
`


export default Navbar;