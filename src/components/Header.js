import React, { Component } from 'react';

class Header extends Component{
    render(){
        return <header>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-bottom">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#a">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#a">Link</a>
                        </li>
                    </ul>
                </div>    
                <a className="navbar-brand" href="#a">vldbarbosa</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        </header>
    }
}
export default Header;