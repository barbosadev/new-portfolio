import React, { Component } from 'react';

class Header extends Component{//eslint-disable-next-line
    render(){
        return <header>
            <nav className="navbar navbar-expand fixed-top navbar-light bg-info justify-content-center">
                <ul className="navbar-nav h6">
                    <li className="nav-item">
                        <a className="nav-link" href="#a">Perfil</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#a">Formação</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#a">Contato</a>
                    </li>
                </ul>
            </nav>
        </header>
    }
}
export default Header;