import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
    return (
        <div>
            <nav>
                <div className="nav-container">
                    {!inHomePage(props) ?
                        <div className="nav-back" onClick={() => props.history.goBack()}><i className="fa fa-long-arrow-left"></i></div>
                        :
                        ''
                    }
                    <div className="nav-title">
                        {!inHomePage(props) ?
                            <span>
                                {props.title}
                            </span>
                            :
                            <Link to={'/'}>
                                {props.title}
                            </Link>
                        }
                    </div>

                    {inHomePage(props) && props.refreshPage ?
                        <div className="nav-refresh" onClick={() => props.refreshPage()}><i className="fa fa-refresh"></i></div>
                        :
                        ''
                    }
                </div>
            </nav>
        </div>

    );
}

function inHomePage(props) {
    return props.history === undefined;
}

export default NavBar;