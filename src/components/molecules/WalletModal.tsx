import styled from "styled-components";

const WalletModal = () => (
    <WalletModalStyle className="modal">
        <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title">Modal title</h4>
            </div>
            <div className="modal-body">
                This is modal content
            </div>
            <div className="modal-footer">
                <button className="button">Close</button>
            </div>
        </div>
    </WalletModalStyle>
);

const WalletModalStyle = styled.div`
    
`;

export default WalletModal;