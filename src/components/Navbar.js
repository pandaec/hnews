import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(props) {
    return (
        <div>
            <nav>
                <div className="nav-container">
                    {props.history ?
                        <div className="nav-back" onClick={() => props.history.goBack()}><i className="fa fa-long-arrow-left"></i></div>
                        :
                        ''
                    }
                    <div className="nav-title">
                        {props.history ?
                            <span>
                                {props.title}
                            </span>
                            :
                            <Link to={'/'}>
                                {props.title}
                            </Link>
                        }
                    </div>
                </div>
            </nav>
        </div>

    );
}

export default NavBar;