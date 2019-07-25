import React from 'react';

function Spinner(props) {
    return (
        <div className="spinner-container">
            <div className="lds-spinner"><div></div><div></div><div></div></div>
        </div>
    );
}

export default Spinner;