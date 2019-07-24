import React from 'react';

function Paging(props) {
    return (
        <div className="paging">
            <i className="fa fa-chevron-left" onClick={props.prevPage.bind(this)}></i>
            <span> PAGE {props.page} </span>
            <i className="fa fa-chevron-right" onClick={props.nextPage.bind(this)}></i>
        </div>
    );
}

export default Paging;