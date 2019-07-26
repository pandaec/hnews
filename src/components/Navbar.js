import React from 'react';

function NavBar(props) {
    return (
        <div>
            <nav>
                <div className="nav-container">
                    { props.history ? 
                        <div className="nav-back" onClick={()=>props.history.goBack()}><i className="fa fa-long-arrow-left"></i></div>
                        :
                        ''
                    }
                    <div className="nav-title">
                        <span>
                            {props.title}
                        </span>
                    </div>
                </div>
            </nav>
        </div>

    );
}

export default NavBar;