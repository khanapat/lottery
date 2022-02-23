import styled from "styled-components";
import { CgClose } from "react-icons/cg";

type TProps = {
    title: string;
    width: number;
    isOpen: boolean;
    onClickClose: () => void;
    body?: React.ReactNode;
    footer?: React.ReactNode;
};

const Modal = ({ title, width, isOpen, onClickClose, body, footer }: TProps) => (
    isOpen
        ? <ModalStyle width={width} onClick={onClickClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">{title}</h4>
                    <CgClose className="modal-close" onClick={onClickClose} />
                </div>
                <div className="modal-body">
                    {body}
                </div>
                <div className="modal-footer">
                    {footer}
                </div>
            </div>
        </ModalStyle>
        : <></>
);

type TStyle = {
    width: number;
};

const ModalStyle = styled.div<TStyle>`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .modal-content {
        width: ${(props) => props.width}px;
        background-color: #fff;
        padding: 10px;
    }

    .modal-header {
        display: flex;
        justify-content: space-between;

        .modal-close {
            cursor: pointer;
        }
    }

    .modal-body {
        padding: 10px;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        /* display: flex;
        align-items: center;
        justify-content: center; */
    }
`;

export default Modal;