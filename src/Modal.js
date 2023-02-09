import React from 'react';

const MODAL_STYLES = {
    position:'fixed',
    top:'50%',
    left:'50%',
    transform: 'translate(-50%,50%)',
    backgroundColor:'#fff',
    padding:'50px',
    zIndex: 1000
}

const Modal = (props) => {
    if(!props.open) return null

    return (
        <>
            <div style={OVERLAY_STYLE} />
            <div style={MODAL_STYLES}>
            <button onClick={props.onClose}>Close Modal</button>
                {props.children}
            </div>
        </>
    );
}

export default Modal;