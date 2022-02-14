import { useState } from "react";
import { FaRegCopy, FaCopy } from "react-icons/fa";
import styled from "styled-components";
import { copyText } from "../../utils/clipboard";

type TProps = {
    text: string;
}

const FaReg = ({ text }: TProps) => {
    const [isHover, setIsHover] = useState<boolean>(false);

    return (
        <FaRegStyle>
            <span className="tooltiptext">NiceNiceNiceNiceNiceNiceNiceNiceNiceNiceNiceNiceNiceNice</span>
            <div
                className="fa-reg"
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}>
                {isHover
                    ? <FaCopy onClick={() => copyText(text)} />
                    : <FaRegCopy />
                }
            </div>
        </FaRegStyle>
    );
};

const FaRegStyle = styled.div`
    /* position: relative; */

    .fa-reg {
        background-color: rgba(119,131,143,.1);
        /* border: 1px solid black; */
        border-radius: 50%;
        width: 20px;
        height: 20px;
        /* object-fit: fill; */
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        margin: 0px 5px 0px 5px;
    }

    .fa-reg:hover {
        background-color: rgba(119,131,143,.6);
    }

    // ทำอันแรกอยู่ แล้วจะมาทำอันที่สองเท่านั้น
    .fa-reg:hover + .tooltiptext {
        visibility: visible;
    }

    .tooltiptext {
        visibility: hidden;
        background-color: rgb(33, 51, 91);
        color: white;
        text-align: center;
        /* padding: 5px 0; */
        /* border-radius: 6px; */
        /* width: 120px; */
        bottom: 100%;

        /* position: absolute; */
        z-index: 1;
    }

    .tooltiptext::after {
        content: " ";
        /* position: absolute; */
        top: 100%; /* At the bottom of the tooltip */
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: black transparent transparent transparent;
    }
`;

export default FaReg;