import React from "react";
import styled from "styled-components";
import { FaReg } from "../atoms";

type TProps = {
    text: string | null;
};

const Address = ({ text }: TProps) => (
    <AddrStyle>
        {text ? text : ""}
        <FaReg text={text ? text : ""} />
    </AddrStyle>
);

type TStyle = {

};

const AddrStyle = styled.div<TStyle>`
    display: inline-flex;
    align-items: center;
    border: 1px solid black;
`;

export default Address;