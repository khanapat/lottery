import React, { useEffect, useState } from "react";
import { FaRegCopy, FaCopy } from "react-icons/fa";
import { BsCheckLg } from "react-icons/bs";
import styled from "styled-components";
import { copyText } from "../../utils/clipboard";

const STATE = {
    MOUSE_LEAVE: 0,
    MOUSE_ENTER: 1,
    MOUSE_DOWN: 2,
};

type TProps = {
    mainText: string;
    initToolTipText: string;
    finishToolTipText: string;
}

const delaySetStateHandler = (time: number, func: () => void) => {
    setTimeout(func, time);
};

const delay = async (time: number) => {
    return new Promise(resolve => setTimeout(resolve, time));
};

const FaReg = ({ mainText, initToolTipText, finishToolTipText }: TProps) => {
    const [mouseState, setMouseState] = useState<number>(STATE.MOUSE_LEAVE);
    const [textState, setTextState] = useState<string>(initToolTipText);

    useEffect(() => {
        if (mouseState === STATE.MOUSE_DOWN) {
            setTextState(finishToolTipText);
        } else if (mouseState === STATE.MOUSE_LEAVE) {
            setTextState(initToolTipText);
        }
    }, [mouseState])

    return (
        <FaRegStyle>
            <div
                className="fa-reg"
                onMouseEnter={() => setMouseState(STATE.MOUSE_ENTER)}
                onMouseLeave={() => setMouseState(STATE.MOUSE_LEAVE)}
                onMouseDown={() => setMouseState(STATE.MOUSE_DOWN)}
                onMouseUp={() => setMouseState(STATE.MOUSE_ENTER)}
            >
                {mouseState === STATE.MOUSE_ENTER
                    ? <FaCopy onClick={() => copyText(mainText)} />
                    : mouseState === STATE.MOUSE_LEAVE
                        ? <FaRegCopy />
                        : <BsCheckLg />
                }
            </div>
            <div className="tooltip">
                <span className="tooltiptext">{textState}</span>
            </div>
        </FaRegStyle >
    );
};

const FaRegStyle = styled.div`
    position: relative;

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
    .fa-reg:hover + .tooltip .tooltiptext {
        visibility: visible;
    }

    .tooltip {
        position: absolute;
        left: 50%;
        top: calc(-100% - 12px);
        transform: translateX(-50%);
        width: auto;
        
        .tooltiptext {
            display: flex;
            white-space: nowrap;
            visibility: hidden;
            background-color: rgb(33, 51, 91);
            border-radius: 6px;
            color: white;
            text-align: center;
            bottom: 100%;
            width: auto;
            padding: 2px 5px 2px 5px;

            z-index: 1;
        }

        .tooltiptext::after {
            content: " ";
            position: absolute;
            top: 100%; /* At the bottom of the tooltip */
            left: 50%;
            margin-left: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: rgb(33, 51, 91) transparent transparent transparent;
        }
    }
`;

export default FaReg;