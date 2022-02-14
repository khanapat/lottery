import React from "react";
import styled, { css } from "styled-components";

type TProps = {
    text: string;
    color: string;
    onClick?: () => void;
}

const Button = ({ text, color, onClick }: TProps) => (
    <ButtStyle color={color} onClick={onClick}>{text}</ButtStyle>
);

type TStyle = {
    color: string;
}

const ButtStyle = styled.button<TStyle>`
    border: 0px;
    border-radius: 16px;
    width: 120px;
    cursor: pointer;
    /* font-family: 'Kanit', sans-serif; */ // import at app.css
    /* font-size: 16px;
    font-weight: 600; */
    color: white;
    letter-spacing: 0.03em;
    height: 32px;

    ${(props) => {
        switch (props.color) {
            case "red":
                return css`
                        background-color: rgb(212, 31, 31);
                        box-shadow: rgb(14, 14, 44, 0.4) 0px -1px 0px 0px inset;
                        `;
            case "blue":
                return css`
                        background-color: rgb(31, 199, 212);
                        box-shadow: rgb(14, 14, 44, 0.4) 0px -1px 0px 0px inset;
                        `;
            default:
                return "";
        }
    }}

    &:hover {
        opacity: 0.65;
    }

    &:active {
        opacity: 0.85;
        transform: translateY(1px);
        box-shadow: none;

        /* ${(props) => {
        switch (props.color) {
            case "red":
                return css`
                            box-shadow: rgb(14, 14, 44, 0.4) 0px 0px 0px 0px inset;
                            `;
            case "blue":
                return css`
                            box-shadow: rgb(14, 14, 44, 0.4) 0px 0px 0px 0px inset;
                            `;
            default:
                return "";
        }
    }} */
    }
`

export default Button;

