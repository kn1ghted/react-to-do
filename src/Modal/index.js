import React from "react";
import ReactDOM from "react-dom";

// import style
import './Modal.css';

// Component using PORTALS to render code to a different element of the index html
function Modal({ children }){
    return ReactDOM.createPortal(
        <div className="modal-bg">
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };